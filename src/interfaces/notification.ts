interface NotiContent {
  type: string
  message: string
}

export interface NotificationInterface {
  id: number
  content: NotiContent
  type: string
}
