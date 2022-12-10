import { propsInterface } from "@/interfaces"
import dynamic from "next/dynamic"

const NonSSRWrapper = ({ children }: propsInterface) => <>{children}</>
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
})
