import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import List from "antd/lib/list";

const Stop = ({ stop_id, stop_name }) => (
  <List.Item>
    <Link to={`/stops/${stop_id}`}>
      {stop_id} - {stop_name}
    </Link>
  </List.Item>
);

Stop.propTypes = {
  stop_id: PropTypes.string,
  stop_name: PropTypes.string
};

const Stops = ({ stops }) => (
  <Fragment>
    <h3>Stops</h3>
    <List dataSource={stops} renderItem={Stop} bordered />
  </Fragment>
);

Stops.propTypes = {
  stops: PropTypes.arrayOf(
    PropTypes.shape({
      stop_id: PropTypes.string,
      stop_name: PropTypes.string
    })
  )
};

export default Stops;
