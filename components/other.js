import { useState } from "react";
import ReactMapGL from "react-map-gl";

function Other() {
    const [viewport, setViewPort ] = useState({
        width: "100%",
        height: "100%",
        latitude: 45.2,
        longitude: -75.6,
        zoom: 2
      })

  return (
    <ReactMapGL
    initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 11
      }}
      style={{width: "100%", height: "100%"}}
      mapStyle="mapbox://styles/ilman3/cl01jlwjq016h14p859zw1wk1"
      mapboxAccessToken={
        "pk.eyJ1IjoiaWxtYW4zIiwiYSI6ImNsMDg4dWUxbjAxN2IzaW4wdHR3Z3p5c2YifQ.pw3iiQ8llM31zI269iItvw"
      }
    />
  );
}
export default Other;
