import { useEffect, useState } from "react";

const Marker = (options) => {
  const [marker, setMarker] = useState();

  const contentString =
    '<div id="content" class="text-black">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">AIMONE AUTO GROUP LTD.</h1>' +
    '<div id="bodyContent">' +
    '<p><a target="_blank" href="https://www.google.com/maps/place/Aimone+Auto+Group/@49.1880577,-123.1358127,21z/data=!4m5!3m4!1s0x548674d887f42763:0x35545b6fcdb46f70!8m2!3d49.1880767!4d-123.135718">8000 River Rd, Richmond, BC V6X 1X7</a></p>' +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
    }
  }, [marker, options]);

  return null;
};

export default Marker;
