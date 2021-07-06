import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";
import useStore from "../store";
import { setZoomScale } from "../helperFunction";

export default function ToFromMap() {
  const searchResult = useStore((state) => state.searchResult);
  const [firstCoordinate, setFirstCoordinate] = useState(null);
  const [lastCoordinate, setLastCoordinate] = useState(null);

  useEffect(() => {
    if (searchResult.length === 0) return;

    setFirstCoordinate(searchResult[0].route_parts[0].coordinates[0]);
    let routeLength = searchResult[0].route_parts.length;
    let coordinatesLength =
      searchResult[0].route_parts[routeLength - 1].coordinates.length;
    setLastCoordinate(
      searchResult[0].route_parts[routeLength - 1].coordinates[
        coordinatesLength - 1
      ]
    );
  }, [searchResult]);

  if (searchResult.length === 0 || !firstCoordinate) return <h1>Loading...</h1>;
  const polyline = [firstCoordinate, lastCoordinate];

  return (
    <MapContainer
      center={[
        (polyline[0][0] + polyline[1][0]) / 2,
        (polyline[0][1] + polyline[1][1]) / 2,
      ]}
      zoom={setZoomScale(searchResult[0].duration)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={polyline[0]}>
        <Popup>{searchResult[0].route_parts[0].from_point_name}</Popup>
      </Marker>
      <Marker position={polyline[1]}>
        <Popup>
          {
            searchResult[0].route_parts[searchResult[0].route_parts.length - 1]
              .to_point_name
          }
        </Popup>
      </Marker>
      <Polyline positions={polyline} />
    </MapContainer>
  );
}
