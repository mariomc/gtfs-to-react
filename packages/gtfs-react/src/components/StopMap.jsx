import React from "react";
import PropTypes from "prop-types";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";

const StopMap = ({ style = {}, stop }) => {
  if (!stop) return null;
  const position =[stop.stop_lat, stop.stop_lon];
  return (
    <Map
      center={position || [38.7487, -9.1544]}
      zoom={14}
      style={{ height: 400, ...style }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />

        <Marker position={[stop.stop_lat, stop.stop_lon]}>
          <Popup>
            {/* <Link to={`/stops/${stop.stop_id}`}> */}
            <div>
              {stop.stop_name}
            </div>
            {/* </Link> */}
          </Popup>
        </Marker>
    </Map>
  );
};

StopMap.propTypes = {
  style: PropTypes.object,
  shapes: PropTypes.arrayOf(
    PropTypes.shape({
      shape_pt_lat: PropTypes.number,
      shape_pt_lon: PropTypes.number
    })
  ),
  stop: PropTypes.shape({
      stop_id: PropTypes.string,
      stop_name: PropTypes.string,
      stop_lat: PropTypes.number,
      stop_lon: PropTypes.number
    })
};

export default StopMap;
