import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  //transform search results into specific object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  //langitude and longitude of center locations coordinates
  const center = getCenter(coordinates);

  return (
    <ReactMapGL
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/ilman3/cl01jlwjq016h14p859zw1wk1"
      mapboxAccessToken={
        "pk.eyJ1IjoiaWxtYW4zIiwiYSI6ImNsMDg4dWUxbjAxN2IzaW4wdHR3Z3p5c2YifQ.pw3iiQ8llM31zI269iItvw"
      }
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              
              aria-label="push-pin"
            >
              p
            </p>
          </Marker>
          {selectedLocation===result.long ? (
            <Popup closeOnClick={true}
            onClose={()=>setSelectedLocation()}
            latitude={result.lat}
            longitude={result.long}>
              {result.title}
            </Popup>
          ):(false)}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
