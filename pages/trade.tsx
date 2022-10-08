import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/hooks'
import { TokenTXFeedProps, TradeFormValues, TradeSettings, TradeTickerProps } from 'types'

import { TokenSearch, TradeForm, TradeChart } from 'components/trade'
import { GeneralTokenStats, DetailedTokenStats } from 'components/trade/stats'
import { TokenTXFeed } from 'components/trade/feed'
import { PostTradeFormModal } from 'components/trade/PostTradeFormModal'
import { useLocalStorage } from 'hooks'
import { initialTradeSettings } from 'utils'
import { getTokenInfo } from 'services/getTokenInfo'

export default function TradePage() {
  // TODO: Get selected token info from API.
  // Currently, there is only token name but you can
  // easily set token metadata by passing specific props to
  // DetailedTokenStats and GeneralTokenStats components.
  const [currentToken, setCurrentToken] = useState<any>({
    ticker: 'BNB',
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
  })
  const [tradeTicker, setTradeTicker] = useState<TradeTickerProps>({
    from: 'BNB',
    to: 'USDT'
  })

  const [tokenId, setTokenId] = useState<string>()
  const [marketCap, setMarketCap] = useState<number>(0)
  const [totalSupply, setTotalSupply] = useState<number>(0)
  // const [liquidity, setLiquidity] = useState<number>(0)

  useEffect(() => {
    getTokenInfo(tokenId).then((res) => {
      setTotalSupply(res.market_data.total_supply)
      setMarketCap(res.market_data.market_cap.usd)
      // setLiquidity(res.liquidity_score)
    })
  }, [tokenId])

  return (
    <>
      <Flex w="70%" h="100px" mb={4}>
        <Flex w="150px" flexDir="column" justify="flex-end">
          {/* NOTE: Currently, there are dummy values but you can */}
          {/* easily set token metadata by passing specific props here */}
          {/* <GeneralTokenStats
            token={currentToken}
            price={{ state: 'negative', value: 45.66 }}
            socials={{
              twitter: 'https://twitter.com/',
              telegram: 'https://telegram.com/',
              custom: 'https://krypto.army/'
            }}
          /> */}
        </Flex>
        <Flex w="100%" align="flex-end" justify="flex-start" mr={4}>
          {/* NOTE: Currently, there are dummy values but you can */}
          {/* easily set token metadata by passing specific props here */}
          <DetailedTokenStats
            marketCap={marketCap === null ? 0 : marketCap}
            // liquidity={{ state: 'unlocked', value: 4213412 }}
            totalSupply={totalSupply === null ? 0 : totalSupply}
          />
        </Flex>
      </Flex>
      <Flex w="100%">
        <Flex w="100%" h="642px" bg="#121212" mr={4}>
          <TradeChart tradeTicker={tradeTicker} />
        </Flex>
        <Flex minW="400px" maxW="400px" flexDir="column">
          <Flex w="100%" h="800px" bg="#212624" mb={4}>
            <TradeFormWindow
              outsideFormToken={tradeTicker.to}
              onTokenChange={(ticker, address, tokenId) => {
                setCurrentToken({
                  ticker: ticker,
                  address: address
                })
                setTokenId(tokenId)
              }}
              setTradeTicker={setTradeTicker}
            />
          </Flex>
          {/* <Flex w="100%" h="300px">
            <TokenTXFeedWindow
              items={[
                {
                  type: 'buy',
                  tokens: 42.4123,
                  time: '22:00:01',
                  txPrice: {
                    dollar: 130,
                    bnb: 0.143
                  },
                  tokenName: 'PK v2',
                  txTracker: '0xDEAD',
                  dollarPrice: 900
                }
              ]}
            />
          </Flex> */}
        </Flex>
      </Flex>
    </>
  )
}

type TradeFormWindowProps = {
  onTokenChange: (ticker: string, address: string, tokenId: string) => void
  setTradeTicker: (tickers: TradeTickerProps) => void
  outsideFormToken: string
}

// TODO: Do something with tradeSettings and tradeValues
// They can also be used in PostTradeFormModal
function TradeFormWindow({
  onTokenChange,
  setTradeTicker,
  outsideFormToken
}: TradeFormWindowProps) {
  const [tradeFormValues, setTradeFormValues] = useState<TradeFormValues>()
  const [previousTradeSettings] = useLocalStorage<TradeSettings>(
    'tradeSettings',
    initialTradeSettings
  )
  const [tradeSettings, setTradeSettings] = useState<TradeSettings>(previousTradeSettings)

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (tradeFormValues && Object.keys(tradeFormValues).length !== 0) {
      onOpen()
    }
  }, [tradeFormValues])

  const handleTradeFormSuccess = (values: TradeFormValues) => {
    setTradeFormValues(values)
  }

  const handleTradeFormSettingsChange = (settings: TradeSettings) => {
    setTradeSettings(settings)
  }

  return (
    <>
      <Box
        as="aside"
        w="100%"
        borderRadius="md"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="primary"
      >
        <Flex bg="#212322" w="100%" justify="center" p={12}>
          <TokenSearch onSelect={onTokenChange} onSettingsChange={handleTradeFormSettingsChange} />
        </Flex>
        <Box p={12} pt={0}>
          <TradeForm
            onSuccess={handleTradeFormSuccess}
            onTickerChange={setTradeTicker}
            outsideFormToken={outsideFormToken}
            tradeSettings={tradeSettings}
          />
        </Box>
      </Box>
      <PostTradeFormModal tradeFormValues={tradeFormValues} isOpen={isOpen} onClose={onClose} />
    </>
  )
}

function TokenTXFeedWindow({ items }: TokenTXFeedProps) {
  return (
    <Box
      as="aside"
      w="100%"
      p={2}
      borderRadius="md"
      borderWidth="1px"
      borderStyle="solid"
      bg="#222a26"
      borderColor="primary"
    >
      <TokenTXFeed items={items} />
    </Box>
  )
}
