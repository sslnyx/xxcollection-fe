import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Gallery from "./Gallery";
import GalleryModal from "./GalleryModal";

import { formatter } from "../../../../lib/plugins";
import { fetchCars } from "../../../../lib/api";

const Car = () => {
  const { carid } = useParams();
  const { cars, selectedBrand } = useOutletContext();

  const [details, setDetails] = useState(null);

  useEffect(async () => {
    const res = cars[selectedBrand].data.find(({ handle }) => handle == carid);
    res
      ? setDetails(res)
      : setDetails(
          await fetchCars(import.meta.env.VITE_APP_API_URL + "/cars/" + carid)
        );
  }, []);

  const [selectedSlide, setSelectedSlide] = useState();

  // const jGallery = JSON.parse(gallery);

  return (
    <>
      {details ? (
        <>
          <div className="h-[350px] md:h-[500px] w-full relative">
            <div className="bg-gradient-bottom"></div>

            {details.hero_image ? (
              <img
                className="w-full h-full object-cover object-[center_75%]"
                src={import.meta.env.VITE_APP_STORAGE_URL + details.hero_image}
              />
            ) : details.gallery ? (
              <img
                className="w-full h-full object-cover object-[center_50%]"
                src={
                  import.meta.env.VITE_APP_STORAGE_URL +
                  JSON.parse(details.gallery)[1]
                }
              />
            ) : (
              ""
            )}
          </div>
          <div className="container">
            <section>
              <h2 className="mb-5 text-3xl">{details.title}</h2>

              <div className="flex flex-row flex-wrap">
                <div className="basis-full md:basis-1/2">
                  <h3 className="mb-3">
                    status: {details.condition === "1" ? "In Stock" : "Sold"}{" "}
                  </h3>
                  <h3>
                    PRICE:{" "}
                    {details.variant_price && details.condition === "1"
                      ? formatter.format(details.variant_price)
                      : !details.variant_price && details.condition !== "1"
                      ? "Call for Pricing"
                      : "N/A"}
                  </h3>
                </div>

                <div className="basis-full md:basis-1/2">
                  <h3>Description:</h3>
                  <div
                    className="mb-3 text-sm md:text-base description"
                    dangerouslySetInnerHTML={{ __html: details.body_html }}
                  ></div>
                </div>
              </div>
            </section>

            <section>
              {details.gallery ? (
                <>
                  <Gallery
                    gallery={JSON.parse(details.gallery)}
                    {...{ setSelectedSlide }}
                  />
                  <GalleryModal
                    gallery={JSON.parse(details.gallery)}
                    {...{ selectedSlide }}
                  />
                </>
              ) : (
                ""
              )}
            </section>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Car;
