import React from "react";
import PropTypes from "prop-types";
import { Map, Marker, TileLayer, Polyline, Popup } from "react-leaflet";

const RouteMap = ({ shapes, style = {} }) => {
  const positions = shapes.map(shape => [
    shape.shape_pt_lat,
    shape.shape_pt_lon
  ]);

  const bounds = positions.length ? { bounds: positions } : {};
  return (
    <Map center={positions[0] || [38.740872, -9.105669]} zoom={14} style={{ height: 400, ...style }} {...bounds}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />

      {shapes.map(shape => (
        <Marker
          key={shape.shape_pt_sequence}
          position={[shape.shape_pt_lat, shape.shape_pt_lon]}
        >
            <Popup>
              <div>Hello</div>
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
  )
};

export default RouteMap;
