import { useEffect, useCallback, useState } from 'react'
import { useTranslations } from 'use-intl'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { Pressable } from '@react-aria/interactions'
import cn from 'classnames'

import { useVerifyResetToken, useShowAlertModal, useResendOtp } from '@/hooks'
import { STATUS, VERIFY_CODE_TYPE, TIME_OUT_RESEND_OTP } from '@/constants'
import Header from '@/layouts/Components/Header'
import { verifyCodeSchema, verifyInitialValues, FORM_VERIFY } from '@/validations/signupSchema'
import { Button } from '@/components/base'
import TextField from '@/components/form/TextInput'

const VerificationCode = () => {
  const [timer, setTimer] = useState(0)
  const router = useRouter()
  const t = useTranslations()
  const { showConfirm } = useShowAlertModal()
  const [data, doVerifyReset, status] = useVerifyResetToken()
  const [doResendOTP] = useResendOtp()

  const {
    control,
    handleSubmit,
    getValues,
    formState: { isDirty },
  } = useForm({
    resolver: yupResolver(verifyCodeSchema(t)),
    defaultValues: verifyInitialValues,
  })

  const onSubmit = ({ code }) => {
    doVerifyReset({ code, phone: router?.query?.phone })
  }

  useEffect(() => {
    if (data?.success) {
      router.push(
        `/forgot-password?code=${getValues(FORM_VERIFY.CODE)}&phone=${router?.query?.phone}`
      )
    }
  }, [data])

  useEffect(() => {
    if (status === STATUS.ERROR) {
      showConfirm({
        title: t('auth.verification_failed'),
        content: t('auth.verification_failed_code'),
        confirmText: t('common.okay'),
      })
    }
  }, [status])

  const resentOtp = () => {
    if (timer) return
    doResendOTP(
      { phone: router?.query?.phone, type: VERIFY_CODE_TYPE.FORGOT },
      {
        onSuccess: () => {
          setTimer(TIME_OUT_RESEND_OTP)
        },
      }
    )
  }

  const timeOutCallback = useCallback(() => setTimer((currTimer) => currTimer - 1), [])

  useEffect(() => {
    if (timer > 0) setTimeout(timeOutCallback, 1000)
  }, [timer, timeOutCallback])

  return (
    <div className="mx-auto w-full px-[16px]">
      <Header title={t('auth.reset_password')} onBack={() => router.back()} />
      <div className="mt-[30vh]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <TextField
              type="text"
              control={control}
              name={FORM_VERIFY.CODE}
              placeholder={t('auth.verification_placeholder')}
              description={t('auth.verification_description')}
              maxLength={6}
            />
            <div className="mt-[25px] w-full">
              <Button
                size="large"
                type="submit"
                disabled={!isDirty}
                loading={status === STATUS.LOADING}
                onPress={handleSubmit(onSubmit)}
              >
                {t('auth.authenticate')}
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="fixed bottom-0 left-0 w-full pb-12 text-center">
        <Pressable onPress={resentOtp}>
          <span className={cn('underline', { 'text-gray': timer > 0 })}>
            {t('auth.not_receive_code')}
            &nbsp;
            {timer > 0 ? `(${timer})` : ''}
          </span>
        </Pressable>
      </div>
    </div>
  )
}

export default VerificationCode
