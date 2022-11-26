import React, { useState } from 'react';
import { data, viTri } from 'data/room';
import { Accommodation, Location } from '@/interfaces';
import Image from 'next/image';
import { roomServices } from '@/constants/room';
import classNames from 'classnames';
import AIR_COVER from '@/constants/aircover';
import NavLink from '../navigation/Link';

import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';

type Props = {};

const RoomHeader = ({ room, location }: { room: Accommodation; location: Location }) => {
  const { tenPhong } = room;
  const { quocGia, tenViTri, tinhThanh } = location;
  return (
    <>
      <h3 className="font-semibold">{tenPhong}</h3>
      <p className="text-grey-500 text-sm">
        {tenViTri}, {tinhThanh}, {quocGia}
      </p>
    </>
  );
};

const RoomImage = ({ src }: { src: string }) => {
  return <Image src={src} className="rounded-md" width={1120} height={400} />;
};

const Services = ({ room }: { room: Accommodation }) => {
  return (
    <div className="my-6">
      <p className="text-xl font-medium mb-4">Nơi này có những gì cho bạn</p>
      <div className="flex flex-wrap gap-y-2">
        {roomServices.map((service) => {
          const { keyName, icon: Icon } = service;
          return (
            <div className="flex items-center min-w-[50%] text-black-200">
              <Icon className="text-2xl mr-3" />
              <span
                className={classNames({
                  'line-through': !room[keyName],
                })}
              >
                {service.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const RoomNumber = ({ room }: { room: Accommodation }) => {
  const { khach, phongNgu, phongTam } = room;
  return (
    <div className="my-6">
      <span className="text-xl font-semibold block">Toàn bộ nhà - Số lượng phòng</span>
      <span className="text-sm">
        &#x2022; {khach} Khách &#x2022; {phongNgu} Phòng Ngủ &#x2022; {phongTam} Phòng Tắm
      </span>
    </div>
  );
};

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

const StayingNights = () => {
  const pastMonth = new Date(2020, 10, 15);
  const defaultSelected: DateRange = {
    from: pastMonth,
    to: addDays(pastMonth, 4),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }
  return (
    <div className="flex flex-col items-center my-6">
      <div className="w-full">
        <span className="">{footer}</span>
      </div>
      <DayPicker
        mode="range"
        defaultMonth={pastMonth}
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
      />
    </div>
  );
};

const SelectionModal = () => {
  return (
    <div className="pt-6 ml-6 sticky top-[85px]">
      <div className="max-w-full min-h-[200px] box-shadow rounded-md border-grey-300 border-[1px] p-4">
        <p>Add dates for prices</p>
        <button className="flex w-full">
          <div className="flex-1">
            <div className="text-[8px] font-semibold">CHECK-IN</div>
            <div className="text-[10px] text-grey-500">Add date</div>
          </div>
          <div className="flex-1">
            <div className="text-[8px] font-semibold">CHECK-IN</div>
            <div>Add date</div>
          </div>
        </button>
        <button></button>
      </div>
    </div>
  );
};

const Room = (props: Props) => {
  const [room, setRoom] = useState<Accommodation>(data);
  const [location, setLocation] = useState<Location>(viTri);
  return (
    <div className="max-w-[1120px] mx-auto mt-[80px]">
      <div className="mt-6">
        <RoomHeader room={room} location={location} />
      </div>
      <div className="mt-6">
        <RoomImage src={room.hinhAnh} />
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <RoomNumber room={room} />
          <div className="w-full h-[1px] bg-grey-300"></div>
          <AirCover />
          <div className="w-full h-[1px] bg-grey-300"></div>
          <Services room={room} />
          <div className="w-full h-[1px] bg-grey-300"></div>
          <StayingNights />
          <div className="w-full h-[1px] bg-grey-300"></div>
        </div>
        <div className="col-span-1">
          <div className="relative h-full">
            <SelectionModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
