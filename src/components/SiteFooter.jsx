import footerBg from "/img/footer/footer-bg-2.jpg";
import addressIcon from "/img/icons/location-dot-solid.svg";
import emailIcon from "/img/icons/envelope-solid.svg";
import phoneIcon from "/img/icons/phone-solid.svg";
import SocialMedias from "./SocialMedias";

const SiteFooter = () => {
  return (
    <footer className="py-[50px] relative">
      <div className="absolute w-full h-full bottom-0">
        <div className="bg-gradient z-[1]"></div>

        <img
          src={footerBg}
          className="absolute brightness-50 object-cover object-bottom bottom-0 left-0 w-full h-full"
        />
      </div>

      <div className="container relative md:text-left z-10">
        <div className="flex flex-row flex-wrap items-end mb-10">
          <div className="basis-1/1 md:basis-1/2 mb-10 md:mb-0">
            <h2 className="mb-5">XX COLLECTION Club</h2>
            <p className="flex mb-3">
              <img className="w-[20px] mr-3" src={addressIcon} />
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Aimone+Auto+Group/@49.1880577,-123.1358127,21z/data=!4m5!3m4!1s0x548674d887f42763:0x35545b6fcdb46f70!8m2!3d49.1880767!4d-123.135718"
              >
                8000 River Rd, Richmond
                <br className="block md:hidden" /> BC V6X 1X7
              </a>
            </p>
            <p className="flex mb-3">
              <img className="w-[20px] mr-3" src={emailIcon} />
              <a href="mail:info@aimoneautogroup.com">
                info@aimoneautogroup.com
              </a>
            </p>
            <p className="flex">
              <img className="w-[20px] mr-3" src={phoneIcon} />
              <a href="tel:604-370-7031">604-370-7031</a>
            </p>
          </div>

          <div className="basis-1/1 md:basis-1/2 flex justify-end">
            <SocialMedias />
          </div>
        </div>

        <div className="text-center">
          &copy;{new Date().getFullYear()} XX COLLECTION CLUB. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
