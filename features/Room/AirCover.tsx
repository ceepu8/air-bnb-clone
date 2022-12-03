import NavLink from '@/components/navigation/Link';
import AIR_COVER from '@/constants/aircover';

const AirCover = () => {
  const { logoUrl, content } = AIR_COVER;
  return (
    <div className="my-6">
      <img className="mb-4" alt="aircover logo" src={logoUrl} width={123} height={26} />
      <p className="text-sm mb-4">{content}</p>
      <NavLink disabled href="#">
        <span className="font-semibold underline block">Tìm hiểu thêm</span>
      </NavLink>
    </div>
  );
};

export default AirCover;
