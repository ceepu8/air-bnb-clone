import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';

import classnames from 'classnames';

import { useEffect, useRef } from 'react';
import styles from './header.module.css';

import useFlag from 'hooks/useFlag';
import Menu from './Menu';

const UserNav = () => {
  const { value: isDropdown, setClose, setToggle } = useFlag();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseleave', (e) => {
        if (e) {
          setClose();
        }
      });

      return () => {
        node.removeEventListener('mouseleave', () => {});
      };
    }
  }, [ref.current]);

  return (
    <div className="flex items-center justify-around py-3">
      <button>Trở thành chủ nhà</button>
      <div>
        <BsGlobe />
      </div>
      <div className="relative" ref={ref}>
        <button
          className={classnames(
            'flex items-center justify-around px-3 py-2 my-2',
            styles.roundBorder,
          )}
          onClick={() => setToggle()}
        >
          <AiOutlineMenu />
          <AiOutlineUser />
        </button>
        <Menu isDropdown={isDropdown} />
      </div>
    </div>
  );
};
export default UserNav;
