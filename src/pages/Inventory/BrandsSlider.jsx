import { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import { convertToSlug } from "../../../lib/plugins";
import { searchCars } from "../../../lib/api";
import Arrow from "./Car/Arrow";

const BrandsSlider = ({ activeBrandsHandler, forwardedRef }) => {

  const { brands, brandHandler } = useOutletContext();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    mode: "snap",
    slides: { perView: "auto" },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="px-6 md:px-10 relative">
        <div ref={sliderRef} className="keen-slider">
          <div
            id="all"
            ref={(el) => (forwardedRef.current[0] = el)}
            // ref={forwardedRef}
            onClick={(ev) => {
              activeBrandsHandler("all", null, null);
              brandHandler("all");
            }}
            className={`keen-slider__slide py-2 min-w-[80px] md:min-w-[120px] text-center uppercase px-2 cursor-pointer flex flex-col items-center`}
          >
            <img
              className="pointer-events-none grayscale-[100%] py-2 md:py-0 max-h-[48px] md:max-h-[78px] md:min-h-[78px] object-contain w-[100px] mb-2"
              src="/img/logos/xx-icon.png"
              alt=""
            />
            <p className="text-xs md:text-sm pointer-events-none">SHOW ALL</p>
          </div>
          {brands.map(({ brand_name, logo, id }, i) => (
            <div
              id={id}
              ref={(el) => (forwardedRef.current[i + 1] = el)}
            // ref={forwardedRef}

              onClick={(ev) => {
                activeBrandsHandler(id);
                brandHandler(id);
              }}
              key={id}
              brand_name={brand_name}
              className={`keen-slider__slide py-2 min-w-[80px] md:min-w-[120px] text-center uppercase px-2 cursor-pointer flex flex-col items-center ${convertToSlug(
                brand_name
              )}`}
            >
              <img
                className="grayscale-[100%] max-h-[78px] mb-2 bg-transparent pointer-events-none"
                src={import.meta.env.VITE_APP_STORAGE_URL + logo}
                alt=""
              />

              <p className="text-xs md:text-sm pointer-events-none">
                {brand_name}
              </p>
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              className="left-[0]"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              className="right-[0]"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  );
};

export default BrandsSlider;
