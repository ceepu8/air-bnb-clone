import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai';
import AuthMenu from './AuthMenu';
import useMouseLeave from 'hooks/useMouseLeave';

const UserNav = () => {
  const { ref, value: isMouseIn } = useMouseLeave<HTMLDivElement>();

  return (
    <div className="relative py-2.5" ref={ref}>
      <button className="flex items-center justify-around px-3 py-2 my-2 border-grey-100 border-solid border rounded-full">
        <AiOutlineMenu />
        <AiOutlineUser />
      </button>
      <AuthMenu isOpen={isMouseIn} />
    </div>
  );
};
export default UserNav;
