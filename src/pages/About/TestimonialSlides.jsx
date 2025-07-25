import { useState, useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { ResizePlugin } from "../../../lib/plugins";
import leftQuote from "/img/aboutus/quote-left-solid.svg";
import rightQuote from "/img/aboutus/quote-right-solid.svg";

const TestimonialSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [testimonial, setTestimonial] = useState([]);
  const [updatedSlides, setUpdatedSlides] = useState([]);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        // setLoaded(true);
      },
    },
    [ResizePlugin(setLoaded, setUpdatedSlides)]
  );

  useEffect(async () => {
    const res = await fetch("/staticData.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setTestimonial(data);
  }, []);

  return (
    <div className="text-center">
      <div>
        <div ref={sliderRef} className="keen-slider mb-8">
          {testimonial.map(({ quote, author }, i) => (
            <div
              key={i}
              className="keen-slider__slide flex justify-center px-[40px] text-sm md:text-base"
            >
              <div>
                <p className="mb-5 max-w-[600px] relative">
                  <img
                    className="absolute -left-[35px] md:-left-[50px] -top-[3px] w-[30px]"
                    src={leftQuote}
                  />
                  <img
                    className="absolute -right-[35px] md:-right-[50px] bottom-[0px] w-[30px]"
                    src={rightQuote}
                  />
                  {quote}
                </p>
                <p>- {author}.</p>
              </div>
            </div>
          ))}
        </div>

        {loaded && updatedSlides.length && (
          <div className="dots">
            {[...Array(updatedSlides.length).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialSlides;
