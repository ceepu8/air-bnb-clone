import { Accommodation } from '@/interfaces/index';
import { AiFillStar } from 'react-icons/ai';
import { BsFillSuitHeartFill } from 'react-icons/bs';

type Props = {
  room: Accommodation;
};

export const AccommodationCard = (props: Props) => {
  const { room } = props;
  return (
    <div className="flex flex-col col-span-1 flex-1 items-center">
      <div className="w-full p-4 m-lg:p-2">
        <div className="relative">
          <img src={room.hinhAnh} alt="location image" className="w-full rounded mr-2" />
          <div>
            <BsFillSuitHeartFill
              stroke="white"
              strokeWidth={1}
              fill="rgba(0, 0, 0, 0.5)"
              className="block absolute top-[15px] right-[15px] text-2xl overflow-visible"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <span className="text-lg font-extrabold">{room.tenPhong}</span>
            <span className="flex items-center">
              <AiFillStar fill="black" />
              4.5
            </span>
          </div>
          <span className="text-grey-500">
            {/* {room.locationId?.country} - {room.locationId?.province} */}
          </span>
          <span>
            {/* <span className="font-bold">${(room.price / 23000).toFixed(0)}</span> đêm */}
          </span>
        </div>
      </div>
    </div>
  );
};
