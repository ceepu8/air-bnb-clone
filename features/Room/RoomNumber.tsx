import { Room } from '@/interfaces';

const RoomNumber = ({ room }: { room: Room }) => {
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

export default RoomNumber;
