import { costing } from "@/utils"
import React from "react"
import { LineBreak } from "../LineBreak"

type BillType = {
  numberNights: number | undefined | string | string[]
  price: number | undefined
  isCharged?: boolean
}

export const Bill = (props: BillType) => {
  const { numberNights = 0, price = 0, isCharged = true } = props || {}
  const total = Number(price) * Number(numberNights)

  return (
    <div>
      {isCharged && <p className="mt-4 text-center text-xs">You won't be charged yet</p>}

      <div className="mt-4">
        <div className="flex justify-between">
          {!!price && !!numberNights && (
            <p className="text-sm underline">
              {costing(price)}$ x {numberNights} nights
            </p>
          )}
          {!!total && <p className="text-sm">{costing(total)}$</p>}
        </div>

        <div className="my-4">
          <LineBreak />
        </div>

        <div className="flex justify-between font-semibold">
          <p>Total</p>
          {!!total && <p>{costing(total)}$</p>}
        </div>
      </div>
    </div>
  )
}
