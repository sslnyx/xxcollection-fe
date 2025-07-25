import { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Gallery = ({ gallery, setSelectedSlide }) => {
  return (
    <>
      <div
        className="flex flex-row flex-wrap -m-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      >
        {gallery.map((imgUrl, i) => (
          <div
            key={i}
            className="basis-1/2 md:basis-1/3 p-1 cursor-pointer"
            onClick={() => setSelectedSlide(i)}
          >
            <LazyLoadImage
              className="w-full h-full object-cover"
              src={import.meta.env.VITE_APP_STORAGE_URL + imgUrl}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
