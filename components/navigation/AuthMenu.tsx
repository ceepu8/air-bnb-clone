import Link from 'next/link';
import React from 'react';
import Dropdown from './Dropdown';

const LineBreak = () => {
  return <div className="w-full h-[1px] bg-grey-200 my-4"></div>;
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

const AuthMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Dropdown isOpen={isOpen} className="right-0 min-w-[250px] p-5">
      <NavLink path="/login" destination="Đăng nhập" />
      <NavLink path="/register" destination="Đăng ký" />
      <LineBreak />

      <NavLink path="/" destination="Cho thuê nhà" />
      <NavLink path="/" destination="Tổ chức trải nghiệm" />
      <NavLink path="/" destination="Hỗ trợ" />
    </Dropdown>
  );
};

export default AuthMenu;
