let bodyMarker = {
  name: "For",
  lastname: "Popups",
  longitude: 0.0,
  latitude: 0.0,
};

const BASE_URL = "https://panic-button.herokuapp.com/marker";

export const getUserGeolocation = async () => {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      //coords
      bodyMarker.longitude = coords.longitude;
      bodyMarker.latitude = coords.latitude;

      console.log(
        "Longitude " + bodyMarker.longitude + " Latitude " + bodyMarker.latitude
      );

      fetch(BASE_URL + "/createMarker", {
        method: "POST",
        body: JSON.stringify(bodyMarker),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log("Marker creado " + data));
    },
    (error) => {
      alert("No se pudo obtener la geolocalización.");
      console.log(error);
    }
  );
};

export const deleteMarkerById = async (idMarker) => {
  console.log("ID MARKER " + idMarker);

  fetch(BASE_URL + "/deleteMarkerById/" + idMarker, {
    method: "DELETE"
  })
    .then((res) => {
      if(res.status === 204) {
        alert("MARKER " + idMarker + " DELETED SUCCESSFULLY")
      }
    });
};
