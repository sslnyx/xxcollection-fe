import { useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { searchCars } from "../../../lib/api";

const SearchBars = ({ activeBrandsHandler, forwardedRef }) => {
  const searchVal = useRef();
  // const selectBoxRef = useRef();

  const {
    brands,
    cars,
    setCars,
    setSelectedBrand,
    brandHandler,
    setLoadingNewBrand,
  } = useOutletContext();

  const searchHandler = async (ev) => {
    ev.preventDefault();
    setLoadingNewBrand(true);
    const res = await searchCars(searchVal.current.value);
    cars.search = {};
    cars.search.data = res;
    setCars(cars);
    setSelectedBrand("search");
    setLoadingNewBrand(false);
  };

  // setSelectBox(selectBoxRef.current);

  return (
    <div className="flex flex-row flex-wrap">
      <select
        ref={forwardedRef}
        onChange={(ev) => (
          brandHandler(ev.target.value), activeBrandsHandler(ev.target.value)
        )}
        className="bg-black h-[44px] rounded-none p-2 sm:mr-3 border-2 border-gold uppercase w-full sm:w-[250px] mb-3 sm:mb-0"
      >
        <option value="all">ALL</option>
        {brands.map(({ brand_name, id }) => (
          <option key={id} value={id}>
            {brand_name}
          </option>
        ))}
      </select>

      <form onSubmit={searchHandler} className="w-full sm:w-[250px]">
        <div className="relative w-full">
          <input
            ref={searchVal}
            required
            type="text"
            name="name"
            className="border-2 p-2 border-gold w-full"
            placeholder="search"
          />
          <button
            type="submit"
            className="absolute right-2 top-0 flex h-full items-center"
          >
            <svg
              fill="#fff"
              className="w-[16px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBars;
