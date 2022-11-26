import { Accommodation, Destination } from '@/components/combination';
import Header from '@/components/combination/Header';
import Room from '@/components/combination/Room';
import { NextPageWithLayout } from '@/interfaces';
import RoomLayout from '@/layouts/room';

const RoomDetail: NextPageWithLayout = () => {
  return (
    <>
      <Room />
    </>
  );
};

RoomDetail.Layout = RoomLayout;

export default RoomDetail;
