import { KeenSlider } from "@/components"
import { useGetLocationList } from "@/hooks"
import { LocationInterface } from "@/interfaces"
import LocationSkeleton from "../LocationSkeleton"

import LocationItem from "./LocationItem"

const LocationSlider = () => {
  const { data: locationList, isLoading } = useGetLocationList()

  return (
    <section className="relative">
      <h3 className="text-2xl font-bold">Khám phá những điểm đến gần đây</h3>
      <KeenSlider
        data={locationList || []}
        renderItem={(location: LocationInterface) => <LocationItem location={location} />}
        renderLoading={() => <LocationSkeleton />}
        loading={isLoading}
        lengthInit={15}
      />
    </section>
  )
}

export default LocationSlider
