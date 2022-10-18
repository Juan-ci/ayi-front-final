import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import AppRoutes from "./components/AppRoutes";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { SWRConfig } from "swr";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

function App() {  
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SWRConfig
          value={{
            fetcher: (...args) => fetch(...args).then((res) => res.json()),
          }}
        >
          <AppRoutes />
        </SWRConfig>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
