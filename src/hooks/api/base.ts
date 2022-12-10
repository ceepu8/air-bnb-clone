import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query"
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
    hasNextPage,
    fetchNextPage,
    ...query
  } = useInfiniteQuery(
    key,
    async ({ pageParam = 0 }) => {
      return fetcher({
        url: queryURL,
        query: { page: pageParam, pageSize: variables.pageSize || DEFAULT_PAGE_SIZE, ...variables },
      })
    },
    {
      select: (prev) => {
        const { pages = [] } = prev || {}

        const page = pages.map((item) => item.content || item?.charges?.data || []).flat()
        return {
          ...prev,
          total: pages[pages.length - 1].total || 0,
          pages: uniqBy([].concat(...page), "id"),
        }
      },
      getNextPageParam: (nextPage) => {
        const { currentPage: page, totalPages, results = [], total: recordTotal } = nextPage || {}
        return page < totalPages && results.length < recordTotal ? page + 1 : undefined
      },
      // enabled: !isServer,
      ...options,
    }
  )

  const { pages: data = [], total = 0 }: Props = dataInfinite || {}

  const fetchMore = () => {
    if (hasNextPage && data?.length < total) fetchNextPage()
  }

  return {
    fetchNextPage,
    data,
    fetchMore,
    hasNextPage: hasNextPage && data?.length < total,
    total,
    ...query,
  }
}
