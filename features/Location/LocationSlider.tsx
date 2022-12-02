import { useFetchLocation } from '@/hooks/api/destination';
import { Location } from '@/interfaces';
import { Button } from 'antd';
import classNames from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import 'antd/dist/reset.css';
import LocationSkeleton from './LocationSkeleton';
import LocationItem from './LocationSliderItem';

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

export const LocationSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [locations, isLoading] = useFetchLocation();

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 'auto',
      spacing: 10,
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
  }, [locations.length, isLoading]);
  return (
    <section className="max-w-[1315px] px-12 mx-auto mt-[112px] relative">
      <h2 className="h2">Khám phá những điểm đến gần đây</h2>
      <div ref={sliderRef} className="keen-slider max-w-[1100px] min-w-0 mx-auto">
        {locations?.map((location) => (
          <div key={location.id} className="keen-slider__slide min-w-[80px]">
            <LocationItem location={location} />
          </div>
        ))}

        {isLoading &&
          [...Array(15)].map((e, i) => {
            return (
              <div key={i} className="keen-slider__slide min-w-[80px]">
                <LocationSkeleton />
              </div>
            );
          })}
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
