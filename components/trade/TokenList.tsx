import { useEffect, useMemo, useState } from 'react'
import { Stack, Text, Box, Flex } from '@chakra-ui/layout'
import { Spinner } from '@chakra-ui/spinner'
import { useDispatch, useSelector } from 'react-redux'
import { Input, InputGroup } from '@chakra-ui/input'
import { useTranslation } from 'react-i18next'
import { getCoins } from 'redux/actions'
import { DEFAULT_TOKENS } from 'utils'
import { Image } from 'components/utility'

type TokenListProps = {
  onSelect: (ticker: string, address: string, tokenId: string) => void
  // search: string
}

// NOTE: Implementing token search - it can be achieved
// simply by creating input with debounced value (outside
// TokenList and pass it by props) that is able to
// detect if the value is address or the ticker
// if ticker = filter available tokens to display only matched ticker
// if address = do anything else related to custom token search
export function TokenList({ onSelect /* search: string */ }: TokenListProps) {
  const dispatch = useDispatch()
  const { coins } = useSelector((state: RootState) => state.coin)
  const { t } = useTranslation()
  const [search, setSearch] = useState<string>('')

  const tokens = useMemo(() => {
    if (search.length > 0) {
      let serchToken: any
      serchToken = coins.filter((c) => c.symbol.toLowerCase().includes(search.toLowerCase()))
      console.log(serchToken)
      if (!Object.keys(serchToken).length) {
        serchToken = coins.filter((c) => c.address.toLowerCase().includes(search.toLowerCase()))
      }
      return serchToken
    }
    return DEFAULT_TOKENS
  }, [coins, search])

  useEffect(() => {
    dispatch(getCoins())
  }, [])
  // console.log(tokens)
  return (
    <>
      <InputGroup maxW="var(--input-width)" marginBottom="8px">
        <Input
          size="sm"
          variant="outline"
          placeholder={t('TRADE_FORM_SEARCH_TOKEN_PLACEHOLDER')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>
      <Stack direction="column" overflow="auto" maxHeight="50vh">
        {tokens.map(
          ({
            id: tokenId,
            symbol: tokenTicker,
            logoURI: tokenLogo,
            platforms: { 'binance-smart-chain': tokenAddress }
          }) => (
            <Stack
              direction="row"
              align="center"
              key={tokenId}
              p={1}
              transition="background-color .2s ease"
              onClick={() => {
                onSelect(tokenTicker, tokenAddress, tokenId)
              }}
              _hover={{
                cursor: 'pointer',
                bg: 'primary'
              }}
            >
              {tokenLogo ? (
                <Image src={tokenLogo} ml={1} width={24} height={24} />
              ) : (
                <Box w="24px" h="24px" bg="white" />
              )}
              <Flex flexDirection="column" justify="center" align="space-between" flexWrap="wrap">
                <Text fontSize="2xl" textTransform="uppercase">
                  {tokenTicker}
                </Text>
                <Text fontSize="sm" pb={2}>
                  {tokenAddress}
                </Text>
              </Flex>
            </Stack>
          )
        )}
      </Stack>
    </>
  )
}
