import { useState, useCallback, useEffect, useReducer } from 'react'
import { Flex, Text, Box, LinkBox, Stack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Icon } from '@chakra-ui/icon'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/modal'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers } from 'ethers'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'

import { IconLink, Image, LinkOverlay } from 'components/utility'
import { Setting } from 'components/icons/general'
import { RegisterForm, LoginForm } from 'components/auth'
import { ellipseAddress, getChainData } from 'libs/utilities'
import { appConfig } from './appConfig'

const providerOptions = {}

let web3Modal
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet', // optional
    cacheProvider: true,
    providerOptions // required
  })
}

type StateType = {
  provider?: any
  web3Provider?: any
  address?: string
  chainId?: number
}

type ActionType =
  | {
      type: 'SET_WEB3_PROVIDER'
      provider?: StateType['provider']
      web3Provider?: StateType['web3Provider']
      address?: StateType['address']
      chainId?: StateType['chainId']
    }
  | {
      type: 'SET_ADDRESS'
      address?: StateType['address']
    }
  | {
      type: 'SET_CHAIN_ID'
      chainId?: StateType['chainId']
    }
  | {
      type: 'RESET_WEB3_PROVIDER'
    }

const initialState: StateType = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null
}

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'SET_WEB3_PROVIDER':
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.address
      }
    case 'SET_CHAIN_ID':
      return {
        ...state,
        chainId: action.chainId
      }
    case 'RESET_WEB3_PROVIDER':
      return initialState
    default:
      throw new Error()
  }
}

export function SiteHeader() {
  const { authenticated } = useSelector((state: RootState) => state.auth)

  const [state, dispatch] = useReducer(reducer, initialState)
  const { provider, web3Provider, address, chainId } = state

  const connect = useCallback(async function () {
    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    const provider = await web3Modal.connect()

    // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.
    const web3Provider = new providers.Web3Provider(provider)

    const signer = web3Provider.getSigner()
    const address = await signer.getAddress()
    localStorage.setItem('connectedAddress', address)

    const network = await web3Provider.getNetwork()

    dispatch({
      type: 'SET_WEB3_PROVIDER',
      provider,
      web3Provider,
      address,
      chainId: network.chainId
    })
  }, [])

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      localStorage.removeItem('connectedAddress')
      dispatch({
        type: 'RESET_WEB3_PROVIDER'
      })
    },
    [provider]
  )

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  // A `provider` should come with EIP-1193 events. We'll listen for those events
  // here so that when a user switches accounts or networks, we can update the
  // local React state with that new information.
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        console.log('accountsChanged', accounts)
        localStorage.setItem('connectedAddress', accounts[0])
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0]
        })
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId: string) => {
        window.location.reload()
      }

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])

  const chainData = getChainData(chainId)
  if (chainData) {
    localStorage.setItem('RPC_URL', chainData.rpc_url)
  }
  appConfig.walletAddress = address

  return (
    <Flex direction="row" justify="space-between" align="center">
      <LinkBox>
        <LinkOverlay href="/">
          <Image src="/logo-md.svg" width={100} height={70} />
        </LinkOverlay>
      </LinkBox>
      <Stack direction="row" spacing={8} align="center">
        {!authenticated && <LoginModal />}
        {address ? <Box border="1px solid white">{ellipseAddress(address)}</Box> : ''}
        {web3Provider ? (
          <Button variant="regular-tight" onClick={disconnect}>
            Disconnect
          </Button>
        ) : (
          <Button variant="regular-tight" onClick={connect}>
            Connect wallet
          </Button>
        )}
        {/* <Button variant="regular-tight" onClick={onConnectWallet}>
          connect wallet
        </Button> */}
        <IconLink icon={<Icon as={Setting} w={8} h={8} />} href="/settings" />
      </Stack>
    </Flex>
  )
}

function LoginModal() {
  const [formType, setFormType] = useState<'register' | 'login'>('login')
  const { onOpen, isOpen, onClose } = useDisclosure()
  const { t } = useTranslation()

  const handleClose = () => {
    setFormType('login')
    onClose()
  }

  return (
    <>
      <Button variant="regular-tight" onClick={onOpen}>
        {t('SITE_HEADER_LOG_IN')}
      </Button>
      <Modal preserveScrollBarGap isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader as={Flex} pb={0} justify="center">
            <Image src="/logo-md.svg" width={200} height={140} />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pt={0}>
            {formType === 'register' ? (
              <RegisterForm onSuccess={handleClose} />
            ) : (
              <LoginForm onSuccess={handleClose} />
            )}
          </ModalBody>
          <ModalFooter as={Stack} direction="row" align="center">
            {formType === 'register' ? (
              <>
                <Text>{t('AUTH_MODAL_DO_HAVE_ACCOUNT_REGISTER')}</Text>
                <Button onClick={() => setFormType('login')}>{t('LOGIN')}</Button>
              </>
            ) : (
              <>
                <Text>{t('AUTH_MODAL_DO_NOT_HAVE_ACCOUNT_LOGIN')}</Text>
                <Button onClick={() => setFormType('register')}>{t('REGISTER')}</Button>
              </>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
