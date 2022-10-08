import type { TradeFormValues } from 'types'
import { useState, useEffect } from 'react'
import { Heading, Box, Text, Flex, Stack } from '@chakra-ui/layout'
import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/modal'
import { Tooltip } from '@chakra-ui/tooltip'
import { Icon } from '@chakra-ui/icon'
import { Button } from '@chakra-ui/button'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import Web3 from 'web3'
import BigNumber from 'big-number'
import { Info } from 'components/icons/general'
import { getQuoteZrx, getSwapAllowance, getSwapZrx } from 'components/api/zrx'
import { appConfig } from 'components/appConfig'

type PostTradeFormModalProps = {
  tradeFormValues: TradeFormValues
  isOpen: boolean
  onClose: () => void
}

type PostTradeStage = 'confirm' | 'wallet-confirm' | 'success' | 'finish'

// TODO: Here comes all the trading logic.
// PostTradeFormModal is main component that is displayed
// after successful  TradeForm submission
// It accepts mentioned earlier trade form's values (and optionally options)
// in props, then displays corresponding (dependens on which step of exchange is user currently)
// modal content. The standard flow is:
//
// Form submission -> Modal with confirmation -> Same modal but with wallet confirm -> Same modal with success message
export function PostTradeFormModal({ isOpen, onClose, tradeFormValues }: PostTradeFormModalProps) {
  const [postTradeStage, setPostTradeStage] = useState<PostTradeStage>('confirm')
  // TODO: This is dummy value for presentation purpose. It can be anything that is
  // capable of identification of transaction made to display transaction status in TradeStatus component.
  const [transactionId, setTransactionId] = useState(null)

  useEffect(() => {
    if (postTradeStage === 'finish') {
      console.log({ tradeFormValues })
      setPostTradeStage('confirm')
      onClose()
    }
  }, [postTradeStage])

  const handleClose = () => {
    setPostTradeStage('confirm')
  }

  return (
    <Modal
      variant="glassy"
      closeOnOverlayClick={false}
      preserveScrollBarGap
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent as={Flex} p={8}>
        {postTradeStage !== 'success' ? <ModalCloseButton onClick={handleClose} /> : null}
        {postTradeStage === 'confirm' ? (
          <TradeConfirmation
            setTransactionId={setTransactionId}
            tradeFormValues={tradeFormValues}
            setStage={setPostTradeStage}
          />
        ) : postTradeStage === 'wallet-confirm' ? (
          <TradeWalletConfirmation
            setTransactionId={setTransactionId}
            tradeFormValues={tradeFormValues}
            setStage={setPostTradeStage}
          />
        ) : postTradeStage === 'success' ? (
          <TradeSuccess
            setTransactionId={setTransactionId}
            tradeFormValues={tradeFormValues}
            setStage={setPostTradeStage}
          />
        ) : null}
      </ModalContent>
    </Modal>
  )
}

type TradeStageComponentProps = {
  tradeFormValues: TradeFormValues
  setStage: any
  setTransactionId: any
}

