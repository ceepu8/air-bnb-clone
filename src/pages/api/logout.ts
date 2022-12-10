import { setDefaultHeaders } from "@/configs/axios"
import nookies from "nookies"

export default function logoutHandler(req: any, res: any) {
  if (req.method === "POST") {
    nookies.destroy({ res }, "token", { path: "/" })
    setDefaultHeaders({ Authorization: `` })
  }

  res.status(200).json({ success: true })
}
