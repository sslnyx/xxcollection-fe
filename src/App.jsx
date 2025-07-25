import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import { fetchCars, fetchCarsByBrand } from "../lib/api";
import Loader from "./components/Loader";
import { isEmpty } from "../lib/plugins";
import Helmet from "react-helmet";

function App() {
  const [cars, setCars] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [brands, setBrands] = useState([]);
  const [loadingNewBrand, setLoadingNewBrand] = useState(false);
  const [link, setLink] = useState("");
  const [gallery, setGallery] = useState();
  const { pathname } = useLocation();
  const [loadingMore, setLoadingMore] = useState(false);
  const { carid } = useParams();

  const setViewHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(async () => {
    setViewHeight();

    window.addEventListener("resize", () => {
      setViewHeight();
    });

    const API_URL = import.meta.env.VITE_APP_API_URL + "/cars";
    const brands_url = import.meta.env.VITE_APP_API_URL + "/brands";
    const gallery_url = import.meta.env.VITE_APP_API_URL + "/gallery";
    const response = await Promise.all([
      fetch(API_URL),
      fetch(brands_url),
      fetch(gallery_url),
    ]);

    const resData = await response[0].json();

    cars[selectedBrand] = resData;
    setCars(cars);
    setLink(cars[selectedBrand].next_page_url);

    setBrands(await response[1].json());

    const galleryData = await response[2].json();

    setGallery(galleryData.reverse());
    setLoading(false);

    if (
      !cars[selectedBrand].data.find(({ handle }) => handle === carid) &&
      carid
    ) {
      setSelectedBrand("single");
    }

    return () => {
      window.removeEventListener("resize", () => {
        this.setViewHeight();
      });
    };
  }, []);

  const loadMoreHandler = (val) => {
    return async () => {
      setLoadingMore(true);
      const { data, next_page_url } = await fetchCars(val);
      cars[selectedBrand].data = [...cars[selectedBrand].data, ...data];
      cars[selectedBrand].next_page_url = next_page_url;
      setCars(cars);
      setLoadingMore(false);
    };
  };

  const brandHandler = async (brand) => {
    !cars[brand]
      ? (setLoadingNewBrand(true),
        (cars[brand] = await fetchCarsByBrand(brand)),
        setLoadingNewBrand(false),
        setCars(cars))
      : "";

    setSelectedBrand(brand);
    // setLink(cars[brand].next_page_url);
  };

  return (
    <>
      <Helmet
        defaultTitle="XX COLLECTION CLUB - Vancouver's Premier Supercar Dealer"
        titleTemplate="%s | XX COLLECTION CLUB - Vancouver's Premier Supercar Dealer"
      />
      <SiteNav />
      <main>
        <Outlet
          context={{
            cars,
            setCars,
            link,
            loadMoreHandler,
            selectedBrand,
            setSelectedBrand,
            brands,
            loadingMore,
            brandHandler,
            setLoadingNewBrand,
            loadingNewBrand,
            gallery,
            setGallery,
          }}
        />
      </main>

      {pathname !== "/" && cars ? <SiteFooter /> : ""}
    </>
  );
}

export default App;
