import classNames from "classnames"
import { useRouter } from "next/router"

import { LocationInterface } from "@/interfaces"

type LocationItemProps = {
  location: LocationInterface
}

const DEFAULT_IMAGE =
  "https://www.travelandleisure.com/thmb/rbPz5_6COrWFh94qFRHYLJrRM-g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iguazu-falls-argentina-brazil-MOSTBEAUTIFUL0921-e967cc4764ca4eb2b9941bd1b48d64b5.jpg"

const LocationItem = (props: LocationItemProps) => {
  const { hinhAnh, tenViTri, tinhThanh, id } = props.location || {
    hinhAnh: DEFAULT_IMAGE,
  }

  const router = useRouter()

  return (
    <button
      className="w-full"
      onClick={() => {
        if (id) {
          router.push(`/?locationId=${id}`, undefined, {
            scroll: false,
          })
        }
      }}
    >
      <div
        className={classNames(
          `group my-5 flex flex-col border-b-2 border-transparent pb-2 hover:border-gray`,
          {
            "border-grey-300": Number(router.query.locationId) === id,
          }
        )}
      >
        <img
          src={hinhAnh}
          alt="location image"
          className="mx-auto h-[50px] w-[50px] shrink-0 rounded-full"
        />
        <div
          className={classNames("mt-2 flex  flex-col text-center group-hover:!font-semibold", {
            "font-semibold": Number(router.query.locationId) === id,
          })}
        >
          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
            {tenViTri}
          </span>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
            {tinhThanh}
          </span>
        </div>
      </div>
    </button>
  )
}

export default LocationItem
