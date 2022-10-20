import Link from 'next/link';
import React from 'react';
import styles from './menu.module.css';

type Props = {
  isDropdown: Boolean;
};

const LineBreak = () => {
  return <div className="w-full h-[1px] bg-lightGrey my-4"></div>;
};

type NavProps = {
  path: string;
  destination: string;
};

const NavLink = ({ path, destination }: NavProps) => {
  return (
    <Link href={path}>
      <a className="font-bold block py-3 px-4">{destination}</a>
    </Link>
  );
};

const Menu = (props: Props) => {
  if (!props.isDropdown) return null;
  return (
    <div className={styles.menuDropdown}>
      <NavLink path="/login" destination="Đăng nhập" />
      <NavLink path="/register" destination="Đăng ký" />
      <LineBreak />

      <NavLink path="/" destination="Cho thuê nhà" />
      <NavLink path="/" destination="Tổ chức trải nghiệm" />
      <NavLink path="/" destination="Hỗ trợ" />
    </div>
  );
};

export default Menu;
