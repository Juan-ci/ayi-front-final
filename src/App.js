import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { SWRConfig } from "swr";
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

function App() {  
  
  return (
      <BrowserRouter>
        <SWRConfig
          value={{
            fetcher: (...args) => fetch(...args).then((res) => res.json()),
          }}
        >
          <AppRoutes />
        </SWRConfig>
      </BrowserRouter>
  );
}

export default App;
