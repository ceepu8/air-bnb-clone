import { NavLink } from "@/components"
import { AirbnbLogo } from "@/components/icons"
import { UserNavigate } from "@/components/navigation"
import { LoginViewModal } from "@/views/Auth/Login"
import { RegisterViewModal } from "@/views/Auth/Register"
import { BsGlobe } from "react-icons/bs"
import { useSelector } from "react-redux"
import PlaceSearchBar from "./components/PlaceSearchBar"

const Logo = () => {
  return (
    <NavLink href="/">
      <div style={{ padding: "18px 0" }}>
        <AirbnbLogo />
      </div>
    </NavLink>
  )
}

const Header = () => {
  const { isExtended } = useSelector((state: any) => state.searchbar)

  return (
    <header
      className={`${
        isExtended ? "h-[150px]" : "h-[70px]"
      } border-bottom fixed top-0 right-0 z-50 mx-auto w-full border border-solid border-gray bg-white transition-all`}
    >
      <div></div>
      <div className="mx-auto grid max-w-[1315px] grid-cols-3">
        <div className="col-span-1">
          <Logo />
        </div>
        <div className="relative col-span-1">
          <PlaceSearchBar />
        </div>
        <div className="col-span-1">
          <div className="flex items-center justify-end">
            <div className="rounded-full px-3 py-2 text-sm transition-colors duration-150 hover:bg-gray">
              Trở thành chủ nhà
            </div>
            <div className="mr-2 rounded-full p-3 transition-colors duration-150 hover:bg-gray">
              <BsGlobe />
            </div>
            <UserNavigate />
          </div>
        </div>
      </div>
      <LoginViewModal />
      <RegisterViewModal />
    </header>
  )
}
export default Header
