import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import mapstyle from "./map_style.json";

function Map() {
  const [map, setMap] = React.useState(null);

  const containerStyle = {
    // width: "100vw",
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const center = {
    lat: 38.94017069863202,
    lng: -2.290057517222991,
  };

  const onLoad = React.useCallback(function callback(map) {
    try {
      setMap(map);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <LoadScript
      // version="3.51"
      googleMapsApiKey="API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onResize={() => setMap(map)}
        options={{
          disableDefaultUI: true,
          mapTypeControl: false,
          zoomControlOptions: true,
          styles: mapstyle,
          draggable: false,
          backgroundColor: "linear-gradient(0deg, #cb4e20 21%, #1c125e 61%)",
          zoom: 4,
        }}
      ></GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
