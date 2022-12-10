import { useEffect } from 'react'
import { useTranslations } from 'use-intl'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'

import { STATUS, VERIFY_CODE_TYPE } from '@/constants'
import { useForgotPassword, useResetPassword } from '@/hooks'
import Header from '@/layouts/Components/Header'
import {
  forgotInitialValues,
  FORGOT_PASSWORD,
  forgotFormSchema,
  resetFormSchema,
} from '@/validations/loginSchema'
import { Button } from '@/components/base'
import TextField from '@/components/form/TextInput'

const ForgotPassword = () => {
  const router = useRouter()
  const { query: { code, phone: phoneNumber } = {} } = router
  const t = useTranslations()
  const [forgotData, doForgot, status] = useForgotPassword()
  const [resetData, doReset, resetStatus] = useResetPassword()

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    resolver: yupResolver(code ? resetFormSchema(t) : forgotFormSchema(t)),
    defaultValues: forgotInitialValues,
  })

  const onSubmit = ({ phone, password }) => {
    if (code) {
      doReset({ password, phone: phoneNumber, code })
      return
    }
    doForgot({ phone })
  }

  useEffect(() => {
    if (forgotData?.success)
      router.push(
        `/verify-code-forgot-password?type=${VERIFY_CODE_TYPE.FORGOT}&phone=${forgotData?.phone}`
      )
  }, [forgotData])

  useEffect(() => {
    if (resetData?.success) router.push('/login')
  }, [resetData])

  return (
    <div className="mx-auto w-full px-[16px]">
      <Header title={t('auth.reset_password')} onBack={() => router.replace('/login')} />
      <div className="mt-[30vh]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            {!code && (
              <TextField
                type="text"
                control={control}
                name={FORGOT_PASSWORD.PHONE}
                placeholder={t('auth.phone_placeholder')}
                description={t('auth.phone_description')}
              />
            )}
            {code && (
              <>
                <TextField
                  type="password"
                  control={control}
                  name={FORGOT_PASSWORD.PASSWORD}
                  placeholder={t('auth.password_signup_placeholder')}
                />
                <TextField
                  type="password"
                  control={control}
                  name={FORGOT_PASSWORD.CONFIRM_PASSWORD}
                  placeholder={t('auth.confirm_password_placeholder')}
                />
              </>
            )}
            <div className="mt-[25px] w-full">
              <Button
                size="large"
                type="submit"
                disabled={!isDirty}
                loading={status === STATUS.LOADING || resetStatus === STATUS.LOADING}
                onPress={handleSubmit(onSubmit)}
              >
                {code ? t('auth.reset') : t('auth.take_authorization_code')}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
