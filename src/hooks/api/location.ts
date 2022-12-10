import { buildURL } from "@/utils"
import { useQuery } from "@tanstack/react-query"

import api from "@/configs/axios"
import { API, LOCATION_LIST_KEY } from "@/constants"

export const useGetLocationList = (defaultQuery: any = {}) => {
  const { page, pageSize = 15, ...rest } = defaultQuery || {}
  const URL = buildURL(API.LOCATION.LIST, {
    pageIndex: page || 1,
    pageSize,
    ...rest,
  })

  return useQuery(
    [LOCATION_LIST_KEY],
    async () => {
      const { data } = await api.get(URL)
      return data
    },
    {
      select: (data) => {
        return data?.content?.data || []
      },

      keepPreviousData: true,
      staleTime: Infinity,
    }
  )
}
