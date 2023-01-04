import { useCallback, useState } from "react"

const useFlag = (initial: boolean = false): [boolean, () => void, () => void, () => void] => {
  const [value, setValue] = useState<boolean>(initial)

  const setTrue = useCallback(() => {
    setValue(true)
  }, [])

  const setFalse = useCallback(() => {
    setValue(false)
  }, [])

  const setToggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  return [value, setTrue, setFalse, setToggle]
}

export { useFlag }
