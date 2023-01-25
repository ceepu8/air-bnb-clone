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

export const useGetStartEnd = (length: number) => {
  const start = () => {
    let index = 0
    for (var i = 1; i < length; i++) {
      index += 2
    }
    return index
  }

  const end = () => {
    let index = 1
    for (var i = 1; i < length; i++) {
      index += 2
    }
    return index + 1
  }

  return {
    start: start(),
    end: end(),
  }
}
