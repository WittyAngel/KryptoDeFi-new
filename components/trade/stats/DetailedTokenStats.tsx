import { Stack, Text, Box } from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/icon'
import { Tooltip } from '@chakra-ui/tooltip'
import { useTranslation } from 'react-i18next'

import { Info } from 'components/icons/general'
import { LiquidityUnlocked, LiquidityLocked } from 'components/icons/trade'
import { numberWithCommas } from 'libs/utilities'

type DetailedTokenStatsProps = {
  marketCap: number
  totalSupply: number
  // liquidity: {
  //   state: 'locked' | 'unlocked'
  //   value: number
  // }
}

export function DetailedTokenStats({
  marketCap,
  totalSupply
}: // liquidity: { state: liquidityState, value: liquidityValue }
DetailedTokenStatsProps) {
  const { t } = useTranslation()

  return (
    <Stack direction="row" spacing={8}>
      <Stack direction="row" align="baseline">
        <Text as="data" fontSize="xl" value={`${marketCap}`}>
          {t('DETAILED_TOKEN_STATS_MARKET_CAP')}
        </Text>
        <Text as="span" fontFamily="Lato">
          ${numberWithCommas(marketCap)}
        </Text>
      </Stack>
      <Stack direction="row" align="baseline">
        <Text as="data" fontSize="xl" value={`${totalSupply}`}>
          {t('DETAILED_TOKEN_STATS_TOTAL_SUPPLY')}
        </Text>
        <Text as="span" fontFamily="Lato">
          {numberWithCommas(totalSupply)}
        </Text>
      </Stack>
      {/* <Stack direction="row" align="baseline">
        <Text
          color={liquidityState === 'unlocked' ? 'negative' : 'positive'}
          as="data"
          fontSize="xl"
          value={`${liquidityValue}`}
        >
          {liquidityState === 'unlocked' ? (
            <Icon as={LiquidityUnlocked} w={6} h={6} />
          ) : (
            <Icon as={LiquidityLocked} w={6} h={6} />
          )}{' '}
          {t('DETAILED_TOKEN_STATS_LIQUIDITY')}{' '}
          <Tooltip
            placement="top"
            label={
              liquidityState === 'unlocked'
                ? t('DETAILED_TOKEN_STATS_LIQUIDITY_UNLOCKED')
                : t('DETAILED_TOKEN_STATS_LIQUIDITY_LOCKED')
            }
          >
            <Box as="span">
              <Icon as={Info} w={4} h={4} />
            </Box>
          </Tooltip>
        </Text>
        <Text as="span" fontFamily="Lato">
          {'$'}
          {liquidityValue}
          {' BUSD/BNB'}
        </Text>
      </Stack> */}
    </Stack>
  )
}
