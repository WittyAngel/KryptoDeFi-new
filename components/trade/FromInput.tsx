import type { TradeFormValues } from 'types'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Stack, Flex, Text } from '@chakra-ui/layout'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  TokenInput,
  PercentageSlider,
  TickerBalance,
  TokenInputDollarValue
} from 'components/trade'
import { appConfig } from 'components/appConfig'



export function FromInput() {
  
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

  // const [value, setValue] = React.useState("")
  const handleChange = (event: any) => console.log(event.target.value)

  return (
    <FormControl position="relative" isRequired isInvalid={!!errors?.from}>
      <Stack direction="row" spacing={4} justify="space-between">
        <Stack flexDir="column">
          <Flex maxW="var(--input-width)" flexDir="row" justify="space-between">
            <FormLabel textTransform="uppercase">{t('TRADE_FORM_FROM_INPUT_LABEL')}</FormLabel>
            <Stack direction="row">
            {addressDetails ? <Text>{t('TRADE_FORM_FROM_INPUT_LABEL_BALANCE')}</Text> : ""}
              <TickerBalance
                tickerField="from.ticker"
                tickerData="from.address"
                tickerDecimal="from.decimal"
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
              onChange={handleChange}
              size="sm"
              variant="trade"
              type="number"
              step="any"
              placeholder={t('TRADE_FORM_FROM_INPUT_PLACEHOLDER')}
              {...register('from.value', {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: t('TRADE_FORM_FROM_INPUT_REQUIRED_MSG')
                },
                max: {
                  value: balance,
                  message: t('TRADE_FORM_FROM_INPUT_INSUFFICIENT_MSG')
                }
              })}
            />
            <InputRightElement w="70px">
              <TokenInputDollarValue
                control={control}
                tokenField="from.ticker"
                addressField="from.address"
              />
            </InputRightElement>
          </InputGroup>
          <PercentageSlider name="from.value" balance={balance} />
        </Stack>
        <Stack direction="column">
          <DummyInputLabel>
            <FormLabel isRequired={false} color="transparent"></FormLabel>
          </DummyInputLabel>
          <TokenInput name="from.ticker" address="from.address" />
        </Stack>
      </Stack>
      <FormErrorMessage color="negative" position="absolute" bottom="-24px">
        {errors?.from?.value?.message}
      </FormErrorMessage>
    </FormControl>
  )
}

const DummyInputLabel = styled.div`
  span {
    color: transparent;
  }
`
