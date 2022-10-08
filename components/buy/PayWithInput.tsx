import type { BuyCryptoValues } from 'types'
import { useFormContext } from 'react-hook-form'
import { Portal } from '@chakra-ui/portal'
import { Input } from '@chakra-ui/input'
import { Stack, Box } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton
} from '@chakra-ui/popover'
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control'
import { useTranslation } from 'react-i18next'

export function PayWithInput() {
  const {
    register,
    setValue,
    formState: { errors }
  } = useFormContext<BuyCryptoValues>()
  const { t } = useTranslation()

  const handleCurrencyChange = (currency: string) => {
    // TODO: Re calculate the currency on its change
    // e.g. if USD changes to PLN then display same value in PLN that was
    // previously provided using USD currency
    setValue('pay.value', Math.random())
  }

  return (
    <FormControl isRequired isInvalid={!!errors?.buy?.value}>
      <FormLabel>{t('BUY_PAGE_FORM_PAY_VALUE_INPUT_LABEL')}</FormLabel>
      <Stack direction="row" spacing={4}>
        <Input
          fontFamily="Lato"
          type="number"
          size="sm"
          step="0.01"
          placeholder={t('BUY_PAGE_FORM_PAY_VALUE_INPUT_PLACEHOLDER')}
          {...register('pay.value', {
            required: {
              value: true,
              message: t('BUY_PAGE_FORM_PAY_VALUE_INPUT_LABEL')
            }
          })}
        />
        <CurrencySelect onCurrencySelect={handleCurrencyChange} />
      </Stack>
      <FormErrorMessage>{errors?.buy?.value?.message}</FormErrorMessage>
    </FormControl>
  )
}

type CurrencySelectProps = {
  onCurrencySelect: (currency: string) => void
}

function CurrencySelect({ onCurrencySelect }: CurrencySelectProps) {
  const { watch, setValue } = useFormContext<BuyCryptoValues>()
  const currency = watch('pay.currency')

  // TODO: Get this from API (?)
  const currencies = ['USD', 'PLN', 'XYZ', 'TEST']

  const handleCurrencySelect = (currency: string) => {
    setValue('pay.currency', currency)
  }

  return (
    <Popover>
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <Button>{currency}</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              {currencies.map((currency) => (
                <Box
                  py={1}
                  px={2}
                  key={currency}
                  _hover={{ bg: 'primary', cursor: 'pointer' }}
                  onClick={() => {
                    handleCurrencySelect(currency)
                    onCurrencySelect(currency)
                    onClose()
                  }}
                >
                  {currency}
                </Box>
              ))}
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  )
}
