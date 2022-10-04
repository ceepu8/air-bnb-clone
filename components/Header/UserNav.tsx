import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";

import classnames from "classnames";

import styles from "./header.module.css";

const UserNav = () => {
  return (
    <div
      className="flex items-center justify-around"
      style={{ padding: "18px 0" }}
    >
      <button>Trở thành chủ nhà</button>
      <div>
        <BsGlobe />
      </div>
      <button
        className={classnames(
          "flex items-center justify-around px-3 py-2",
          styles.roundBorder
        )}
      >
        <AiOutlineMenu />
        <AiOutlineUser />
      </button>
    </div>
  );
};
export default UserNav;
