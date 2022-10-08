import type { BuyCryptoValues } from 'types'
import { useForm, FormProvider } from 'react-hook-form'
import { Stack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { useTranslation } from 'react-i18next'

import { BuyCryptoInput, PayWithInput } from 'components/buy'

export function BuyCryptoForm() {
  const formProps = useForm<BuyCryptoValues>({
    defaultValues: {
      buy: {
        ticker: 'BTC'
      },
      pay: {
        currency: 'USD'
      }
    }
  })

  const { t } = useTranslation()

  const { handleSubmit } = formProps
  const onSubmit = (values: BuyCryptoValues) => {}

  return (
    <FormProvider {...formProps}>
      <Stack as="form" direction="column" spacing={4} onSubmit={handleSubmit(onSubmit)}>
        <BuyCryptoInput />
        <PayWithInput />
        <Button variant="regular-cta">{t('BUY_PAGE_FORM_SUBMIT_BUTTON')}</Button>
      </Stack>
    </FormProvider>
  )
}
