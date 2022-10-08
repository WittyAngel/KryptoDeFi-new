import type { ChakraProps } from '@chakra-ui/react'
import type { TradeFormValues } from 'types'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/layout'
import { useDebouncedCallback } from 'use-debounce'
import { QuoteData } from 'components/appConfig'
import { getQuoteZrx } from 'components/api/zrx'

type CalculateSwapQuoteProps = ChakraProps

export function CalculateSwapQuote(props: CalculateSwapQuoteProps) {
  const [isCalculating, setIsCalculating] = useState<boolean>(false)
  const { watch, setValue } = useFormContext<TradeFormValues>()
  const { t } = useTranslation()

  const fromValue = watch('from.value')
  const fromTicker = watch('from.ticker')
  const fromAddress = watch('from.address')
  const fromdecimal = watch('from.decimal')
  const toAddress = watch('to.address')
  const toTicker = watch('to.ticker')

  // TODO: Reduce amount of magic hardcoded values :D
  const handleFromValueChangeReaction = useDebouncedCallback(async (value: number) => {
    setIsCalculating(true)
    console.log(fromAddress, ' and ', toAddress)
    const quote = await getQuoteZrx(
      fromAddress,
      toAddress,
      Math.floor(Number(fromValue * 10 ** fromdecimal))
    )
    
    QuoteData.gas = quote.gas
    QuoteData.guaranteedPrice = quote.guaranteedPrice
    QuoteData.quotes = quote

    const toprise = +quote.price
    const calculatedPrice = (toprise * value).toFixed(6)

    setValue('to.value', +calculatedPrice)
    setIsCalculating(false)
  }, 600)

  useEffect(() => {
    handleFromValueChangeReaction(fromValue)
  }, [fromValue, fromTicker, toTicker])

  return isCalculating ? (
    <Box style={{marginTop: "20px"}} {...props}>{t('TRADE_FORM_CALCULATE_SWAP_QUOTE_STATUS')}</Box>
  ) : (
    <Box />
  )
}
