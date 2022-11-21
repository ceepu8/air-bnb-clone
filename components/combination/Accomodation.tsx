import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Accommodation as AccommInterface } from '../../interfaces/index';
import { AccommodationCard } from '../data-display/AccommodationCard';
import AccommodationSkeleton from '../feedback/skeleton/AccommodationSkeleton';

type ContentApiResponse = {
  data: AccommInterface[];
  keywords: any;
  pageIndex: number;
  pageSize: number;
  totalRow: number;
};
type APIResponse = {
  content: AccommInterface[];
  dateTime: any;
  statusCode: any;
};
export const Accommodation = () => {
  const [rooms, setRooms] = useState<AccommInterface[]>([]);
  const [isLoading, setLoading] = useState(false);

  const {
    query: { locationId },
  } = useRouter();

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<APIResponse>(
        `https://airbnbnew.cybersoft.edu.vn/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${locationId}`,
        {
          headers: {
            tokenCybersoft:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNCIsIkhldEhhblN0cmluZyI6IjI1LzExLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2OTMzNDQwMDAwMCIsIm5iZiI6MTYzNzk0NjAwMCwiZXhwIjoxNjY5NDgyMDAwfQ.vwkhYBKLRzJB0Tm18qLCchebQxHvEsbsbUYBmlawj5s',
          },
        },
      );
      setRooms(data?.content);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [locationId]);

  return (
    <section className="max-w-[1315px] px-12 mx-auto mt-12">
      <h2 className="h2 mb-8">Ở bất cứ đâu</h2>
      <div className="grid grid-cols-4 min-h-[450px] justify-start gap-x-4 gap-y-8 m-xs:grid-cols-1 m-md:grid-cols-2 m-lg:grid-cols-3">
        {!isLoading &&
          rooms?.map((room) => {
            return <AccommodationCard key={room.id} room={room} />;
          })}

        {!isLoading && rooms.length < 1 ? (
          <p className="col-span-4 flex items-center justify-center">Không có dữ liệu</p>
        ) : (
          ''
        )}

        {isLoading && (
          <>
            <AccommodationSkeleton />
            <AccommodationSkeleton />
            <AccommodationSkeleton />
            <AccommodationSkeleton />
          </>
        )}
      </div>
    </section>
  );
};
