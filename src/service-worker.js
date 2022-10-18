

/* eslint-disable no-restricted-globals */

// See https://developers.google.com/web/tools/workbox/modules


import { clientsClaim } from 'workbox-core';
import { precacheAndRoute  } from 'workbox-precaching';

clientsClaim();


precacheAndRoute(self.__WB_MANIFEST);


const CACHE_STATIC = 'cache-static-v1';
const CACHE_DYNAMIC = 'cache_dynamic_v1';
const CACHE_INMUTABLE = 'cache_inmutable_v1';


const APP_SHELL = [
  '/favicon.ico',
  '/',
  '/index.html',
  '/nulle.png',
  '/notificacion.png',
  '/redIconMarker.png'
];

const APP_SHELL_INMUTABLE = [
  'mapbox://styles/mapbox/streets-v11'
];


self.addEventListener('install', e => {
  const promesaStatic = caches.open( CACHE_STATIC )
                              .then(cache => 
                                    cache.addAll(APP_SHELL))
  
  const promesaInmutable = caches.open( CACHE_INMUTABLE )
                                .then(cache => 
                                  cache.addAll(APP_SHELL_INMUTABLE))

  
  e.waitUntil(Promise.all([ promesaStatic, promesaInmutable])) //que espere a terminar las dos promesas para pasar al próximo paso del ciclo de vida

  });


self.addEventListener('activate', e => {

    //en la activación limpiamos el caché de versiones viejas
    const resp = caches.keys()
                      .then(keys => { //las keys son los nombres de los caches
                        keys.forEach( key => {

                          if(key !== CACHE_STATIC && key.includes('static')) return caches.delete(key)
                        })
                      })
    e.waitUntil(resp)  //nuevamente esperamos a limpiar el caché viejo para terminar la activación
  })


