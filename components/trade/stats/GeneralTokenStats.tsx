import { useState, useEffect } from 'react'
import { Box, Stack, Flex } from '@chakra-ui/layout'
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat'
import { Icon } from '@chakra-ui/icon'

import { Telegram, Twitter, Globe } from 'components/icons/social'
import { IconLink, Link, Image } from 'components/utility'
import { getQuoteZrx } from 'components/api/zrx'

type GeneralTokenStatsProps = {
  token: any
  // NOTE: base64 icon source from backend
  icon?: string
  price: {
    state: 'negative' | 'positive'
    value: number
  }
  socials: Partial<{
    twitter: string
    telegram: string
    custom: string
  }>
}

export function GeneralTokenStats({
  token,
  icon,
  price: { state: priceState, value: priceValue },
  socials: { twitter, telegram, custom }
}: GeneralTokenStatsProps) {
  const [price, setPrice] = useState('0.00');

  useEffect(() => {
    const fetchPrice = async () => {
      if (token.ticker === 'USDT') {
        setPrice('1.00')
      } else {
        const quote = await getQuoteZrx(
          token.address,
          '0x55d398326f99059ff775485246999027b3197955', // USDT address
          Math.floor(Number(1 * 10 ** 18))
        )
    
        setPrice((+quote.price).toFixed(2))
      }
    };
    fetchPrice();
  }, [token]);

  return (
    <Flex flexDir="row">
      <Box w="100%">
        <Stat as={Flex} justify="flex-end">
          <Stack direction="row" align="center">
            {icon && icon.length !== 0 ? (
              <Image src={icon} w={28} h={28} />
            ) : (
              <Box w="28px" h="28px" borderRadius="full" bg="primary" />
            )}
            <StatLabel fontWeight="bold" fontSize="2xl">
              {token.ticker}
            </StatLabel>
          </Stack>
          <StatNumber mt={-2} fontWeight="light" textAlign="right" color={priceState}>
            ${price}
          </StatNumber>
        </Stat>
        <Stack w="100%" direction="row" justify="space-between">
          {/* TODO: Passed by props (?) */}
          <Link href="/contract">contract</Link>
          <Link href="/holders">holders</Link>
        </Stack>
      </Box>
      <Stack ml={2} direction="column" spacing={0}>
        <IconLink href={twitter} icon={<Icon as={Twitter} w={6} h={6} />} />
        <IconLink href={telegram} icon={<Icon as={Telegram} w={10} h={10} />} />
        <IconLink href={custom} icon={<Icon as={Globe} w={6} h={6} />} />
      </Stack>
    </Flex>
  )
}
