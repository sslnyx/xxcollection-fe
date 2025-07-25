import { useRef, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GalleryCard = ({ last_modify, path, type, className, onClick }) => {
  const videoData = useRef(null);

  const videoHandler = (ev) => {
    const video = ev.target;
    video.paused ? video.play() : video.pause();
  };

  useEffect(() => {
    if (videoData.current) {
      videoData.current.play();
      videoData.current.addEventListener("loadeddata", () => {
        videoData.current.pause();
      });
    }

    return () => {
      if (videoData.current) {
        videoData.current.removeEventListener("loadeddata", () => {
          videoData.current.pause();
        });
      }
    };
  }, []);

  return (
    <div
      onClick={onClick}
      className={`${className} cursor-pointer`}
      data-bs-toggle="modal"
      data-bs-target="#exampleModalCenter"
    >
      {type === "image/jpeg" ? (
        <div className="relative h-full w-full">
          <img
            className="absolute w-[35px] right-5 bottom-5 opacity-50"
            src="/img/icons/clone-solid.svg"
          />

          <LazyLoadImage
            className="h-full w-full object-cover"
            src={import.meta.env.VITE_APP_STORAGE_URL + path}
          />
        </div>
      ) : type === "video/mp4" ? (
        <div className="relative h-full w-full">
          <img
            className="absolute w-[35px] right-5 bottom-5 opacity-50"
            src="/img/icons/play-solid.svg"
          />
          <video
            ref={videoData}
            onMouseEnter={videoHandler}
            muted
            playsInline
            onMouseOut={videoHandler}
            className="h-full w-full object-cover"
            preload="auto"
          >
            <source
              src={import.meta.env.VITE_APP_STORAGE_URL + path}
              type="video/mp4"
            />
          </video>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GalleryCard;
