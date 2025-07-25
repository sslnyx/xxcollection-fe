import { useState, useEffect, useRef } from "react";

import siteLogo from "/img/logos/xx-logo.png";
import MainMenu from "./MainMenu";
import { Link, useLocation } from "react-router-dom";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const SiteNav = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const itemsRef = useRef([]);
  const menuItems = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "INVENTORY",
      link: "/inventory",
    },
    {
      title: "COLLECTION",
      link: "/collection",
    },
    {
      title: "ABOUT US",
      link: "/about-us",
    },
    {
      title: "GALLERY",
      link: "/gallery",
    },
    {
      title: "CONTACT US",
      link: "/contact-us",
    },
  ];
  const menuHandler = () => {
    setActiveMenu(!activeMenu);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });

    itemsRef.current.forEach((el) => {
      el.classList.remove("activeMenuItem");
    });

    const target = itemsRef.current.find(({ id }) => id === pathname);
    target ? target.classList.add("activeMenuItem") : "";
  }, [pathname]);

  return (
    <nav className="fixed z-50 w-full">
      <div className="bg-gradient h-[80px] md:h-[150px]"></div>
      <div className="container relative py-5 flex justify-between items-center">
        <Link to={"/"}>
          <img
            className="w-[120px] md:w-[150px]"
            src={siteLogo}
            width={150}
            height={57.77}
            alt="xxcc-logo"
          />
        </Link>
        <ul className="flex hidden md:flex -mr-3">
          {menuItems.map(({ title, link }, i) => (
            <li
              key={i}
              id={link}
              ref={(el) => (itemsRef.current[i] = el)}
              className="font-bold"
            >
              <Link className="p-3" to={link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="cursor-pointer p-2 -mr-2 block md:hidden"
          onClick={menuHandler}
        >
          <div className="h-[2px] w-[30px] bg-white mb-2"></div>
          <div className="h-[2px] w-[30px] bg-white"></div>
        </div>
      </div>

      <Transition in={activeMenu} timeout={500}>
        {(state) => <MainMenu {...{ menuHandler, state, menuItems }} />}
      </Transition>

      {/* {activeMenu ? <MainMenu {...{ menuHandler }} /> : ""} */}
    </nav>
  );
};

export default SiteNav;
