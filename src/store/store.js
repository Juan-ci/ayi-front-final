import { configureStore } from "@reduxjs/toolkit";
import { markerSlice } from "./slices/markers/markerSlice";

export const store = configureStore({
    reducer: {
        markerBox: markerSlice.reducer,
    }
});