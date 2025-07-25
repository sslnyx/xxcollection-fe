import { useOutletContext } from "react-router-dom";
import HomeHeroSlider from "../../components/HomeHeroSlider";
import Helmet from "react-helmet";

const Home = () => {
  const context = useOutletContext();
  console.log(context);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Experience the ultimate in luxury with XXCollection Club. Discover our exclusive collection of supercars and unparalleled personal service."
        />
        <link rel="canonical" href="https://xxcollectionclub.com/" />
      </Helmet>
      <HomeHeroSlider />
    </>
  );
};

export default Home;
