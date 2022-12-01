import React from 'react';

type Props = {};

const HeaderNav = (props: Props) => {
  return (
    <nav>
      <ul className="flex items-center justify-center">
        <li className="m-2">
          <button className="relative text-lg pb-2">Chỗ ở</button>
        </li>
        <li className="m-2">
          <button className="relative text-lg pb-2">Trải nghiệm</button>
        </li>
        <li className="m-2">
          <button className="relative text-lg pb-2">Trải nghiệm trực tuyến</button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
