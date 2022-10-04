import axios from "axios";
import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import locationApi from "../../api-client/locationApi";

import { Location } from "../../interfaces/locations";
import ImageListLoading from "../Loading/ImageList";

interface LocationItemProps {
  location: Location;
}

const LocationItem = ({ location }: LocationItemProps) => {
  return (
    <div className="flex items-center min-w-[25%] flex-1 my-5">
      <img
        src={location.hinhAnh}
        alt="location image"
        className="w-[70px] h-[70px] rounded mr-2"
      />
      <div className="flex flex-col">
        <span className="text-lg font-semibold">{location.tenViTri}</span>
        <span>{location.tinhThanh}</span>
      </div>
    </div>
  );
};

const Destination = () => {
  const [locations, setLocation] = useState<Location[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [limit, setLimit] = useState<number>(8);

  const fetchAPI = async () => {
    try {
      setLoading(true);
      const { content } = await locationApi.getLocation(limit);

      setTimeout(() => {
        setLocation(content?.data);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [limit]);

  return (
    <section className="max-w-[1315px] mx-auto mt-12">
      <h1 className="text-3xl font-semibold">
        Khám phá những điểm đến gần đây
      </h1>

      <div className="flex flex-wrap items-center justify-around">
        {locations?.map((location) => (
          <LocationItem location={location} />
        ))}
      </div>
      {loading && <ImageListLoading />}

      <div className="text-center">
        <button
          className="py-2 px-4 bg-pink rounded text-white"
          onClick={() => {
            setLimit(limit + 8);
          }}
        >
          Xem thêm
        </button>
      </div>
    </section>
  );
};

export default Destination;
