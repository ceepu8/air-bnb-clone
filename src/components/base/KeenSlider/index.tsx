import cn from "classnames"
import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"

const TYPE = {
  PREV: "prev",
  NEXT: "next",
}

const KeenSlider = ({ data, renderItem, loading, lengthInit, renderLoading }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const arrList = Array.isArray(data) && data?.length > 0 ? data : Array(lengthInit).fill(0)
  const hasLoading = loading && typeof renderLoading === "function"

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    mode: "free-snap",
    slides: {
      perView: "auto",
      spacing: 10,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel + 1)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className="flex-center relative w-full flex-nowrap">
      {loaded && instanceRef.current && (
        <Arrow
          type={TYPE.PREV}
          onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
          disabled={currentSlide === 0}
        />
      )}

      <div ref={sliderRef} className="keen-slider mx-auto max-w-[92%]">
        {arrList.map((item: any, idx: number) => (
          <div className={cn("keen-slider__slide w-full min-w-[80px]")} key={idx}>
            {hasLoading ? renderLoading() : renderItem(item)}
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <Arrow
          type={TYPE.NEXT}
          onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
          disabled={currentSlide === instanceRef.current.track.details?.slides.length - 1}
        />
      )}
    </div>
  )
}

function Arrow({ type, onClick }: any) {
  return (
    <button
      className={cn(
        `border-grey-400 h-10 w-10 rounded-full border-[0.5px] border-solid p-3 ${
          type === TYPE.PREV ? "arrow-left" : "arrow-right"
        }`
      )}
      onClick={onClick}
      type="button"
    >
      <svg className="h-[10px] w-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        {type === TYPE.PREV ? (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        ) : (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </button>
  )
}

export default KeenSlider
