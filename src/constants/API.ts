export const API_ROOT = process.env.NEXT_PUBLIC_HOST
export const ROOT_URL = process.env.NEXT_PUBLIC_WEB_URL
export const TIMEOUT = 10000

export const API = {
  AUTH: {
    LOGIN: "/auth/signin",
    REGISTER: "/auth/signup",
  },
  USER: {
    LIST: "/user",
    ME: "/me",
    UPDATE: "/me",
    CHANGE_PASSWORD: "/me/password",
  },
  ROOM: {
    LIST: "/phong-thue/phan-trang-tim-kiem",
    LOCATION: "/phong-thue/lay-phong-theo-vi-tri?maViTri=:id",
    DETAIL: "/phong-thue/:id",
  },
  LOCATION: {
    LIST: "/vi-tri/phan-trang-tim-kiem",
  },
}
