import React from "react";
import Loader from "./Loader";

const LoadingContainer = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader />
    </div>
  );
};

export default LoadingContainer;
