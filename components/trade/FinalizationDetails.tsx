import { Flex, Box, Stack, Text } from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/icon'
import { Tooltip } from '@chakra-ui/tooltip'
import { useTranslation } from 'react-i18next'
import { QuoteData } from 'components/appConfig'
import { Info } from 'components/icons/general'

export function FinalizationDetails() {
  return (
    <Stack spacing={0}>
      {/* <MinimumReceived />
      <PriceImpact />
      <TransactionFee />
      <TransactionCost /> */}
      <GasCost/>
    </Stack>
  )
}

function MinimumReceived() {
  const { t } = useTranslation()

  // TODO: Calculation. The useWatch hook from react-hook-form
  // can be very useful here for getting current form values
  // and triggering this component updates :)

  return (
    <Flex flexDir="row" justify="space-between">
      <Text>{t('TRADE_FORM_FINALIZATION_DETAILS_MINIMUM_RECEIVED')}</Text>
      {/* TODO: Calculate this */}
      <Text fontFamily="Lato"></Text>
    </Flex>
  )
}


function GasCost() {
  const { t } = useTranslation()
  let TxGas = 0;
  if( QuoteData.gas > 0 ){
    TxGas = (QuoteData.gas/10 ** 9)
  }

  // TODO: Calculation. The useWatch hook from react-hook-form
  // can be very useful here for getting current form values
  // and triggering this component updates :)

  return (
    <Flex flexDir="row" justify="space-between">
      <Text>Gas</Text>
      {/* TODO: Calculate this */}
      <Text fontFamily="Lato">{TxGas} BNB</Text>
    </Flex>
  )
}

function PriceImpact() {
  const { t } = useTranslation()

  // TODO: Calculation. The useWatch hook from react-hook-form
  // can be very useful here for getting current form values
  // and triggering this component updates :)

  return (
    <Flex flexDir="row" justify="space-between">
      <Text>{t('TRADE_FORM_FINALIZATION_DETAILS_PRICE_IMPACT')}</Text>
      {/* TODO: Calculate this */}
      <Text fontFamily="Lato">0.5%</Text>
    </Flex>
  )
}

function TransactionFee() {
  const { t } = useTranslation()

  // TODO: Calculation. The useWatch hook from react-hook-form
  // can be very useful here for getting current form values
  // and triggering this component updates :)

  return (
    <Flex flexDir="row" justify="space-between">
      <Text>{t('TRADE_FORM_FINALIZATION_DETAILS_TRANSACTION_FEE')}</Text>
      <Stack direction="row" align="center">
        <Tooltip label="Transaction fee info">
          <Box>
            <Icon as={Info} w={5} h={5} />
          </Box>
        </Tooltip>
        {/* TODO: Calculate this */}
        <Text fontFamily="Lato">0.30%</Text>
      </Stack>
    </Flex>
  )
}

function TransactionCost() {
  const { t } = useTranslation()

  // TODO: Calculation. The useWatch hook from react-hook-form
  // can be very useful here for getting current form values
  // and triggering this component updates :)

  return (
    <Flex flexDir="row" justify="space-between">
      <Text>{t('TRADE_FORM_FINALIZATION_DETAILS_TRANSACTION_COST')}</Text>
      {/* TODO: Calculate this */}
      <Text fontFamily="Lato">10$</Text>
    </Flex>
  )
}
