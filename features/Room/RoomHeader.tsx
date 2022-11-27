import { Location, Room } from '@/interfaces';

const RoomHeader = ({ room, location }: { room: Room; location: Location }) => {
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

export default RoomHeader;
