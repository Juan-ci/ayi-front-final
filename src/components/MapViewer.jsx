import React, { useRef } from "react";
import { IconButton } from "@mui/material";
import notificacion from "../static/img/notificacion.png";
import { getUserGeolocation, deleteMarkerById } from "../utils/markerService";
import Map, { Marker, Popup } from "react-map-gl";
import useSWR from "swr";
import MAPBOX_API_KEY from "../apikey";

const MapViewer = () => {
  const mapDiv = useRef(null);
  const getAllUrl = "https://panic-button.herokuapp.com/marker/getAllMarkers";
  const { data, error } = useSWR(getAllUrl);

  const geojson = data && !error ? data : [];

  const handleClickAlert = async (event) => {
    event.preventDefault();

    getUserGeolocation();
  };

  const handleOnClosePopUp = (event) => {
    deleteMarkerById(event.target.options.id);
  }

  return (
    <Map
      mapboxAccessToken={MAPBOX_API_KEY}
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
      {geojson?.map((marker) => (
          <Marker
            key={marker.idMarker}
            longitude={marker.longitude}
            latitude={marker.latitude}
            anchor="center"
            scale={2}
          >
            <Popup
                key={marker.idMarker}
                id={marker.idMarker}
                longitude={marker.longitude}
                latitude={marker.latitude}
                anchor="bottom"
                maxWidth='100px'
                onClose={handleOnClosePopUp}
                closeOnClick={false}
              >
                {marker.longitude} {marker.latitude}
              </Popup>
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
