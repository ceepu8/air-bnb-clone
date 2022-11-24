import { Skeleton } from 'antd';
import React from 'react';

type Props = {};

const AccommodationSkeleton = (props: Props) => {
  return (
    <div>
      <div className="col-span-1">
        <div className="flex flex-col relative">
          <div className="skeleton max-w-full min-h-[300px] max-h-[300px] rounded-2xl"></div>
          <div className="skeleton max-w-full min-h-[20px] max-h-[20px] rounded mt-4"></div>
          <div className="flex justify-between">
            <div className="skeleton min-w-[150px] max-w-[150px] min-h-[20px] max-h-[20px] rounded mt-2"></div>
            <div className="skeleton min-w-[50px] max-w-[50px] min-h-[20px] max-h-[20px] rounded mt-2"></div>
          </div>
          <div className="skeleton max-w-[100px] min-h-[20px] max-h-[20px] rounded mt-2"></div>
          <div className="skeleton max-w-[50px] min-h-[20px] max-h-[20px] rounded mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationSkeleton;
