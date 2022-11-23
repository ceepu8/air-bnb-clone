import { useFetchLocation } from '@/hooks/api/destination';
import { Location } from '@/interfaces';
import { Button } from 'antd';
import classNames from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import 'antd/dist/reset.css';

function Arrow(props: any) {
  return (
    <button
      className={classNames(
        `arrow p-3 rounded-full border-grey-400 border-solid border-[0.5px] ${
          props.left ? 'arrow-left' : 'arrow-right'
        }`,
      )}
      onClick={props.onClick}
      type="button"
    >
      <svg className="w-[10px] h-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
      </svg>
    </button>
  );
}

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
        router.push(`/?locationId=${id}`);
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
          <span className="text-xs">{tinhThanh}</span>
        </div>
      </div>
    </button>
  );
};

export const Destination = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [locations, isLoading] = useFetchLocation();

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 'auto',
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel + 1);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    instanceRef.current?.update();
  }, [locations || []]);

  return (
    <section className="max-w-[1315px] px-12 mx-auto mt-[112px] relative">
      <h2 className="h2">Khám phá những điểm đến gần đây</h2>
      <div ref={sliderRef} className="keen-slider max-w-[90%] mx-auto">
        {locations?.map((location) => (
          <div key={location.id} className="keen-slider__slide max-w-[85px] min-w-[85px]">
            <LocationItem location={location} />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={currentSlide === instanceRef.current.track.details?.slides.length - 1}
          />
        </>
      )}
    </section>
  );
};
