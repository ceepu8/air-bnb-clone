import NavLink from '@/components/navigation/Link';
import { Room } from '@/interfaces/index';
import { checkImgValid } from '@/utils/validation';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsFillSuitHeartFill } from 'react-icons/bs';

type Props = {
  room: Room;
};

const HeartIcon = () => {
  return (
    // TODO: handle click button
    <button>
      <BsFillSuitHeartFill
        stroke="white"
        strokeWidth={1}
        fill="rgba(0, 0, 0, 0.5)"
        className="block absolute top-[15px] right-[15px] text-2xl overflow-visible"
      />
    </button>
  );
};

export const AccommodationCard = (props: Props) => {
  const {
    id,
    hinhAnh,
    tenPhong,
    phongNgu,
    phongTam,
    giaTien,
    khach,
    rating = 4.5,
  } = props.room || {};

  return (
    <NavLink disabled={!id} href={`rooms/${id}`}>
      <div className="col-span-1">
        <div className="flex flex-col relative">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={checkImgValid(hinhAnh || '')}
              alt="accommodation"
              width={300}
              height={300}
              layout={'responsive'}
              className="!max-w-[200%] !w-[200%] !h-[300px] object-cover rounded mr-2"
            />
          </div>

          <HeartIcon />

          <div className="flex flex-col mt-4 text-black-200">
            <span className="text-lg font-extrabold">{tenPhong}</span>

            <div className="flex justify-between items-center">
              <span className="text-grey-500">
                Phòng ngủ: {phongNgu} - Phòng tắm: {phongTam}
              </span>
              <span className="flex items-center">
                <AiFillStar className="mr-1" />
                {rating}
              </span>
            </div>

            <span className="text-grey-500">Đón tối đa {khach} khách</span>

            <span className="font-semibold">${giaTien} đêm</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
