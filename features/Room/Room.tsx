import { Location, Room } from '@/interfaces';
import { useState } from 'react';
import { data, viTri } from 'data/room';
import RoomHeader from './RoomHeader';
import RoomImage from './RoomImage';
import RoomNumber from './RoomNumber';
import AirCover from './AirCover';
import RoomServices from './RoomServices';
import RoomCalendar from './RoomCalendar';
import SelectionForm from './SelectionForm/SelectionForm';

type Props = {};

const Room = (props: Props) => {
  const [room, setRoom] = useState<Room>(data);
  const [location, setLocation] = useState<Location>(viTri);
  return (
    <div className="max-w-[1120px] mx-auto mt-[80px]">
      <div className="mt-6">
        <RoomHeader room={room} location={location} />
      </div>
      <div className="mt-6">
        <RoomImage src={room.hinhAnh || ''} />
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <RoomNumber room={room} />
          <div className="w-full h-[1px] bg-grey-300"></div>
          <AirCover />
          <div className="w-full h-[1px] bg-grey-300"></div>
          <RoomServices room={room} />
          <div className="w-full h-[1px] bg-grey-300"></div>
          <RoomCalendar />
          <div className="w-full h-[1px] bg-grey-300"></div>
        </div>
        <div className="col-span-1">
          <div className="relative h-full">
            <SelectionForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
