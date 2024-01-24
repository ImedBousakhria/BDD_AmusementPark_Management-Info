import React from "react";
import { MapContainer, TileLayer, Rectangle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const mapCenter = [48.8701459, 2.7739347];
  const rectangleBounds = [
    [48.8680, 2.75],
    [48.8758, 2.8],
  ]; // Adjust the bounds as needed

  // Calculate maxBounds to restrict the map view to the area inside the rectangle
  const maxBounds = rectangleBounds;

  return (
    <MapContainer
      center={mapCenter}
      zoom={15}
      style={{ height: "90vh", width: "100%" }}
      maxBounds={maxBounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        attribution="https://www.openstreetmap.org/?mlat=48.8598&mlon=2.7617#map=13/48.8598/2.7617"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Add a Rectangle to create a border around the map area */}
    </MapContainer>
  );
};

export default Map;
