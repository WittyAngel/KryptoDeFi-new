import type { TokenTXFeedProps } from 'types'
import { Flex, Stack, Text } from '@chakra-ui/layout'

// TODO: Finish this
export function TokenTXFeed({ items }: TokenTXFeedProps) {
  return (
    <Flex flexDir="column" w="100%" overflowY="hidden">
      <Stack w="100%" direction="row" justify="space-between" spacing={3}>
        <Flex justify="flex-start">type</Flex>
        <Flex justify="center">tokens</Flex>
        <Flex justify="center">TX price</Flex>
        <Flex justify="center">price/token</Flex>
        <Flex justify="flex-start">time</Flex>
        <Flex justify="flex-end">TX tracker</Flex>
      </Stack>
      {items.map(
        ({ type, tokens, txPrice: { dollar }, tokenName, dollarPrice, time, txTracker }) => (
          <Stack
            pb={2}
            w="100%"
            justify="space-between"
            color={type === 'buy' ? 'positive' : 'negative'}
            fontSize="xs"
            key={`${type}${tokens}${time}`}
            direction="row"
            spacing={3}
          >
            <Flex justify="flex-start" align="center" fontSize="14px">
              {type}
            </Flex>
            <Flex align="center" justify="center" fontFamily="Lato">
              {tokens}
            </Flex>
            <Text as="span" fontSize="lg" textAlign="center">
              {'$'}
              {dollar}
            </Text>
            <Flex flexDir="column" justify="flex-start">
              <Text as="span" fontFamily="lato" fontSize="lg" textAlign="right">
                {'$'}
                {dollarPrice}
              </Text>
              <Text as="small" mt={-3}>
                {tokenName}
              </Text>
            </Flex>
            <Flex justify="flex-start">{time}</Flex>
            <Flex justify="flex-end">{txTracker}</Flex>
          </Stack>
        )
      )}
    </Flex>
  )
}
