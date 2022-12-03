import { Location } from '@/interfaces';
import classNames from 'classnames';
import { useRouter } from 'next/router';

type LocationItemProps = {
  location: Location;
};

const LocationItem = (props: LocationItemProps) => {
  const { hinhAnh, tenViTri, tinhThanh, id } = props.location || {
    hinhAnh:
      'https://www.travelandleisure.com/thmb/rbPz5_6COrWFh94qFRHYLJrRM-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iguazu-falls-argentina-brazil-MOSTBEAUTIFUL0921-e967cc4764ca4eb2b9941bd1b48d64b5.jpg',
  };

  const router = useRouter();

  return (
    <button
      className="w-full"
      onClick={() => {
        if (id) {
          router.push(`/?locationId=${id}`, undefined, {
            scroll: false,
          });
        }
      }}
    >
      <div
        className={classNames(
          `group flex flex-col my-5 border-b-2 border-transparent pb-2 hover:border-grey-300`,
          {
            'border-grey-300': Number(router.query.locationId) === id,
          },
        )}
      >
        <img
          src={hinhAnh}
          alt="location image"
          className="w-[50px] h-[50px] rounded-full shrink-0 mx-auto"
        />
        <div
          className={classNames('flex flex-col  mt-2 group-hover:!font-semibold text-center', {
            'font-semibold': Number(router.query.locationId) === id,
          })}
        >
          <span className="text-xs whitespace-nowrap text-ellipsis overflow-hidden">
            {tenViTri}
          </span>
          <span className="text-xs whitespace-nowrap text-ellipsis overflow-hidden">
            {tinhThanh}
          </span>
        </div>
      </div>
    </button>
  );
};

export default LocationItem;
