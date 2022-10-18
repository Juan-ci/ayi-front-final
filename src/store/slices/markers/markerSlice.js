import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Primer",
  lastname: "Popup",
  longitude: 0.0,
  latitude: 0.0
};

export const markerSlice = createSlice({
  name: "marker",
  initialState,
  reducers: {
    //UNA VEZ HECHO EL POST, AGREGAR ACÁ PARA OBTENER EL PUSH NOTIFICATION
    addMarker: (state, { payload }) => {
      state.marker = payload;
      console.log(state.marker);
    },
    //este va a ser útil?
    addMarkers: (state, { payload }) => {
      console.log("EN ADD MARKERS, PAYLOAD: " + payload);
      state.geojson.features.push(payload);
    },
  },
});

export const { addarker, addMarkers } = markerSlice.actions;
