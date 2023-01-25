import { NavLink } from "../base"

const HeaderNav = () => {
  const navigations = [
    {
      label: "Chỗ ở",
      slug: "/",
    },
    {
      label: "Trải nghiệm",
      slug: "/",
    },
    {
      label: "Trải nghiệm trực tuyến",
      slug: "/",
    },
  ]

  return (
    <nav>
      <ul className="mb-0 flex items-center justify-center pt-4">
        {navigations.map((item) => (
          <li key={item.label} className="m-2">
            // TODO: disabled
            <NavLink href={item.slug} disabled={!!item.slug}>
              <span className="text-md relative pb-2 font-light">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderNav
