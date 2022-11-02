import axios from 'axios';
import { LIMIT_DESTINATION } from '../../constants';
import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import locationApi from '../../api-client/locationApi';

import { Location } from '../../interfaces/locations';
import Image from '../data-display/Image';
import Button from '../general/Button';
import ImageListLoading from '../feedback/skeleton/ImageList';

interface LocationItemProps {
  location: Location;
}

const LocationItem = ({ location }: LocationItemProps) => {
  return (
    <div className="flex items-center min-w-[25%] my-5">
      <img src={location.hinhAnh} alt="location image" className="w-[70px] h-[70px] rounded mr-2" />
      <div className="flex flex-col">
        <span className="text-lg font-semibold">{location.tenViTri}</span>
        <span>{location.tinhThanh}</span>
      </div>
    </div>
  );
};

export const Destination = () => {
  const [locations, setLocation] = useState<Location[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [page, setPage] = useState<number>(1);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const { content } = await locationApi.getLocation(page, LIMIT_DESTINATION);
      setLoading(false);
      setLocation((location) => {
        return [...location, ...content?.data];
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [page]);

  return (
    <section className="max-w-[1315px] mx-auto mt-12">
      <h2 className="h2">Khám phá những điểm đến gần đây</h2>

      <div className="flex flex-wrap items-center justify-start">
        {locations?.map((location) => (
          <LocationItem location={location} />
        ))}
      </div>
      {loading && <ImageListLoading />}

      <div className="text-center">
        <Button
          className="py-2 px-4"
          variant="primary"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Xem thêm
        </Button>
      </div>
    </section>
  );
};
