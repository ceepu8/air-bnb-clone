import axios, { AxiosHeaders } from "axios"
import { API_ROOT, TIMEOUT } from "@/constants"

const instance = axios.create({
  baseURL: API_ROOT,
  timeout: TIMEOUT,
})

export function setDefaultHeaders(headers: {
  [x: string]: string | number | boolean | string[] | AxiosHeaders | null | undefined
}) {
  Object.keys(headers).forEach((key) => {
    instance.defaults.headers.common[key] = headers[key]
  })
}

export default instance
