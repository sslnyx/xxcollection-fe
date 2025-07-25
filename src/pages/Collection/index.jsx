import React, { useEffect, useState } from "react";
import heroSrc from "/img/banner/collection.jpeg";
import PageHero from "../../components/PageHero";
import CarCard from "../Inventory/CarCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Collection = () => {
  const [cars, setCarts] = useState(null);

  const title = {
    heading: "",
    // subline: "Your dream car is only one click away",
    pageTitle: "Contact Us",
  };

  const getCollection = async () => {
    try {
      const res = await fetch(import.meta.env.VITE_APP_API_URL + "/collection");
      const data = await res.json();

      //   console.log(data)

      setCarts(data);
    } catch (error) {}
  };

  useEffect(() => {
    getCollection();
  }, []);

  const heroProps = {
    heroBanner: heroSrc,
    title,
  };

  return (
    <>
      <Helmet>
        <title>Collection</title>
        <meta
          name="description"
          content="Browse through the curated collection of the finest supercars at XXCollection Club. Experience the pinnacle of car luxury."
        />
        <link rel="canonical" href="https://xxcollectionclub.com/collection" />
      </Helmet>

      <PageHero {...heroProps} />
      <section>
        <div className="container">
          <h2 className="mb-5 text-3xl">collection</h2>

          <p>
            Explore our curated collection of luxury vehicles, meticulously
            selected to elevate your driving experience to new heights.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex flex-wrap flex-row -mx-2 mb-10">
            {cars?.length ? (
              <>
                {cars.map((car, id) => (
                  <CarCard key={id} {...car} />
                ))}
              </>
            ) : (
              <div className="p-2">
                <h2>Sorry, 0 car found</h2>
                <p>
                  Please{" "}
                  <Link to="/contact-us" className="text-gold">
                    <u>contact us</u>
                  </Link>{" "}
                  for car sourcing.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
