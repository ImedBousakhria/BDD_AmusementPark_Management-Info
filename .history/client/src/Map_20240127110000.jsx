import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import your marker images
import markerImg1 from "./assets/markers/m1.svg";
import markerImg2 from "./assets/markers/m2.svg";
import castle from "./assets/markers/castle.svg";
import balloon from "./assets/markers/balloon.svg";
import duck from "./assets/markers/duck.svg";
import magic from "./assets/markers/magic.svg";
import stall from "./assets/markers/stall.svg";
import game from "./assets/markers/game.svg";

const Map = () => {
  const mapCenter = [48.8701459, 2.7739347];
  const rectangleBounds = [
    [48.87039, 2.77112],
    [48.87428, 2.78101],
  ];

  const markers = [
    { id: 1, position: [48.871, 2.772], imgSrc: markerImg1, content: "This is Marker 1. It represents something important." },
    { id: 2, position: [48.872, 2.775], imgSrc: markerImg2, content: "This is Marker 2. It signifies a significant location." },
    { id: 3, position: [48.873, 2.776], imgSrc: castle, content: "The Castle Marker indicates the location of a historic castle." },
    { id: 4, position: [48.874, 2.774], imgSrc: balloon, content: "The Balloon Marker denotes a popular hot air balloon ride spot." },
    { id: 5, position: [48.872, 2.777], imgSrc: duck, content: "The Duck Marker represents a scenic duck pond." },
    { id: 6, position: [48.871, 2.779], imgSrc: magic, content: "The Magic Marker highlights an enchanted forest area." },
    { id: 7, position: [48.873, 2.780], imgSrc: stall, content: "The Stall Marker indicates a bustling market stall." },
    { id: 8, position: [48.872, 2.778], imgSrc: game, content: "The Game Marker represents an exciting gaming arcade." },
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
        <Marker key={marker.id} position={marker.position} icon={L.icon({ iconUrl: marker.imgSrc, iconSize: [70, 70] })}>
          <Popup>{marker.content}</Popup>
        </Marker>
      ))}

      {/* Add a Rectangle to create a border around the map area */}
    </MapContainer>
  );
};

export default Map;
