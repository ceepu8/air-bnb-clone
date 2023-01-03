import React from "react"
import { LineBreak } from "../LineBreak"

type BillType = {
  numberNights: number | undefined | string | string[]
  price: number | undefined
  isCharged: boolean
}

export const Bill = (props: BillType) => {
  const { numberNights = 0, price, isCharged = true } = props || {}
  const total = Number(price) * Number(numberNights)
  return (
    <div>
      {isCharged && <p className="mt-4 text-center text-xs">You won't be charged yet</p>}

      <div className="mt-4">
        <div className="flex justify-between">
          <p className="text-sm underline">
            {price}$ x {numberNights} nights
          </p>
          <p className="text-sm">{total}$</p>
        </div>

        <div className="my-4 flex justify-between">
          <p className="text-sm underline">Service fee</p>
          <p className="text-sm">0$</p>
        </div>

        <LineBreak />

        <div className="my-4 flex justify-between font-semibold">
          <p>Total</p>
          <p>{total}$</p>
        </div>
      </div>
    </div>
  )
}