function TradeConfirmation({
  tradeFormValues,
  setTransactionId,
  setStage
}: TradeStageComponentProps) {
  const { t } = useTranslation()
  const {
    from: { value: fromValue, ticker: fromTicker, address: fromAddress },
    to: { value: toValue, ticker: toTicker, address: toAddress },
    slippage
  } = tradeFormValues

  const checkToApproveNativeToken = () => {
    let isCheckNativeToken = false
    if (tradeFormValues.from.ticker === 'ETH' || tradeFormValues.from.ticker === 'BNB') {
      isCheckNativeToken = true
    }
    return isCheckNativeToken
  }

  const handleConfirm = async () => {
    const walletAddress = appConfig.walletAddress
    const web3 = new Web3(window.ethereum)
    const amount = Math.floor(
      Number(tradeFormValues.from.value * 10 ** tradeFormValues.from.decimal)
    )
    const slippagePersentage = slippage / 100

    if (checkToApproveNativeToken()) {
      const data = await getSwapZrx(
        tradeFormValues.from.address,
        tradeFormValues.to.address,
        amount,
        walletAddress,
        slippagePersentage
      )
      console.log(data)
      await web3.eth.sendTransaction(data)
    } else {
      const swapAllowance = await getSwapAllowance(
        tradeFormValues.from.address,
        tradeFormValues.to.address,
        amount,
        slippagePersentage
      )

      const TokenAbi = require('./ABI.json')
      const Tokencontract = new web3.eth.Contract(TokenAbi, swapAllowance.sellTokenAddress)
      const maxApproval = BigNumber(2).pow(256).minus(1).toString()

      const spendAllowed = await Tokencontract.methods.allowance(walletAddress, swapAllowance.allowanceTarget).call()
      if (spendAllowed < swapAllowance.sellAmount) {
        await Tokencontract.methods
          .approve(swapAllowance.allowanceTarget, maxApproval)
          .send({ from: walletAddress })
          .then((data: any) => {
            alert('Spend Allowed');
            console.log(data)
          })
          .catch((error: any) => {
            console.log(error)
          })
      }
      const txHash = await web3.eth.sendTransaction({
        from: walletAddress,
        to: swapAllowance.allowanceTarget,
        data: swapAllowance.data,
        gas: 500000,
        chainId: 56,
      })
      if (txHash) {
        alert('Exhange Swap Success')
      } else {
        alert('Something Went Wrong!')
      }
    }

    // TODO: Make API call here to begin the transaction
    // and retrieve something capable of setting the transaction id (?)
    // to display transaction status in next stage of the
    setTransactionId('testvalue')
    // NOTE: Move to next stage
    setStage('wallet-confirm')
  }

  return (
    <Stack direction="column" spacing={8}>
      <Heading
        fontSize="2xl"
        fontWeight="normal"
        fontFamily="Formation Sans"
        textTransform="uppercase"
      >
        {t('TRADE_FORM_CONFIRMATION_POPUP_LABEL')}
      </Heading>
      <Box px={8}>
        <Stack direction="row" justify="space-between">
          <Heading fontSize="2xl" fontFamily="Lato" textTransform="uppercase" fontWeight="normal">
            {fromTicker}
          </Heading>
          <Text fontSize="xl" fontFamily="Lato">
            {fromValue}
          </Text>
        </Stack>
        <Box my={2} w={4} h={4} bg="white" />
        <Stack direction="row" justify="space-between">
          <Heading fontSize="2xl" fontFamily="Lato" textTransform="uppercase" fontWeight="normal">
            {toTicker}
          </Heading>
          <Text fontSize="xl" fontFamily="Lato">
            {toValue}
          </Text>
        </Stack>
      </Box>
      {/* TODO: Please check if this is what it is supposed to be */}
      <Text fontFamily="Lato" fontSize="xl" fontStyle="italic" fontWeight="bold">
        {t('TRADE_FORM_CONFIRMATION_POPUP_ESTIMATION', {
          value: fromValue - (slippage / 100) * fromValue,
          token: fromTicker
        })}
      </Text>
      <Stack fontFamily="Lato" direction="column">
        <Stack direction="row" justify="space-between">
          <Text fontWeight="bold">{t('TRADE_FORM_CONFIRMATION_POPUP_PRICE')} </Text>
          {/* TODO: Get this from API*/}
          <Text as="data" value="13076.6/JEWEL/1WBTC">
            13076.6/JEWEL/1WBTC
          </Text>
        </Stack>
        <Stack direction="row" justify="space-between">
          <Text fontWeight="bold">
            {t('TRADE_FORM_CONFIRMATION_POPUP_MAX_SOLD')}{' '}
            <Tooltip
              placement="right"
              py={0}
              px={2}
              label={t('TRADE_FORM_CONFIRMATION_POPUP_MAX_SOLD_TOOLTIP')}
            >
              <Box display="inline">
                <Icon as={Info} w={4} h={4} />
              </Box>
            </Tooltip>
          </Text>
          {/* TODO: Get this from API*/}
          <Text as="data" value="0.0003074 1WBTC">
            0.0003074 1WBTC
          </Text>
        </Stack>
        <Stack direction="row" justify="space-between">
          <Text fontWeight="bold">
            {t('TRADE_FORM_CONFIRMATION_POPUP_PRICE_IMPACT')}{' '}
            <Tooltip
              placement="right"
              py={0}
              px={2}
              label={t('TRADE_FORM_CONFIRMATION_POPUP_PRICE_IMPACT_TOOLTIP')}
            >
              <Box display="inline">
                <Icon as={Info} w={4} h={4} />
              </Box>
            </Tooltip>
          </Text>
          {/* TODO: Get this from API*/}
          <Text as="data" color="positive" value={'<0,01%'}>
            {'<0,01%'}
          </Text>
        </Stack>
        <Stack direction="row" justify="space-between">
          <Text fontWeight="bold">
            {t('TRADE_FORM_CONFIRMATION_POPUP_LQ_PROVIDER_FEE')}{' '}
            <Tooltip
              placement="right"
              py={0}
              px={2}
              label={t('TRADE_FORM_CONFIRMATION_POPUP_LQ_PROVIDER_FEE_TOOLTIP')}
            >
              <Box display="inline">
                <Icon as={Info} w={4} h={4} />
              </Box>
            </Tooltip>
          </Text>
          {/* TODO: Get this from API*/}
          <Text as="data" value="0.0000091 1WBTC">
            0.0000091 1WBTC
          </Text>
        </Stack>
      </Stack>
      <Button variant="regular-cta" onClick={handleConfirm}>
        Confirm
      </Button>
    </Stack>
  )
}

