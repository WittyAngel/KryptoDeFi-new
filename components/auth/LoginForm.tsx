import { Stack, Box } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control'
import { useForm } from 'react-hook-form'
import { useMoralis } from 'react-moralis'

import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthenticated } from 'redux/actions'

type LoginFormValues = {
  username: string
  password: string
}

export type LoginFormProps = {
  onSuccess?: () => void
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormValues>()

  const { authenticated } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const { login } = useMoralis()
  const { t } = useTranslation()

  const onSubmit = async (values: LoginFormValues) => {
    let loginFailed = false
    const { username, password } = values

    await login(username, password, {
      usePost: true,
      onError: (error: any) => {
        if (error.code === 101) {
          setError('username', {
            type: 'value',
            message: 'Username or password is invalid.'
          })
          setError('password', {
            type: 'value',
            message: 'Username or password is invalid.'
          })

          loginFailed = true
        }
      }
    })

    if (loginFailed) {
      return
    }

    dispatch(setAuthenticated(true))

    if (onSuccess && authenticated) {
      onSuccess()
    }
  }

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <FormControl isRequired isInvalid={!!errors?.username}>
          <FormLabel>{t('AUTH_FORMS_USERNAME')}</FormLabel>
          <Input
            placeholder={t('AUTH_FORMS_USERNAME')}
            {...register('username', {
              required: {
                value: true,
                message: t('AUTH_FORMS_MISSING_USERNAME')
              }
            })}
          />
          <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors?.password}>
          <FormLabel>{t('AUTH_FORMS_PASSWORD')}</FormLabel>
          <Input
            placeholder={t('AUTH_FORMS_PASSWORD')}
            type="password"
            {...register('password', {
              required: {
                value: true,
                message: t('AUTH_FORMS_MISSING_PASSWORD')
              }
            })}
          />
          <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
        </FormControl>
      </Stack>
      <Button mt={4} w="100%" variant="regular-cta" type="submit" isLoading={isSubmitting}>
        {t('AUTH_FORMS_LOGIN')}
      </Button>
    </Box>
  )
}
