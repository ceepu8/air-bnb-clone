import { Skeleton } from 'antd';
import React from 'react';

type Props = {};

const AccommodationSkeleton = (props: Props) => {
  return (
    <div>
      <div className="col-span-1">
        <div className="flex flex-col relative">
          <div className="skeleton max-w-full h-[300px] rounded-2xl"></div>
          <div className="skeleton max-w-full h-[20px] rounded mt-4"></div>
          <div className="flex justify-between">
            <div className="skeleton w-[150px] h-[20px] rounded mt-2"></div>
            <div className="skeleton w-[50px] h-[20px] rounded mt-2"></div>
          </div>
          <div className="skeleton w-[100px] h-[20px] rounded mt-2"></div>
          <div className="skeleton w-[50px] h-[20px] rounded mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationSkeleton;
