//import { addMarkers } from "./markerSlice";

let bodyMarker = {
  name: "For",
  lastname: "Popups",
  longitude: 0.0,
  latitude: 0.0,
};

export const getUserGeolocation = () => {
  return async (dispatch /* getState*/) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        //coords
        bodyMarker.longitude = coords.longitude;
        bodyMarker.latitude = coords.latitude;

        fetch("http://localhost:8080/marker/createMarker", {
          method: "POST",
          body: JSON.stringify(bodyMarker),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => console.log("Marker creado " + data));

        //dispatch( addMarkers( bodyMarker ) )
      },
      (error) => {
        alert("No se pudo obtener la geolocalización.");
        console.log(error);
      }
    );
  };
};
