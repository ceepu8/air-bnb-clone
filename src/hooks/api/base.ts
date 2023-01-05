import { isServer, useInfiniteQuery, useQueryClient } from "@tanstack/react-query"
import uniqBy from "lodash/uniqBy"
import { useCallback } from "react"

import api from "@/configs/axios"
import { DEFAULT_PAGE_SIZE } from "@/constants"
import { buildURL } from "@/utils"

interface Props {
  pages?: object[]
  total?: number
}

export const fetcher = async ({
  url = "",
  query = { page: 0, pageSize: DEFAULT_PAGE_SIZE },
} = {}) => {
  const { page, pageSize, ...rest } = query || {}
  const URL = buildURL(url, {
    page: page || 0,
    pageSize,
    ...rest,
  })
  const response = await api.get(URL)
  return response.data
}

export const post = async ({ url = "", data = {} }) => {
  const response = await api.post(url, data)
  return response?.data
}

export const usePrefetchQuery = (queryKey: string, fn = () => {}) => {
  const client = useQueryClient()

  return useCallback(() => {
    client.prefetchQuery([queryKey], fn, { staleTime: 0 })
  }, [client, fn, queryKey])
}

export const useInfinite = (
  key: any,
  { queryURL = "", variables = {}, options = {} }: any = {}
) => {
  const {
    data: dataInfinite,
    fetchNextPage,
    ...query
  } = useInfiniteQuery(
    key,
    async ({ pageParam = 1 }) => {
      return fetcher({
        url: queryURL,
        query: {
          pageIndex: pageParam,
          pageSize: variables.pageSize || DEFAULT_PAGE_SIZE,
          ...variables,
        },
      })
    },
    {
      select: (prev) => {
        const { pages = [] } = prev || {}
        const { content = {} } = pages[pages.length - 1] || {}

        const page = pages.map((item) => item.content?.data || item.content || []).flat()

        return {
          ...prev,
          total: content?.totalRow || 0,
          pages: uniqBy([].concat(...page), options?.iteratee || "id"),
        }
      },
      getNextPageParam: (nextPage) => {
        const { pageIndex: page, pageSize, data = [], totalRow } = nextPage?.content || {}
        const totalPages = Math.floor(totalRow / pageSize)

        return page < totalPages && data.length < totalRow ? page + 1 : undefined
      },
      enabled: !isServer,
      ...options,
    }
  )

  const { pages: data = [], total = 0 }: Props = dataInfinite || {}
  const hasNextPage = data?.length < total

  const fetchMore = () => {
    if (hasNextPage) fetchNextPage()
  }

  return {
    ...query,
    fetchNextPage,
    data,
    fetchMore,
    hasNextPage,
    total,
  }
}
