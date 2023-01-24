import { usePagination } from "@/hooks/shared/usePagination"
import classNames from "classnames"
import { useRouter } from "next/router"
import React from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import Button from "../Button"

type PaginationType = {
  totalCount?: number
  pageSize?: number
  siblingCount?: number
  currentPage?: number
  defaultCurrentPage?: number
  disabled?: boolean
}

export const Pagination = ({
  totalCount = 0,
  siblingCount = 1,
  currentPage = 1,
  pageSize = 0,
}: PaginationType) => {
  const router = useRouter()

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    router.replace({ query: { pageSize: currentPage + 1 } }, undefined, { scroll: false })
  }

  const onPrevious = () => {
    router.replace({ query: { pageSize: currentPage - 1 } }, undefined, { scroll: false })
  }

  return (
    <div>
      <div className="mt-12 flex items-center justify-center gap-x-4 text-center">
        <Button isJustIcon variant="outline" onClick={onPrevious} disabled={currentPage === 1}>
          <AiOutlineArrowLeft />
        </Button>

        {paginationRange.map((pageNumber) => {
          if (pageNumber === "dots") {
            return <li className="pagination-item dots">&#8230;</li>
          }
          return (
            <Button
              variant="outline"
              fullWidth={false}
              size="small"
              className={classNames({
                "bg-black-gray text-white hover:bg-light-gray hover:text-black":
                  currentPage === pageNumber,
              })}
              onClick={() => {
                router.replace({ query: { pageSize: pageNumber } }, undefined, { scroll: false })
              }}
            >
              {pageNumber}
            </Button>
          )
        })}

        <Button
          isJustIcon
          variant="outline"
          onClick={onNext}
          disabled={currentPage === Math.ceil(totalCount / pageSize)}
        >
          <AiOutlineArrowRight />
        </Button>
      </div>
    </div>
  )
}
