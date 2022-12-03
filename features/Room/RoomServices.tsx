import { roomServices } from '@/constants/room';
import { Room } from '@/interfaces';
import classNames from 'classnames';

const RoomServices = ({ room }: { room: Room }) => {
  return (
    <div className="my-6">
      <p className="text-xl font-medium mb-4">Nơi này có những gì cho bạn</p>
      <div className="flex flex-wrap gap-y-2">
        {roomServices.map((service) => {
          const { keyName, icon: Icon } = service;
          return (
            <div key={keyName} className="flex items-center min-w-[50%] text-black-200">
              <Icon className="text-2xl mr-3" />
              <span
                className={classNames({
                  'line-through': !room[keyName],
                })}
              >
                {service.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RoomServices;
