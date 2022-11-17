import { Accommodation } from '@/interfaces/index';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';
import { BsFillSuitHeartFill } from 'react-icons/bs';

type Props = {
  room: Accommodation;
};

const HeartIcon = () => {
  return (
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
  const { room } = props;
  return (
    <Link href={`acommodation/${room.id}`}>
      <a>
        <div className="col-span-1">
          <div className="flex flex-col relative">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={room.hinhAnh}
                alt="accommodation"
                className="max-w-[200%] min-h-[300px] object-cover rounded mr-2"
              />
            </div>

            <HeartIcon />

            <div className="flex flex-col mt-4 text-black-200">
              <span className="text-lg font-extrabold">{room.tenPhong}</span>

              <div className="flex justify-between items-center">
                <span className="text-grey-500">
                  Phòng ngủ: {room.phongNgu} - Phòng tắm: {room.phongTam}
                </span>
                <span className="flex items-center">
                  <AiFillStar className="mr-1" />
                  4.5
                </span>
              </div>

              <span className="text-grey-500">Đón tối đa {room.khach} khách</span>

              <span className="font-semibold">${room.giaTien} đêm</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
