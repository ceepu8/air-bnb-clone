import React from 'react';
import { MdIron, MdOutlineLocalParking } from 'react-icons/md';
import { GiWashingMachine, GiKnifeFork } from 'react-icons/gi';
import { BiCameraMovie } from 'react-icons/bi';
import { BsWind } from 'react-icons/bs';
import { AiOutlineWifi } from 'react-icons/ai';
import { FaSwimmingPool } from 'react-icons/fa';
import { Room } from '@/interfaces';
import { IconType } from 'react-icons';

interface RoomServices {
  keyName: keyof Room;
  name: string;
  icon: IconType;
}
const roomServices: RoomServices[] = [
  {
    keyName: 'banLa',
    name: 'Bàn Là',
    icon: MdIron,
  },
  {
    keyName: 'banUi',
    name: 'Bàn Ủi',
    icon: MdIron,
  },
  {
    keyName: 'mayGiat',
    name: 'Máy giặt',
    icon: GiWashingMachine,
  },
  {
    keyName: 'bep',
    name: 'Bếp',
    icon: GiKnifeFork,
  },
  {
    keyName: 'tivi',
    name: 'TV',
    icon: BiCameraMovie,
  },
  {
    keyName: 'dieuHoa',
    name: 'Điều hoà',
    icon: BsWind,
  },
  {
    keyName: 'wifi',
    name: 'Wifi',
    icon: AiOutlineWifi,
  },
  {
    keyName: 'doXe',
    name: 'Bãi đỗ xe',
    icon: MdOutlineLocalParking,
  },
  {
    keyName: 'hoBoi',
    name: 'Hồ bơi',
    icon: FaSwimmingPool,
  },
];

const PEOPLE_SELECTION = [
  {
    id: 1,
    name: 'Người lớn',
    note: 'Từ 13 tuổi trở lên',
  },
  {
    id: 2,
    name: 'Trẻ em',
    note: 'Độ tuổi 2 - 12',
  },
  {
    id: 3,
    name: 'Em bé',
    note: 'Dưới 2 tuổi',
  },
  {
    id: 4,
    name: 'Thú cưng',
    note: 'Dưới 2 tuổi',
  },
];

export { roomServices, PEOPLE_SELECTION };
