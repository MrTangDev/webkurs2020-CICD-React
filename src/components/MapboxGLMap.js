import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Menu from "./Menu";
import data from "../map.geojson"

const styles = {
  width: "100%",
  height: "calc(100vh - 80px)",
  position: "absolute"
};


const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const [layerId, setLayerId] = useState("streets-v11");
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: `mapbox://styles/mapbox/${layerId}`, // stylesheet location
        center: [10.408773, 63.422091],
        zoom: 11
      });

      map.on("load", () => {
        map.loadImage(
          'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
          function (error, image) {
            if (error) throw error;
            map.addImage('custom-marker', image);
            // Add a GeoJSON source with 2 points
            map.addSource('points', {
              'type': 'geojson',
              'data': data
            });

            // Add a symbol layer
            map.addLayer({
              'id': 'points',
              'type': 'symbol',
              'source': 'points',
              'layout': {
                'icon-image': 'custom-marker',
                // get the title name from the source's "title" property
                'text-field': ['get', 'title'],
                'text-font': [
                  'Open Sans Semibold',
                  'Arial Unicode MS Bold'
                ],
                'text-offset': [0, 1.25],
                'text-anchor': 'top'
              }
            });
          }
        );
        setMap(map);
        map.resize();

      });
    }

    if (!map) initializeMap({ setMap, mapContainer });
    if (map) map.setStyle("mapbox://styles/mapbox/" + layerId);
  }, [layerId, map]);


  return (
    <div>
      {/*<Menu setLayerId={setLayerId} layerId={layerId} /> Menyen liker ikke markers :( */}
      <div ref={el => (mapContainer.current = el)} style={styles} />
    </div>
  );
};

export default MapboxGLMap;