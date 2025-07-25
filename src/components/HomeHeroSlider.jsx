import { useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useOutletContext, Link } from "react-router-dom";
import PrimaryBtn from "./PrimaryBtn";

const HomeHeroSlider = () => {
  const { cars, selectedBrand, setSelectedBrand } = useOutletContext();

  // const activeCars = cars.all.data
  //   .filter(({ condition }) => condition === "1")
  //   .sort((a, b) => b.variant_price - a.variant_price)
  //   .splice(0, 5);

  // console.log(cars.all.data);

  const [refCallback, slider, sliderNode] = useKeenSlider(
    {
      loop: true,
      //   vertical: true,
      slideChanged() {
        // console.log("slide changed");
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          // if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          // slider.container.addEventListener("mouseover", () => {
          //   mouseOver = true;
          //   clearNextTimeout();
          // });
          // slider.container.addEventListener("mouseout", () => {
          //   mouseOver = false;
          //   nextTimeout();
          // });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  useEffect(() => {
    setSelectedBrand("all");
  }, []);

  return (
    <>
      {cars?.all?.data && (
        <div ref={refCallback} className="keen-slider h-screen w-screen">
          {cars.all.data
            .slice(0, 5)
            .map(({ hero_image, title, handle, mileage, gallery }) => (
              <div className="keen-slider__slide" key={handle}>
                <div className="container flex justify-center">
                  <h2 className="absolute px-[22px] top-[20%] z-10 text-center text-2xl md:text-3xl uppercase">
                    {title}
                  </h2>

                  <div className="absolute z-10 bottom-[80px] flex items-center">
                    {mileage ? (
                      <div className="mr-5 uppercase">
                        Mileage: {mileage} km
                      </div>
                    ) : (
                      ""
                    )}
                    <Link to={`/inventory/${handle}`}>
                      <PrimaryBtn>
                        <span className="">DETAILS</span>
                      </PrimaryBtn>
                    </Link>
                  </div>
                </div>

                {hero_image ? (
                  <img
                    src={import.meta.env.VITE_APP_STORAGE_URL + hero_image}
                    className="h-full object-cover object-[center_100%] w-full brightness-75"
                  />
                ) : gallery ? (
                  <img
                    src={
                      import.meta.env.VITE_APP_STORAGE_URL +
                      JSON.parse(gallery)[0]
                    }
                    className="h-full object-cover object-bottom w-full brightness-75"
                  />
                ) : (
                  ""
                )}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default HomeHeroSlider;
