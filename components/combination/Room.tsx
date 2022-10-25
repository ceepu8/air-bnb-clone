import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Room from '../../interfaces/room';

interface RoomItemProps {
  room: Room;
}

const RoomItem = (props: RoomItemProps) => {
  const { room } = props;
  return (
    <div className="flex flex-col items-center min-w-[25%] flex-1 my-5">
      <div className="max-w-[100%] mx-2">
        <img
          src={room.image}
          alt="location image"
          className="max-w-[100%] h-[300px] rounded mr-2"
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{room.name}</span>
          <span>
            {room.locationId?.tenViTri} - {room.locationId?.tinhThanh}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Room = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const fetchAPI = async () => {
    try {
      const { data } = await axios({
        url: 'https://airbnb.cybersoft.edu.vn/api/rooms?limit=8',
        method: 'GET',
        headers: {
          tokenByClass:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNCIsIkhldEhhblN0cmluZyI6IjI1LzExLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2OTMzNDQwMDAwMCIsIm5iZiI6MTYzNzk0NjAwMCwiZXhwIjoxNjY5NDgyMDAwfQ.vwkhYBKLRzJB0Tm18qLCchebQxHvEsbsbUYBmlawj5s',
        },
      });
      setRooms(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <section className="max-w-[1315px] mx-auto mt-12">
      <h2 className="h2">Ở bất cứ đâu</h2>

      <div className="flex flex-wrap items-center justify-around">
        {rooms?.map((room) => (
          <RoomItem room={room} />
        ))}
      </div>
    </section>
  );
};
