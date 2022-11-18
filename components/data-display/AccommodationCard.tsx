import { Accommodation } from '@/interfaces/index';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import NavLink from '../navigation/Link';

type Props = {
  room: Accommodation;
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
  const { id, hinhAnh, tenPhong, phongNgu, phongTam, giaTien, khach } = props.room || {};
  return (
    <NavLink disabled href={`acommodation/${id}`}>
      <div className="col-span-1">
        <div className="flex flex-col relative">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={hinhAnh}
              alt="accommodation"
              className="!max-w-[200%] !min-w-[200%] !min-h-[300px] object-cover rounded mr-2"
              width={300}
              height={300}
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
                4.5
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
