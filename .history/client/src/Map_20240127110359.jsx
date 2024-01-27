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
    { id: 1, position: [48.871, 2.772], imgSrc: markerImg1, bgColor: "#8dc6ff", content: "Marker 1: This is a popular spot for picnics and outdoor activities." },
    { id: 2, position: [48.872, 2.775], imgSrc: markerImg2, bgColor: "#8cff8d", content: "Marker 2: This area offers stunning views of the city skyline." },
    { id: 3, position: [48.873, 2.776], imgSrc: castle, bgColor: "#ff8d8d", content: "Castle Marker: Explore the ruins of an ancient castle dating back to the 12th century." },
    { id: 4, position: [48.874, 2.774], imgSrc: balloon, bgColor: "#d98bff", content: "Balloon Marker: Experience the thrill of a hot air balloon ride with panoramic views." },
    { id: 5, position: [48.872, 2.777], imgSrc: duck, bgColor: "#ffcc80", content: "Duck Marker: Visit the tranquil duck pond and feed the ducks." },
    { id: 6, position: [48.871, 2.779], imgSrc: magic, bgColor: "#ffe080", content: "Magic Marker: Enter a magical forest filled with enchanting creatures and hidden treasures." },
    { id: 7, position: [48.873, 2.780], imgSrc: stall, bgColor: "#bf8040", content: "Stall Marker: Discover a variety of local delicacies and handmade crafts at the bustling market stalls." },
    { id: 8, position: [48.872, 2.778], imgSrc: game, bgColor: "#ff80bf", content: "Game Marker: Enjoy a thrilling adventure at the gaming arcade with state-of-the-art virtual reality experiences and classic arcade games for all ages." },
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
        <Marker key={marker.id} position={marker.position} icon={createCustomIcon(marker.bgColor, marker.imgSrc)}>
          <Popup>{marker.content}</Popup>
        </Marker>
      ))}

      {/* Add a Rectangle to create a border around the map area */}
    </MapContainer>
  );
};

// Create a custom icon with background color and image
const createCustomIcon = (bgColor, imgSrc) => {
  return L.divIcon({
    className: "custom-icon",
    iconSize: [50, 50],
    html: `<div style="background-color: ${bgColor}; width: 50px; height: 50px; border-radius: 50%; background-image: url(${imgSrc}); background-size: contain; background-repeat: no-repeat;"></div>`,
  });
};

export default Map;
