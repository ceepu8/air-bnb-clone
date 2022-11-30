import { useFetchAccommodation } from '@/hooks/api/accommodation';
import { Accommodation as Accom } from '@/interfaces';
import { useRouter } from 'next/router';
import { AccommodationCard } from '../data-display/AccommodationCard';
import AccommodationSkeleton from '../feedback/skeleton/AccommodationSkeleton';

export const Accommodation = () => {
  const {
    query: { locationId },
  } = useRouter();

  const [rooms, isLoading] = useFetchAccommodation(locationId);

  return (
    <section className="max-w-[1315px] px-12 mx-auto mt-12">
      <h2 className="h2 mb-8">Ở bất cứ đâu</h2>
      <div className="grid grid-cols-4 min-h-[450px] justify-start gap-x-4 gap-y-8 m-xs:grid-cols-1 m-md:grid-cols-2 m-lg:grid-cols-3">
        {!isLoading &&
          rooms?.map((room) => {
            return <AccommodationCard key={room.id} room={room} />;
          })}

        {!isLoading && rooms.length < 1 && (
          <p className="col-span-4 flex items-center justify-center">Không có dữ liệu</p>
        )}

        {isLoading && [...Array(4)].map((e) => <AccommodationSkeleton />)}
      </div>
    </section>
  );
};
