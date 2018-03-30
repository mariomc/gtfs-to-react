import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import List from "antd/lib/list";

const Route = ({ route_id, route_long_name }) => (
  <List.Item>
    <Link to={`/routes/${route_id}`}>{route_long_name}</Link>
  </List.Item>
);

Route.propTypes = {
  route_id: PropTypes.string,
  route_long_name: PropTypes.string
};

const Routes = ({ routes }) => (
  <Fragment>
    <h3>Routes</h3>
    <List dataSource={routes} renderItem={Route} bordered />
  </Fragment>
);

Routes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      route_id: PropTypes.string,
      route_long_name: PropTypes.string
    })
  )
};

export default Routes;
