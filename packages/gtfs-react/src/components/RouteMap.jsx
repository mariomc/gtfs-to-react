import React from 'react';
import { Map, Marker, TileLayer, Polyline } from 'react-leaflet';

const RouteMap = ({ shapes }) => {
  const positions = shapes.map( shape => [shape.shape_pt_lat, shape.shape_pt_lon]);
  return <Map center={positions[0]} zoom={14} style={{ height: 400 }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />

    {
      shapes.map( (shape) => (<Marker key={shape.shape_pt_sequence} position={[shape.shape_pt_lat, shape.shape_pt_lon]} />))
    }
    <Polyline positions={ positions } />
  </Map>;
}

export default RouteMap;
