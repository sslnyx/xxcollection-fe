import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Helmet from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Car from "./pages/Inventory/Car";
import Inventory from "./pages/Inventory";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Page404 from "./pages/Page404";
import Collection from "./pages/Collection";
import "tw-elements";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="collection" element={<Collection />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventory/:carid" element={<Car />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about-us" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
