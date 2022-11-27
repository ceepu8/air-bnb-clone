import { Accommodation, Destination } from '@/components/combination';
import Header from '@/components/combination/Header';
import Room from '@/features/Room/Room';
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
