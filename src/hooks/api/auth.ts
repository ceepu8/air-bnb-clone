import { useState } from "react"
import { useDispatch } from "react-redux"

import api from "@/configs/axios"

import { setDefaultHeaders } from "@/configs"
import { API, ME_KEY } from "@/constants"
import { LOGIN_SUCCEED, LOGOUT } from "@/store/actions"

import { useLocalStorage } from "../shared"
import { fetch } from "@/utils"

export function useLogout() {
  const dispatch = useDispatch()

  const doLogout = () => {
    dispatch(LOGOUT.REQUEST())

    window.localStorage.clear()
    window.location.replace("/login")

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

  const [_, setAuth] = useLocalStorage(ME_KEY)

  const doLogin = async (params: any) => {
    setLoading(true)
    const { data } = await api.post(API.AUTH.REGISTER, params)
    if (data?.success) {
      setAuth(data)
      setIsSuccess(true)
    } else {
      setError(data?.message)
    }
    setLoading(false)
  }

  return { doLogin, loading, error, isSuccess }
}
