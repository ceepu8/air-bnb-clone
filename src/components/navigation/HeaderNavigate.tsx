import { NavLink } from "../base"

const HeaderNav = () => {
  return (
    <nav>
      <ul className="mb-0 flex items-center justify-center pt-4">
        <li className="m-2">
          <NavLink disabled href="/">
            <p className="text-md relative pb-2 font-light">Chỗ ở</p>
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink disabled href="/">
            <p className="text-md relative pb-2 font-light">Trải nghiệm</p>
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink disabled href="/">
            <p className="text-md relative pb-2 font-light">Trải nghiệm trực tuyến</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav
