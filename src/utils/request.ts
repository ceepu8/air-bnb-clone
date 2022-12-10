import { stringify } from "query-string"

export function buildURL(url: string, query: Record<string, any>) {
  let _url = url
  if (query) {
    _url += /\?/.test(url) ? "&" : "?"
    if (typeof query === "object") {
      _url += stringify(query)
    } else {
      _url += query
    }
  }
  return _url
}
