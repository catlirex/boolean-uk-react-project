import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";

export default function ToFromMap() {
  const polyline = [
    [51.50741, -0.14313],
    [51.55681, -0.27965],
  ];

  return (
    <MapContainer
      center={[
        (polyline[0][0] + polyline[1][0]) / 2,
        (polyline[0][1] + polyline[1][1]) / 2,
      ]}
      zoom={12}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={polyline[0]}>
        <Popup>1 Mayfair Place</Popup>
      </Marker>
      <Marker position={polyline[1]}>
        <Popup>
          <b>specified point, Wembley Park</b>
        </Popup>
      </Marker>
      <Polyline positions={polyline} />
    </MapContainer>
  );
}
