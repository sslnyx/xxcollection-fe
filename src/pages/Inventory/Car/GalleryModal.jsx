import { useState, useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import { ResizePlugin } from "../../../../lib/plugins";
import Arrow from "./Arrow";
// import "keen-slider/keen-slider.min.css"

const GalleryModal = ({ gallery, selectedSlide }) => {
  // const data = JSON.parse(gallery);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState([]);


  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [ResizePlugin(null, null)]
  );

  useEffect(() => {
    instanceRef.current.moveToIdx(selectedSlide, false, {
      duration: 0,
      easing: null,
    });

  }, [selectedSlide]);

  useEffect(() => {
    const new_loaded = [...imgLoaded];
    new_loaded[currentSlide] = true;
    setImgLoaded(new_loaded);
  }, [currentSlide]);

  useEffect(() => {}, []);

  return (
    <div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenter"
        tabIndex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered md:max-w-[1080px] relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-black bg-clip-padding outline-none text-current">
            <div className="modal-body relative p-0">
              <div
                className="close top-[5px] md:top-[35px] right-[5px] md:right-[35px]"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></div>
              <div
                ref={sliderRef}
                className="keen-slider aspect-[5/4] md:aspect-[inherit]"
              >
                {gallery.map((imgUrl, i) => (
                  <div key={i} className="keen-slider__slide flex items-center">
                    {imgLoaded[i] && typeof imgUrl === "string" ? (
                      <img
                        className="h-full w-full object-cover object-[50%_50%] max-h-[80vh]"
                        src={import.meta.env.VITE_APP_STORAGE_URL + imgUrl}
                      />
                    ) : imgLoaded[i] && imgUrl?.type === "image/jpeg" ? (
                      <img
                        className="h-full w-full object-cover"
                        src={import.meta.env.VITE_APP_STORAGE_URL + imgUrl.path}
                      />
                    ) : imgLoaded[i] && imgUrl?.type === "video/mp4" ? (
                      <video
                        muted
                        controls
                        playsInline
                        className="aspect-[16/9]"
                        preload="auto"
                        autoPlay
                      >
                        <source
                          src={
                            import.meta.env.VITE_APP_STORAGE_URL + imgUrl.path
                          }
                          type="video/mp4"
                        />
                      </video>
                    ) : (
                      ""
                    )}
                  </div>
                ))}

                {loaded && instanceRef.current && (
                  <>
                    <Arrow
                      left
                      className="left-[22px]"
                      onClick={(e) =>
                        e.stopPropagation() || instanceRef.current?.prev()
                      }
                      disabled={currentSlide === 0}
                    />

                    <Arrow
                      className="right-[22px]"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