function TradeWalletConfirmation({ tradeFormValues, setTransactionId, setStage }) {
  const { t } = useTranslation()

  const {
    from: { value: fromValue, ticker: fromTicker },
    to: { value: toValue, ticker: toTicker }
  } = tradeFormValues

  // TODO: API connection
  // This is dummy behavior just to fill something
  useEffect(() => {
    dummyBehavior()
    async function dummyBehavior() {
      await new Promise((resolve) => setTimeout(() => resolve(null), 2000))
      // NOTE: Move to next stage
      setStage('success')
    }
  }, [])

  return (
    <Stack p={8} direction="column">
      <Heading
        fontSize="2xl"
        fontWeight="normal"
        fontFamily="Formation Sans"
        textTransform="uppercase"
      >
        {t('TRADE_FORM_CONFIRMATION_WALLET_POPUP_LABEL')}
      </Heading>
      <Flex px={8} py={8} my={8} justify="center" align="center">
        <Box w="100px" h="100px" bg="white" />
      </Flex>
      <Stack fontFamily="Lato" direction="column">
        <Stack direction="row" justify="space-between">
          <Text fontWeight="bold">{t('TRADE_FORM_CONFIRMATION_WALLET_POPUP_SWAPPING')}</Text>
          <Text>
            {fromValue} {fromTicker}
          </Text>
        </Stack>
        <Stack direction="row" justify="space-between">
          <Text fontWeight="bold">{t('TRADE_FORM_CONFIRMATION_WALLET_POPUP_FOR')}</Text>
          <Text>
            {toValue} {toTicker}
          </Text>
        </Stack>
      </Stack>
      <Text pt={8} textAlign="center">
        {t('TRADE_FORM_CONFIRMATION_WALLET_POPUP_CONFIRM_WALLET')}
      </Text>
    </Stack>
  )
}

function TradeSuccess({ tradeFormValues, setTransactionId, setStage }) {
  const { t } = useTranslation()

  const {
    to: { ticker: toTicker }
  } = tradeFormValues

  return (
    <Stack p={8} direction="column">
      <Heading
        color="positive"
        fontSize="2xl"
        fontWeight="normal"
        fontFamily="Formation Sans"
        textTransform="uppercase"
      >
        {t('TRADE_FORM_CONFIRMATION_SUCCESS_POPUP_LABEL')}
      </Heading>
      <Flex px={8} py={8} my={8} justify="center" align="center">
        <Box w="100px" h="100px" bg="white" />
      </Flex>
      <Text pt={8} textAlign="center">
        {t('TRADE_FORM_CONFIRMATION_SUCCESS_POPUP_VIEW_ON_HEXPLORER')}
      </Text>
      <Button variant="regular-cta" leftIcon={<Box w="8px" h="8px" bg="white" />}>
        {t('TRADE_FORM_CONFIRMATION_SUCCESS_POPUP_ADD_TO_MM', { value: toTicker })}
      </Button>
      <Button variant="regular-cta" onClick={() => setStage('finish')}>
        close
      </Button>
    </Stack>
  )
}
