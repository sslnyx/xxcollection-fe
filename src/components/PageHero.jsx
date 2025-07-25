import React from "react";
import Helmet from "react-helmet";

const PageHero = ({ heroBanner, title }) => {
  return (
    <div className="h-[350px] md:h-[500px] relative flex justify-center">
      {/* {title.pageTitle ? (
        <Helmet>
          <title>{title.pageTitle}</title>
        </Helmet>
      ) : (
        ""
      )} */}

      <img
        className="w-full object-cover object-[50%_70%] brightness-75 saturate-50"
        src={heroBanner}
        alt="page-hero"
      />

      <div className="container absolute h-full flex justify-center">
        <div className="absolute md:right-[150px] top-[50%] text-center md:text-right">
          <h2
            className="text-3xl md:text-5xl"
            dangerouslySetInnerHTML={{ __html: title.heading }}
          ></h2>

          <p className="text-base md:text-xl">{title.subline}</p>
        </div>
      </div>

      <div className="bg-gradient-bottom"></div>
    </div>
  );
};

export default PageHero;
