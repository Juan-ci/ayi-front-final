# Panic button alert

Compnonents:
    NavBar,
    AppRoutes,
    Home,
    MapViewer

La app consiste en tomar la ubicación del usuario cuando presiona la campana de alerta. En todo momento se están revalidando los datos de markers para posicionar los posibles nuevos markers.

Como mejora estaba pensado la implementación de login de usuario para obtención de datos más especificos del mismo. Posible fusión con botón de pánico de Rodrigo Egea.

El desafío estuvo centrado en el front ya que es donde no cuento con experiencia.

Herramientas integradas:
    mapboxGl:
        https://docs.mapbox.com/mapbox-gl-js/api/,

    react-map-gl:
        https://visgl.github.io/react-map-gl/docs,

    useSWR:
        https://swr.vercel.app/es-ES/examples/basic,

    reac-push-notificacion:
        https://github.com/fabioshub/react-push-notification#readme
        
Extra para probar ubicaciones distintas utilizando Google Chrome:
    1. Abrir consola en chrome y hacer click en 3 puntos
    ![3puntos](https://user-images.githubusercontent.com/57407836/197007403-9b36dede-4820-467e-a94a-e932c4b07f64.jpg)
    2. Ir a More tools y después click en Sensors
    ![sensors](https://user-images.githubusercontent.com/57407836/197007614-0e398adb-b0af-4c01-a036-99f1f2c50413.png)
    3. Elegir la ubicación que quieres agregar
    ![pickLocation](https://user-images.githubusercontent.com/57407836/197007701-d29a8cae-14ec-4a84-bc23-3afa94d3a6c2.png)

Link deploy:
    https://panic-button-20102022.netlify.app/
    
