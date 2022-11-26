import React from 'react';
import { MdIron, MdOutlineLocalParking } from 'react-icons/md';
import { GiWashingMachine, GiKnifeFork } from 'react-icons/gi';
import { BiCameraMovie } from 'react-icons/bi';
import { BsWind } from 'react-icons/bs';
import { AiOutlineWifi } from 'react-icons/ai';
import { FaSwimmingPool } from 'react-icons/fa';

const roomServices = [
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

export { roomServices };
