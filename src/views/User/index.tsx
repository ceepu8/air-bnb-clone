import isEmpty from "lodash/isEmpty"
import { useRouter } from "next/router"
import { useEffect } from "react"

import { useLocalStorage } from "@/hooks"

import { UserInfor } from "./UserInfor"
import { UserPolicy } from "./UserPolicy"
import { ME_KEY } from "@/constants"

const UserView = () => {
  const [me] = useLocalStorage(ME_KEY)
  const router = useRouter()

  useEffect(() => {
    if (isEmpty(me)) {
      router.push("/")
    }
  }, [me])

  return (
    <section className="mx-auto mt-8 w-full max-w-[1080px] px-12">
      <h1 className="text-3xl font-semibold text-very-dark-gray">Thông tin cá nhân</h1>
      <div className="mt-12 grid grid-cols-3">
        <div className="col-span-2 mr-20">
          <UserInfor />
        </div>
        <div className="col-span-1">
          <UserPolicy />
        </div>
      </div>
    </section>
  )
}

export default UserView
