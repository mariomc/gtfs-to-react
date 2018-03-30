import React from "react";
import PropTypes from "prop-types";

const Route = ({ route }) => {
  return <h1>{route.route_long_name}</h1>;
};

Route.propTypes = {
  route: PropTypes.shape({
    route_long_name: PropTypes.string
  })
};

export default Route;
