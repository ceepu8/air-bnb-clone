import Link from 'next/link';

type Props = {
  disabled: boolean;
  children: JSX.Element;
  href: string;
};

const NavLink = ({ disabled, children, href, ...rest }: Props) => {
  if (disabled) {
    return children;
  }
  return (
    <Link {...rest} href={href}>
      <a>{children}</a>
    </Link>
  );
};

export default NavLink;
