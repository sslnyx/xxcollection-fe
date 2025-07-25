import { useEffect, useRef, useState } from "react";
import Marker from "./Marker";
import styles from "./mapStyle.json";
import favIcon from "/img/logos/fav.png";

const Map = () => {
  const gMap = useRef(null);
  const [map, setMap] = useState();
  const mapOtions = {
    center: { lat: 49.1880752, lng: -123.135857 },
    zoom: 14,
    styles,
    disableDefaultUI: true,
    zoomControl: true,
  };

  const image = {
    url: favIcon,
    scaledSize: new google.maps.Size(40, 40)
  };

  useEffect(() => {
    if (gMap.current && !map) {
      setMap(new window.google.maps.Map(gMap.current, mapOtions));
    }
  }, [gMap, map]);

  return (
    <div
      className="h-[350px] md:h-[500px] w-full mb-10 md:mb-0"
      ref={gMap}
      id="map"
    >
      <Marker
        position={{ lat: 49.1880752, lng: -123.135857 }}
        icon={image}
        map={map}
      />
    </div>
  );
};

export default Map;
