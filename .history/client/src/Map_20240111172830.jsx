import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    const mapBounds = [[48.86, 2.75], [48.88, 2.80]]; // Adjust the bounds as needed

  return (
    <>
      Testing interactive map
      <MapContainer center={[48.8701459, 2.7739347]} zoom={20} style={{ height: "90vh", width: "100%" }}>
        <TileLayer
          attribution="https://www.openstreetmap.org/?mlat=48.8598&mlon=2.7617#map=13/48.8598/2.7617"
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
};

export default Map;
