import React from 'react';

const DestinationSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-y-1 my-5 max-w-[80px]">
      <div className="skeleton w-[50px] h-[50px] bg-grey-300 rounded-full"></div>
      <div className="skeleton w-[70px] h-[15px] rounded leading-none mt-1"></div>
      <div className="skeleton w-[60px] h-[15px] rounded leading-none"></div>
    </div>
  );
};

export default DestinationSkeleton;
