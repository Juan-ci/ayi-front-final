import React, { useEffect, useState } from 'react';
import MapViewer from '../components/MapViewer';
import { getGeolocation } from '../utils/getGeolocation';

const initial_geolocation = {
    longitude: null,
    latitude: null
}

const Home = () => {
    const [geolocation, setGeolocation] = useState(initial_geolocation);

    useEffect(() => {
        (async () => 
            {
                await getGeolocation()
                    .then(coords => {
                            
                            let location = {
                                longitude: coords.longitude,
                                latitude: coords.latitude
                            }
                            setGeolocation(location);
                    });
            }
        )();
    }, []);

  return (
    <>
        {
            geolocation.latitude !== undefined && geolocation.longitude !== undefined? 
            (<MapViewer latitude={ geolocation.latitude } longitude={ geolocation.longitude}/>) 
            : 
            (<div>No Hay location para mostrar</div>)
        }
    </>
  )
}

export default Home