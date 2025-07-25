import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <div className="text-center py-[150px] px-[22px]">
        <h1 className="text-xl mb-5">Sorry, this page<br className="block md:hidden" /> can not be found</h1>
        <u className="uppercase">
          <Link to="/">Back to <spane className="text-gold">home</spane></Link>
        </u>
      </div>
    </div>
  );
};

export default Page404;
