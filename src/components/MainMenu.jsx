import { Link } from "react-router-dom";
import aimOneLogo from "/img/logos/aimonelogo3.png";
import navBg from "/img/bg/nav-bg2.jpg";
import menuBg from "/videos/menubg2.mp4";
import SocialMedias from "./SocialMedias";

const MainMenu = ({ menuHandler, state, menuItems }) => {

  return (
    <>
      <div
        onClick={menuHandler}
        className={`transition duration-500 ease-in-out fixed w-screen min-h-screen top-0 left-0 bg-black opacity-80 backdrop-${state}`}
      ></div>
      <div
        className={`main-menu fixed w-screen md:w-auto aspect-[9/16] h-screen top-0 right-0 z-[999] main-menu-${state}`}
      >
        <div className="close" onClick={menuHandler}></div>
        <div className="bg-gold absolute w-full h-full">
          <Link onClick={menuHandler} to="/">
            <img
              className="rotate-90 origin-bottom-left h-[50px] absolute -top-[40px]"
              src={aimOneLogo}
              alt="sitelogo"
            />
          </Link>

          <div className="bg-red h-screen w-[20px] absolute left-[50px]"></div>
        </div>
        <div className="h-full w-full p-5 pt-10 absolute top-0 left-[55px] bg-black">
          {/* <img
            className="absolute brightness-[30%] object-cover left-0 top-0 h-full"
            src={navBg}
          /> */}

          <video
            playsInline
            autoPlay
            loop
            muted
            className="absolute brightness-[70%] object-cover w-full object-top left-0 top-0 h-full"
          >
            <source src={menuBg} type="video/mp4" />
          </video>
          <ul className="text-gold relative mb-10">
            {menuItems.map(({ title, link }, i) => (
              <li key={i} className="mb-5 last:mb-0">
                <Link className="inline-block" onClick={menuHandler} to={link}>
                  <h2 className="text-3xl">{title}</h2>
                </Link>
              </li>
            ))}
          </ul>

          <SocialMedias />
        </div>
      </div>
    </>
  );
};

export default MainMenu;
