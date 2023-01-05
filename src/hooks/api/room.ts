import { isServer } from "@/utils"
import { useQuery } from "@tanstack/react-query"

import api from "@/configs/axios"
import { API, ROOM_DETAIL_KEY, ROOM_LIST_KEY, ROOM_LOCATION_KEY } from "@/constants"

import { useInfinite } from "./base"

export const useGetRoomList = (variables: { locationId: string | string[] | undefined }) => {
  console.log(variables)

  const { locationId } = variables
  const URL = locationId ? API.ROOM.LOCATION.replace(":id", locationId.toString()) : API.ROOM.LIST
  return useInfinite([ROOM_LIST_KEY, variables], {
    queryURL: URL,
    options: {
      staleTime: Infinity,
      refetchOnMount: "always",
      enabled: !isServer,
      // iteratee: "date",
    },
  })
}

export const useGetRoomByLocation = (id: string | string[] | undefined = "") => {
  return useQuery(
    [ROOM_LOCATION_KEY, id],
    async () => {
      const { data } = await api.get(API.ROOM.LOCATION.replace(":id", id.toString()))
      return data.content
    },
    {
      keepPreviousData: true,
      staleTime: Infinity,
      enabled: !!id,
    }
  )
}

export const useGetRoomDetail = (id: string | string[] | undefined = "") => {
  return useQuery(
    [ROOM_DETAIL_KEY, id],
    async () => {
      const { data } = await api.get(API.ROOM.DETAIL.replace(":id", id.toString()))
      return data.content
    },
    {
      keepPreviousData: true,
      staleTime: Infinity,
      enabled: !!id,
    }
  )
}
