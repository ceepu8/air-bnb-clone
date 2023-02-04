import { useState } from "react"
import { useDispatch } from "react-redux"

import { setDefaultHeaders } from "@/configs"
import { API, MESSAGE, ME_KEY } from "@/constants"
import { LOGIN_SUCCEED, LOGOUT } from "@/store/actions"

import { fetch } from "@/utils"
import { useLocalStorage } from "../shared"
import { useAlert } from "@/components/base/Alert"

export function useLogout() {
  const dispatch = useDispatch()

  const doLogout = () => {
    dispatch(LOGOUT.REQUEST())

    window.localStorage.clear()
    window.location.replace("/")

    setDefaultHeaders({ Authorization: `` })
  }

  return [doLogout]
}

export const useLogin = () => {
  const dispatch = useDispatch()

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [_, setAuth] = useLocalStorage(ME_KEY)

  const doLogin = async (params: any) => {
    setLoading(true)
    const response = await fetch({ method: "post", url: API.AUTH.LOGIN, params })

    if (response?.statusCode === 200) {
      dispatch(LOGIN_SUCCEED(response?.content))
      setAuth(response?.content)
      setSuccess(true)
      setError(null)
    } else {
      setError(response?.content)
      setSuccess(false)
    }
    setLoading(false)
  }

  return { doLogin, loading, error, success, setError }
}

export const useRegister = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const alert = useAlert()

  const [_, setAuth] = useLocalStorage(ME_KEY)

  const doRegister = async (params: any) => {
    setLoading(true)
    const response = await fetch({ method: "post", url: API.AUTH.REGISTER, params })

    if (response?.statusCode === 200) {
      setAuth(response)
      setError(null)
      setIsSuccess(true)
      alert.success(MESSAGE.REGISTER.SUCCESS)
    } else {
      setError(response?.content)
      setIsSuccess(false)
      alert.error(MESSAGE.REGISTER.FAILED)
    }
    setLoading(false)
  }

  return { doRegister, loading, error, isSuccess }
}
