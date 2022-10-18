import React, { useRef } from "react";
import { IconButton } from "@mui/material";
import notificacion from "../static/img/notificacion.png";
import { useDispatch } from "react-redux";
import { getUserGeolocation } from "../store/slices/markers/thunk";
import Map, { Marker } from "react-map-gl";
import redIconMarker from "../static/img/redIconMarker.png";
import useSWR  from "swr";

const MapViewer = ({ latitude, longitude }) => {
  const mapDiv = useRef(null);
  const dispatch = useDispatch();
  const getAllUrl = "http://localhost:8080/marker/getAllMarkers";
  const { data, error } = useSWR(getAllUrl);
  
  const geojson = data && !error ? data : [];

  const handleClickAlert = async (event) => {
    event.preventDefault();

    console.log("LONGITUD: " + longitude + "LATITUD: " + latitude);
    dispatch(getUserGeolocation());
  };

  console.log(longitude, latitude);
  return (
    <Map
      mapboxAccessToken={process.env.MAP_KEY}
      ref={mapDiv}
      initialViewState={{
        center: [-53.336061851711932, 1.37729697722443], // starting position [lng, lat]
        zoom: 1.4, // starting zoom
        projection: "globe", // display the map as a 3D globe
      }}
      style={{
        height: "97%",
        width: "100vw",
        position: "fixed",
        top: "4%",
        left: 0,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      fog={{}}
    >
      {geojson.map((marker) => (
        <Marker
          key={marker.idMarker}
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="bottom"
        >
          <img src={redIconMarker} alt="icon-alert" />
        </Marker>
      ))}
      <IconButton
        aria-label="alert button"
        component="label"
        onClick={handleClickAlert}
      >
        <img
          alt="Bell-alert"
          src={notificacion}
          className="panic-button"
          style={{
            backgroundColor: "yellow",
            borderRadius: "50%",
            position: "absolute",
            marginTop: "147vh",
            height: "50px",
            left: "80vw",
            zIndex: 1,
          }}
        />
      </IconButton>
    </Map>
  );
};

export default MapViewer;
