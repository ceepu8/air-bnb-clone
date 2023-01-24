import numeral from "numeral"

export const costing = (cost: number) => {
  return numeral(cost).format("0,0")
}

export const checkValidImage = (imgSrc: string) => {
  const randomNumber = Math.floor(Math.random() * 10 + 2)
  const ROOM_DEFAULT_IMG = `https://airbnbnew.cybersoft.edu.vn/images/phong${randomNumber}.png`

  if (imgSrc.includes("data:image") || imgSrc.includes("https://")) {
    return imgSrc
  }
  return ROOM_DEFAULT_IMG
}

export const range = (start: number, end: number) => {
  let length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}
