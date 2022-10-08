import type { TradeFormValues } from 'types'
import { useEffect, useState } from 'react'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Stack, Flex, Text } from '@chakra-ui/layout'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { TokenInput, TokenInputDollarValue, TickerBalance } from 'components/trade'
import { appConfig } from 'components/appConfig'

export function ToInput() {

  const [addressDetails, setAddressDetails] = useState<any>()

  useEffect(() => {
    setAddressDetails(appConfig.walletAddress)
  },[])

  const {
    register,
    control,
    formState: { errors }
  } = useFormContext<TradeFormValues>()

  const [balance, setBalance] = useState<number>()

  const handleBalanceChange = (newBalance: number) => {
    setBalance(newBalance)
  }

  const { t } = useTranslation()
  
  return (
    <FormControl position="relative" isRequired isInvalid={!!errors?.to}>
      <Stack direction="row" align="flex-end" justify="space-between" spacing={4}>
        <Flex flexDir="column">
          <Flex maxW="var(--input-width)" flexDir="row" justify="space-between">
            <FormLabel textTransform="uppercase">{t('TRADE_FORM_TO_INPUT_LABEL')}</FormLabel>
            <Stack direction="row">
              {addressDetails ? <Text>{t('TRADE_FORM_TO_INPUT_LABEL_BALANCE')}</Text> : ""}
              <TickerBalance
                tickerField="to.ticker"
                tickerData="to.address"
                tickerDecimal="to.decimal"
                onBalanceChange={handleBalanceChange}
                control={control}
                alignItems="center"
                fontFamily="Lato"
                fontSize="sm"
              />
            </Stack>
          </Flex>
          <InputGroup maxW="var(--input-width)">
            <Input
              min="0"
              size="sm"
              variant="trade"
              type="number"
              step="any"
              placeholder={t('TRADE_FORM_TO_INPUT_PLACEHOLDER')}
              {...register('to.value', {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: t('TRADE_FORM_TO_INPUT_REQUIRED_MSG')
                }
              })}
            />

            <InputRightElement w="70px">
              <TokenInputDollarValue
                control={control}
                tokenField="to.ticker"
                addressField="to.address"
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <TokenInput name="to.ticker" address="to.address" />
      </Stack>
      <FormErrorMessage color="negative" position="absolute" bottom="-24px">
        {errors?.to?.value?.message}
      </FormErrorMessage>
    </FormControl>
  )
}
