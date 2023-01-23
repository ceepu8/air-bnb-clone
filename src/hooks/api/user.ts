import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import isEmpty from "lodash/isEmpty"
import isEqual from "lodash/isEqual"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useDebouncedCallback } from "use-debounce"

import api from "@/configs/axios"
import { API, ME_KEY } from "@/constants"
import { BOOK_SUCCESS, UPDATE_AUTH } from "@/store/actions"

import { useLocalStorage } from "../shared"
import { useLogout } from "./auth"
import { Booking } from "@/interfaces"

export const useQueryMe = (options: object) => {
  return useQuery(
    [ME_KEY],
    async () => {
      const { data } = await api.get(API.USER.ME)
      return data
    },
    {
      retry: false,
      ...options,
    }
  )
}

export function useGetMe() {
  const { token, user, isLogged } = useSelector((state: any) => state.auth)
  const [_userStorage, setUserStorage] = useLocalStorage(ME_KEY)
  const dispatch = useDispatch()

  const { refetch } = useQueryMe({
    onSuccess: (res: any) => {
      if (!isEmpty(res?.user) && !isEqual(user, res?.user)) {
        dispatch(UPDATE_AUTH(res))
      }
    },
  })

  useEffect(() => {
    setUserStorage({ token, user, isLogged })
  }, [user, token])

  return {
    me: user || {},
    refetch,
    isLogged,
  }
}

export const useUpdateMe = () => {
  const me = useSelector((state: any) => state.auth.user)

  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const {
    mutate: updateMe,
    isLoading,
    isSuccess,
  } = useMutation(
    async (params: any) => {
      const URL = API.USER.UPDATE.replace(":id", me.id)
      const response = await api.put(URL, params)
      return response.data
    },
    {
      onSuccess: (res) => {
        if (!isEmpty(res?.content) && !isEqual(me, res?.content)) {
          dispatch(UPDATE_AUTH(res))
        }
      },
      onSettled: () => queryClient.invalidateQueries([ME_KEY]),
    }
  )

  const doUpdateMe = useDebouncedCallback((req: any, options: any) => updateMe(req, options), 250)

  return { doUpdateMe, isLoading, isSuccess }
}

export const useUpdatePassword = () => {
  const me = useSelector((state: any) => state.auth.user)

  const dispatch = useDispatch()
  const queryClient = useQueryClient()

  const [doLogout] = useLogout()

  const {
    mutate: updatePassword,
    isLoading,
    isSuccess,
  } = useMutation(
    async (params) => {
      const { data } = await api.post(API.USER.CHANGE_PASSWORD, params)
      return data
    },
    {
      onSuccess: (res) => {
        if (!isEmpty(res?.user) && !isEqual(me, res?.user)) {
          dispatch(UPDATE_AUTH(res))
        }

        doLogout()
      },
      onSettled: () => queryClient.invalidateQueries([ME_KEY]),
    }
  )

  const doUpdatePassword = useDebouncedCallback(
    (req: any, options: any) => updatePassword(req, options),
    250
  )

  return [doUpdatePassword, isLoading, isSuccess]
}

export const useBookRoom = () => {
  const dispatch = useDispatch()
  const {
    mutate: bookRoom,
    isLoading,
    isSuccess,
  } = useMutation(
    async (params: Booking) => {
      const response = await api.post(API.USER.BOOK_ROOM, params)
      return response.data
    },
    {
      onSuccess: (res) => {
        if (!isEmpty(res?.content)) {
          dispatch(BOOK_SUCCESS(res?.content))
        }
      },
    }
  )

  const doBookRoom = useDebouncedCallback((req: any, options: any) => bookRoom(req, options), 250)

  return { doBookRoom, isLoading, isSuccess }
}
