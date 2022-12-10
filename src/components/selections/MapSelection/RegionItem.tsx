import { usePlaceSearchForm } from "@/hooks"

type RegionProps = {
  image: string
  name: string
}

const RegionItem = ({ image, name }: RegionProps) => {
  const { handleSetState } = usePlaceSearchForm()

  return (
    <div className="w-1/3 p-2">
      <div className="h-[120px]" onClick={() => handleSetState(name)}>
        <img
          src={image}
          alt=""
          className="border-grey-300 hover:border-black-100 h-full w-full cursor-pointer rounded-lg border-[1px] border-solid object-cover transition-all"
        />
      </div>
      <p>{name}</p>
    </div>
  )
}

export default RegionItem
