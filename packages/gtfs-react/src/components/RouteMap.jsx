import React from "react";
import PropTypes from "prop-types";
import { Map, Marker, TileLayer, Polyline, Popup } from "react-leaflet";

const RouteMap = ({
  stops,
  shapes = [],
  style = {}
}) => {

  const boundPoints = stops.map(stop => [
    stop.stop_lat,
    stop.stop_lon
  ]);

  const positions = shapes.map(shape => [
    shape.shape_pt_lat,
    shape.shape_pt_lon
  ]);

  const bounds = boundPoints.length ? { bounds: boundPoints } : {};
  return (
    <Map
      center={positions[0] || [38.7487, -9.1544]}
      zoom={17}
      style={{ height: 400, ...style }}
      {...bounds}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />

      {stops.map((stop, index) => (
        <Marker key={index} position={[stop.stop_lat, stop.stop_lon]}>
          <Popup>
            <div>{stop.stop_name}</div>
          </Popup>
        </Marker>
      ))}
      <Polyline positions={positions} />
    </Map>
  );
};

RouteMap.propTypes = {
  style: PropTypes.object,
  shapes: PropTypes.arrayOf(
    PropTypes.shape({
      shape_pt_lat: PropTypes.number,
      shape_pt_lon: PropTypes.number
    })
  ),
  stops: PropTypes.arrayOf(
    PropTypes.shape({
      stop_id: PropTypes.string,
      stop_name: PropTypes.string,
      stop_lat: PropTypes.number,
      stop_lon: PropTypes.number
    })
  )
};

export default RouteMap;
