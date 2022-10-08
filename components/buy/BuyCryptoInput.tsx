import type { Control } from 'react-hook-form'
import type { BuyCryptoValues } from 'types'
import { useState, useEffect } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control'
import { useTranslation } from 'react-i18next'
import { Stack, Flex, Box, Text } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'

import { Image } from 'components/utility'
import { TokenInput } from 'components/trade'

export function BuyCryptoInput() {
  const {
    register,
    control,
    formState: { errors }
  } = useFormContext<BuyCryptoValues>()
  const { t } = useTranslation()

  return (
    <>
      <FormControl isRequired isInvalid={!!errors?.buy}>
        <Flex w="100%" justify="space-between">
          <FormLabel>{t('BUY_PAGE_FORM_BUY_VALUE_INPUT_LABEL')}</FormLabel>
          <TickerValueNote control={control} />
        </Flex>
        <Stack direction="row" spacing={4}>
          <Input
            fontFamily="Lato"
            size="sm"
            type="number"
            step="any"
            placeholder={t('BUY_PAGE_FORM_BUY_VALUE_INPUT_PLACEHOLDER')}
            {...register('buy.value', {
              required: {
                value: true,
                message: t('BUY_PAGE_FORM_BUY_VALUE_INPUT_REQUIRED_MSG')
              }
            })}
          />
          {/* TODO (Igor): Make token input generic and move it to separate component */}
          <TokenInput name={'buy.ticker' as any} />
        </Stack>
        <FormErrorMessage>{errors?.buy?.value?.message}</FormErrorMessage>
      </FormControl>
    </>
  )
}

type TickerValueNoteProps = { control: Control }

function TickerValueNote({ control }: TickerValueNoteProps) {
  const buyTicker = useWatch({ control, name: 'buy.ticker' })
  const [price, setPrice] = useState<number>()

  // NOTE: Maybe loader to prevent CLS?

  useEffect(() => {
    // TODO: Single ticker price. Get this from API
    setPrice(20000)
  }, [buyTicker])

  return (
    <Box>
      {/*<Image src={ GET FROM API } width={32} height={32}/>*/}
      <Text fontFamily="Lato" fontSize="xl">
        1 {buyTicker} = {price}
      </Text>
    </Box>
  )
}
