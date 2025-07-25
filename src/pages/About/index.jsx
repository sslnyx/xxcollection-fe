import PageHero from "../../components/PageHero";
import heroBanner from "/img/banner/aboutus2.jpg";
import show1 from "/img/aboutus/show1.jpg";
import show2 from "/img/aboutus/show2.jpg";
import banner from "/img/aboutus/banner.jpg";
import TestimonialSlides from "./TestimonialSlides";
import testimonialBg from "/videos/testimonial2.mp4";
import { Helmet } from "react-helmet";

const About = () => {
  const title = {
    heading: "ABOUT <span class='text-gold'>US</span>",
    subline: "Exotic cars, made easy",
    pageTitle: "About Us",
  };

  return (
    <div>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about XXCollection Club, Canada’s premier retailer of luxury, exotic, and supercars. Discover our commitment to luxury and exceptional customer service."
        />
        <link rel="canonical" href="https://xxcollectionclub.com/about-us" />
      </Helmet>

      <PageHero {...{ heroBanner, title }} />

      <section className="overflow-hidden">
        <div className="container relative z-10">
          <h1 className="text-center py-[50px] text-2xl">
            Supercars, made easy
          </h1>
          <div className="flex flex-row flex-wrap -mx-[20px]">
            <div className="order-2 md:order-1 basis-full md:basis-1/2 px-[20px] flex items-center justify-center">
              <div className="w-full lg:w-[450px]">
                <h2 className="mb-3">
                  XXCOLLECTION CLUB IS THE BEST WAY TO EXPERIENCE CAR LUXURY WE
                  DON'T JUST OFFER LUXURY. WE ELEVATE IT.
                </h2>
                <p className="">
                  As one of Canada’s top retailers of luxury, exotic, and
                  supercars, XXCollection Club has been helping automotive
                  enthusiasts find their dream cars for over a decade.
                  Partnering with the esteemed Policaro Group, we provide an
                  unparalleled personal experience, ensuring our commitment to
                  exceptional customer service keeps us at the forefront of the
                  luxury automotive market.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 basis-full md:basis-1/2 h-auto md:h-[450px] relative">
              <img
                className="w-full lg:w-[450px] max-w-full h-auto mb-10 md:mb-0"
                src={show1}
              />
              <img
                className="absolute w-[350px] h-auto left-[50%] bottom-[0px] hidden lg:block"
                src={show2}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative p-0 my-[25px] flex justify-center items-center">
        {/* <img
          className="w-full h-[450px] object-cover object-left brightness-75 saturate-50"
          src={banner}
        /> */}

        <video
          playsInline
          autoPlay
          loop
          muted
          className="w-full aspect-[1/1] md:aspect-[16/6] object-cover object-[30%_50%] brightness-75"
        >
          <source src={testimonialBg} type="video/mp4" />
        </video>

        <div className="text-gold absolute top-[20%] md:right-[20%]">
          {/* <p className="text-xl">We're the best</p> */}
        </div>

        {/* <div className="bg-gradient-bottom"></div> */}
      </section>

      <section>
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl">Customer Insights</h2>
          <br />
          <p>
            Discover real satisfaction through customer stories in our Customer
            Insights section.
          </p>
          <br />

          <TestimonialSlides />
        </div>
      </section>
    </div>
  );
};

export default About;
