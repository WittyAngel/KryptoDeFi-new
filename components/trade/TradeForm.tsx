import type { TradeFormValues, TradeSettings, TradeTickerProps } from 'types'
import { useEffect } from 'react'
import { Stack, Flex, Box } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { Button, IconButton } from '@chakra-ui/button'
import { Icon } from '@chakra-ui/icon'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import {
  SlippageInput,
  FinalizationDetails,
  CalculateSwapQuote,
  FromInput,
  ToInput,
  TransactionRouting
} from 'components/trade'
import { Crosshair } from 'components/icons/general'
import { Exchange } from 'components/icons/trade'

type TradeFormProps = {
  onSuccess: (values: TradeFormValues) => void
  onTickerChange: (values: TradeTickerProps) => void
  outsideFormToken: string
  tradeSettings: TradeSettings
}

export function TradeForm({
  onSuccess,
  onTickerChange,
  tradeSettings,
  outsideFormToken
}: TradeFormProps) {
  const formMethods = useForm<TradeFormValues>({
    defaultValues: {
      from: {
        ticker: 'BNB',
        address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        decimal: 18
      },
      to: {
        ticker: 'USDT',
        address: '0x55d398326f99059ff775485246999027b3197955',
        decimal: 18
      }
    }
  })

  const { handleSubmit, getValues, setValue, watch } = formMethods
  const { t } = useTranslation()

  useEffect(() => {
    setValue('to.ticker', outsideFormToken)
  }, [outsideFormToken])

  const onSubmit = (values: TradeFormValues) => {
    onSuccess(values)
  }

  const fromSymbolWatch = watch('from.ticker')
  const toSymbolWatch = watch('to.ticker')
  useEffect(() => {
    onTickerChange({
      from: fromSymbolWatch,
      to: toSymbolWatch
    })
  }, [fromSymbolWatch, toSymbolWatch])

  const handleTokenSwap = () => {
    const {
      value: previousFromValue,
      ticker: previousFromTicker,
      address: previousFromAddress
    } = getValues('from')
    const {
      value: previousToValue,
      ticker: previousToTicker,
      address: previousToAddress
    } = getValues('to')

    setValue('from.value', previousToValue)
    setValue('from.ticker', previousToTicker)
    setValue('from.address', previousToAddress)

    setValue('to.value', previousFromValue)
    setValue('to.ticker', previousFromTicker)
    setValue('to.address', previousFromAddress)
  }

  return (
    <FormProvider {...formMethods}>
      <Box sx={{ '--input-width': '200px' }} as="form" onSubmit={handleSubmit(onSubmit)}>
        {/* TODO: Implement rapid fire mode toggle */}
        {/* It probably should do something like skipping */}
        {/* exchange confirmation */}
        {/* <Flex w="100%" justify="flex-end">
          <Tooltip placement="top-end" label={t('TRADE_FORM_RAPID_FIRE_MODE')}>
            <IconButton
              aria-label="Rapid fire mode"
              variant="icon"
              icon={<Icon as={Crosshair} w={8} h={8} />}
            />
          </Tooltip>
        </Flex> */}
        <Stack direction="column" spacing={8}>
          <SlippageInput expertMode={tradeSettings.expertMode} />
          <FromInput />
        </Stack>
        <Flex w="100%" justify="space-between">
          <CalculateSwapQuote />
          <IconButton
            aria-label="Swap coins"
            variant="icon"
            onClick={handleTokenSwap}
            icon={<Icon as={Exchange} w={10} h={10} />}
            mr={8}
            mt={4}
          />
        </Flex>
        <Stack direction="column" spacing={8}>
          <ToInput />
          <Button type="submit" variant="regular-cta">
            {t('TRADE_FORM_TRADE_BUTTON')}
          </Button>
          <FinalizationDetails />
          <TransactionRouting />
        </Stack>
      </Box>
    </FormProvider>
  )
}
