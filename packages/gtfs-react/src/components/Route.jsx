import React, { Fragment } from "react";
import PropTypes from "prop-types";
import List from "antd/lib/list";

const RenderStop = ({stop_id, stop_name}) => {
  return <List.Item>{stop_id} - {stop_name}</List.Item>;
};

RenderStop.propTypes = {
  stop_id: PropTypes.string,
  stop_name: PropTypes.string,
  stop_lat: PropTypes.number,
  stop_lon: PropTypes.number
};

const Route = ({ route, stops }) => {
  return <Fragment>
    <h1>Stops for {route.route_long_name}:</h1>
    <List dataSource={ stops } renderItem={RenderStop} bordered />
  </Fragment>;
};

Route.propTypes = {
  route: PropTypes.shape({
    route_long_name: PropTypes.string
  }),
  stops: PropTypes.arrayOf(
    PropTypes.shape(RenderStop.propTypes)
  )
};

export default Route;
