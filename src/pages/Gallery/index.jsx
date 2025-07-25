import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PageHero from "../../components/PageHero";
import heroBanner from "/img/banner/gallery.jpg";
import GalleryCard from "./GalleryCard";
import GalleryModal from "../Inventory/Car/GalleryModal";
import { Helmet } from "react-helmet";

const Gallery = () => {
  const { gallery } = useOutletContext();
  const [selectedSlide, setSelectedSlide] = useState();

  // const page = paginate(gallery, 12);

  // console.log(page);

  const title = {
    heading: "GALLERY",
    subline: "",
    pageTitle: "Gallery",
  };

  return (
    <div>
      <Helmet>
        <title>Gallery</title>
        <meta
          name="description"
          content="View stunning images of luxury, exotic, and supercars in the XXCollection Club gallery. Experience the beauty and elegance of our collection."
        />
        <link rel="canonical" href="https://xxcollectionclub.com/gallery" />
      </Helmet>

      <PageHero {...{ heroBanner, title }} />

      <section>
        <div className="container">
          <div className="mx-auto max-w-[600px] text-center mb-10">
            <h1 className="text-2xl mb-5">The Art of Performance</h1>
            <p>
              A luxury car is an investment. It's a purchase which promises to
              enhance your life. At Aimone Auto Group, we provide the
              opportunity to find your dream car with a long list of brands and
              models.
            </p>
          </div>

          <div className="flex flex-wrap flex-row -mx-1">
            {gallery.map((imageData, i) => (
              <GalleryCard
                onClick={() => setSelectedSlide(i)}
                {...imageData}
                className="basis-full md:basis-1/3 p-1 aspect-[8/6]"
                key={i}
              />
            ))}
          </div>
        </div>
      </section>

      <GalleryModal {...{ gallery, selectedSlide }} />
    </div>
  );
};

export default Gallery;
