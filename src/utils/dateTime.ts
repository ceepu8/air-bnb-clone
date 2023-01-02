import dayjs from "dayjs"

export const getNumberNights = (from: Date | undefined, to: Date | undefined) => {
  return from && to && dayjs(to).diff(dayjs(from), "day")
}
