import { useState, useRef, useEffect } from "react";
import { Outlet, useOutletContext, Link } from "react-router-dom";
import CarCard from "./CarCard";
import PrimaryBtn from "../../components/PrimaryBtn";
import Loader from "../../components/Loader";
import BrandsSlider from "./BrandsSlider";
import SearchBars from "./SearchBars";
import Helmet from "react-helmet";

const Inventory = () => {
  const {
    cars,
    link,
    brands,
    loadMoreHandler,
    loadingMore,
    selectedBrand,
    loadingNewBrand,
    setSelectedBrand,
  } = useOutletContext();
  // console.log(cars);

  // const [brandsRef, setBrandsRef] = useState(null);
  // const [selectBox, setSelectBox] = useState(null);

  const brandsRef = useRef([]);
  let selectBox = useRef(null);

  const activeBrandsHandler = (id) => {
    brandsRef.current.forEach((el) => {
      el.classList.remove("activeBrand");
    });
    // selectBox.current.value = ev;
    selectBox.current.value = id;
    brandsRef.current.find((el) => el.id == id).classList.add("activeBrand");
  };

  useEffect(() => {
    setSelectedBrand("all");
  }, []);

  return (
    <>
      <Helmet>
        <title>Inventory</title>
        <meta
          name="description"
          content="Explore the extensive inventory of luxury, exotic, and supercars at XXCollection Club. Find your dream car from our exclusive selection."
        />
        <link rel="canonical" href="https://xxcollectionclub.com/inventory" />
      </Helmet>
      <div className="container pt-[120px] flex flex-col flex-1">
        <div className="flex items-end flex-wrap justify-between mb-3">
          <div className="mb-3 xl:mb-0">
            <h1 className="uppercase text-2xl">inventory</h1>
            <p>
              Explore our inventory online and visit us to find your new car
              today!
            </p>
          </div>

          <div>
            <SearchBars {...{ activeBrandsHandler }} forwardedRef={selectBox} />
          </div>
        </div>

        <BrandsSlider {...{ activeBrandsHandler }} forwardedRef={brandsRef} />

        <div className="mb-3"></div>

        {!loadingNewBrand ? (
          <>
            <div className="flex flex-wrap flex-row -mx-2 mb-10">
              {cars[selectedBrand]?.data?.length ? (
                <>
                  {cars[selectedBrand].data.map((car, id) => (
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

            <div className="flex justify-center">
              {cars[selectedBrand]?.next_page_url ? (
                <>
                  {!loadingMore ? (
                    <div
                      onClick={loadMoreHandler(
                        cars[selectedBrand].next_page_url
                      )}
                    >
                      <PrimaryBtn className="solid">Load More</PrimaryBtn>
                    </div>
                  ) : (
                    <Loader />
                  )}
                </>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 flex justify-center items-center py-[150px]">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

export default Inventory;
