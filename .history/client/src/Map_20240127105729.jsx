import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import your marker images
import markerImg1 from "./assets/markers/m1.svg";
import markerImg2 from "./assets/markers/m2.svg";
import castle from './assets/markers/castle.svg'
import balloon from './assets/markers/balloon.svg'
import duck from './assets/markers/duck.svg'
import magic from './assets/markers/magic.svg'
import stall from './assets/markers/stall.svg'
import castle from './assets/markers/castle.svg'





const Map = () => {
  const mapCenter = [48.8701459, 2.7739347];
  const rectangleBounds = [
    [48.87039, 2.77112],
    [48.87428, 2.78101],
  ];

  const markers = [
    { id: 1, position: [48.871, 2.772], imgSrc: markerImg1, content: "Marker 1 Content" },
    { id: 2, position: [48.872, 2.775], imgSrc: markerImg2, content: "Marker 2 Content" },
    // Add more markers as needed
  ];

  const maxBounds = rectangleBounds;

  return (
    <MapContainer
      center={mapCenter}
      zoom={20}
      style={{ height: "90vh", width: "100%" }}
      maxBounds={maxBounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        attribution="https://www.openstreetmap.org/?mlat=48.8598&mlon=2.7617#map=13/48.8598/2.7617"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Render Markers with Popups */}
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} icon={L.icon({ iconUrl: marker.imgSrc, iconSize: [50, 50] })}>
          <Popup>{marker.content}</Popup>
        </Marker>
      ))}

      {/* Add a Rectangle to create a border around the map area */}
    </MapContainer>
  );
};

export default Map;
