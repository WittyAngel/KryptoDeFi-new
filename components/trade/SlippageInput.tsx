import { Stack, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { TradeFormValues } from 'types'

type SlippageInputProps = {
  expertMode: boolean
}

export function SlippageInput({ expertMode }: SlippageInputProps) {
  const {
    register,
    setValue,
    trigger,
    formState: { errors }
  } = useFormContext<TradeFormValues>()
  const { t } = useTranslation()

  setValue('slippage', 0.5)

  const handleAutoSlippageClick = async () => {
    // TODO: Place to make API call or something
    // like that in order to retrieve auto slippage
    // then set the form value
    setValue('slippage', 0.5)
    await trigger('slippage')
  }

  return (
    <FormControl position="relative" isRequired isInvalid={!!errors?.slippage}>
      <FormLabel textTransform="uppercase">{t('TRADE_FORM_SLIPPAGE_INPUT_LABEL')}</FormLabel>
      <Stack direction="row" spacing={4}>
        <InputGroup maxW="var(--input-width)">
          <Input
            min="0.5"
            size="sm"
            variant="trade"
            type="number"
            placeholder={t('TRADE_FORM_SLIPPAGE_INPUT_PLACEHOLDER')}
            {...register('slippage', {
              required: {
                value: true,
                message: t('TRADE_FORM_SLIPPAGE_INPUT_REQUIRED_MSG')
              },
              ...(!expertMode
                ? { max: { value: 49, message: t('TRADE_FORM_SLIPPAGE_INPUT_NO_EXPERT_MODE') } }
                : { max: { value: 99, message: t('TRADE_FORM_SLIPPAGE_INPUT_EXPERT_TOO_HIGH') } })
            })}
          />
          <InputRightElement>
            <Text mb={2} fontWeight="bold" color="primary" verticalAlign="middle">
              %
            </Text>
          </InputRightElement>
        </InputGroup>
        {/* <Button onClick={handleAutoSlippageClick}>auto</Button> */}
      </Stack>
      <FormErrorMessage color="negative" position="absolute" bottom="-24px">
        {errors?.slippage?.message}
      </FormErrorMessage>
    </FormControl>
  )
}
