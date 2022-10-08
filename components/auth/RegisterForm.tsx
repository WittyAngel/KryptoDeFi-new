import type { Except } from 'type-fest'
import { Stack, Box } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control'
import { useForm } from 'react-hook-form'
import { useMoralis } from 'react-moralis'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthenticated } from 'redux/actions'
import { useGenerateReferralCode } from 'hooks/redux/referral'

type RegisterFormValues = {
  username: string
  email: string
  password: string
  passwordConfirm: string
  ref?: string
}

export type RegisterFormProps = {
  onSuccess?: () => void
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormValues>()

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { authenticated } = useSelector((state: RootState) => state.auth)
  const { signup } = useMoralis()

  const generateReferralCode = useGenerateReferralCode()

  const onSubmit = async (values: RegisterFormValues) => {
    if (values.password !== values.passwordConfirm) {
      setError('passwordConfirm', {
        type: 'value',
        message: t('REGISTER_FORM_RPASSWORD_NO_MATCH')
      })
      return
    }

    delete values.passwordConfirm
    const payload = values as Except<RegisterFormValues, 'passwordConfirm'>

    let registerFailed = false
    const { username, email, password, ref } = payload

    await signup(username, password, email, { name: 'name' }, {
      onError: (error: any) => {
        if (error.code === 202) {
          setError('username', {
            type: 'value',
            message: t('REGISTER_FORM_USER_EXISTS')
          })
          registerFailed = true
        }
      },
      onSuccess: async (user) => {
        if (user.id) {
          try {
            const result: any = await generateReferralCode({
              user_id: user.id,
              referral_code: ref
            })
            if (result?.data?.referral_code) {
              user.set({
                referralCode: result.data.referral_code
              })
              await user.save()
            }
          } catch (err) {
            console.log(err)
          }
        }
      }
    })

    if (registerFailed) {
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
        <FormControl isRequired isInvalid={!!errors?.email}>
          <FormLabel>{t('REGISTER_FORM_EMAIL')}</FormLabel>
          <Input
            placeholder={t('REGISTER_FORM_EMAIL')}
            type="email"
            {...register('email', {
              required: {
                value: true,
                message: t('REGISTER_FORM_MISSING_EMAIL')
              }
            })}
          />
          <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        </FormControl>
        <Stack direction="row">
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
          <FormControl isRequired isInvalid={!!errors?.passwordConfirm}>
            <FormLabel>{t('REGISTER_FORM_RPASSWORD')}</FormLabel>
            <Input
              placeholder={t('REGISTER_FORM_RPASSWORD')}
              type="password"
              {...register('passwordConfirm', {
                required: {
                  value: true,
                  message: t('REGISTER_FORM_MISSING_RPASSWORD')
                }
              })}
            />
            <FormErrorMessage>{errors?.passwordConfirm?.message}</FormErrorMessage>
          </FormControl>
        </Stack>
      </Stack>
      <Button mt={4} variant="regular-cta" w="100%" type="submit" isLoading={isSubmitting}>
        {t('AUTH_FORMS_REGISTER')}
      </Button>
    </Box>
  )
}
