export interface LoginValues {
  email: String
  password: String
}

export interface ApiResponse<T> {
  statusCode: number
  message: string
  data: T
}
