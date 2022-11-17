import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Accommodation as AccommInterface } from '../../interfaces/index';
import { AccommodationCard } from '../data-display/AccommodationCard';

type ContentApiResponse = {
  data: AccommInterface[];
  keywords: any;
  pageIndex: number;
  pageSize: number;
  totalRow: number;
};
type APIResponse = {
  content: ContentApiResponse;
  dateTime: any;
  statusCode: any;
};
export const Accommodation = () => {
  const [rooms, setRooms] = useState<AccommInterface[]>([]);
  const fetchAPI = async () => {
    try {
      const { data } = await axios.get<APIResponse>(
        'https://airbnbnew.cybersoft.edu.vn/api/phong-thue/phan-trang-tim-kiem?pageIndex=1&pageSize=8',
        {
          headers: {
            tokenCybersoft:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNCIsIkhldEhhblN0cmluZyI6IjI1LzExLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2OTMzNDQwMDAwMCIsIm5iZiI6MTYzNzk0NjAwMCwiZXhwIjoxNjY5NDgyMDAwfQ.vwkhYBKLRzJB0Tm18qLCchebQxHvEsbsbUYBmlawj5s',
          },
        },
      );
      setRooms(data.content.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <section className="max-w-[1315px] px-12 mx-auto mt-12">
      <h2 className="h2 mb-8">Ở bất cứ đâu</h2>
      <div className="grid grid-cols-4 justify-start gap-x-4 gap-y-8 m-xs:grid-cols-1 m-md:grid-cols-2 m-lg:grid-cols-3">
        {rooms?.map((room) => (
          <AccommodationCard room={room} />
        ))}
      </div>
    </section>
  );
};
