// Source: https://usehooks.com/useLocalStorage
import { useState } from "react"

function useLocalStorage(key: string, initialValue?: undefined) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue
    }
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })
  const setValue = (value: (arg0: any) => any) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {}
  }
  return [storedValue, setValue]
}

export { useLocalStorage }
