import PrimaryBtn from "../../components/PrimaryBtn";
import { formatter } from "../../../lib/plugins";
import { Link, useLocation } from "react-router-dom";

const CarCard = (props) => {
  const { title, hero_image, variant_price, id, handle, gallery, condition } =
    props;
  // console.log(JSON.parse(gallery)[0]);

  const { pathname } = useLocation();
  return (
    <div className="basis-full md:basis-1/2 relative aspect-[16/9] overflow-hidden p-2">
      <Link to={`/inventory/${handle}`}>
        {hero_image ? (
          <img
            className="h-full w-full object-cover"
            src={import.meta.env.VITE_APP_STORAGE_URL + hero_image}
            alt=""
          />
        ) : gallery ? (
          <img
            className="h-full w-full object-cover object-[50%_100%] saturate-75"
            src={import.meta.env.VITE_APP_STORAGE_URL + JSON.parse(gallery)[0]}
            alt=""
          />
        ) : (
          ""
        )}

        <div className="bg-gradient-bottom"></div>
        <div className="bg-gradient"></div>

        <div className="content absolute w-full h-full top-0 left-0 p-5 flex flex-col justify-between items-center">
          <h2 className="text-sm md:text-2xl text-center">{title}</h2>

          {pathname === "/inventory" && (
            <div className="flex items-center">
              {condition === "1" ? (
                <div className="mr-5 uppercase">
                  PRICE:{" "}
                  {variant_price > 0
                    ? formatter.format(variant_price)
                    : "Call for Pricing"}
                </div>
              ) : (
                <div className="py-1 px-5 rounded-full border-gold border-2 text-gold">
                  SOLD
                </div>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default CarCard;
