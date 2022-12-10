import { isServer } from "@/utils"
import { useQuery } from "@tanstack/react-query"

import api from "@/configs/axios"
import { API, ROOM_DETAIL_KEY, ROOM_LIST_KEY } from "@/constants"

import { useInfinite } from "./base"

export const useGetRoomList = (variables = {}) => {
  return useInfinite([ROOM_LIST_KEY, variables], {
    queryURL: API.ROOM.LIST,
    variables,
    options: {
      staleTime: Infinity,
      refetchOnMount: "always",
      enabled: !isServer,
      iteratee: "date",
    },
  })
}

export const useGetRoomDetail = () => {
  return useQuery(
    [ROOM_DETAIL_KEY],
    async (id: any) => {
      const { data } = await api.get(API.ROOM.DETAIL.replace(":id", id))
      return data
    },
    {
      keepPreviousData: true,
      staleTime: Infinity,
    }
  )
}
