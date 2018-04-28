import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import List from "antd/lib/list";
import {Row, Col} from "antd";

import RouteMap from "../components/RouteMap";

const route = {
  route_id: PropTypes.string,
  route_long_name: PropTypes.string
};

const Routes = ({ routes, shapes, onHover, activeItem }) => {

  const Route = ({ route_id, route_long_name }) => (
    <List.Item>
      <Link to={`/routes/${route_id}`} onMouseOver={() => onHover(route_id)}>{route_long_name}</Link>
    </List.Item>
  );

  Route.propTypes = route;

  return (
    <Fragment>
      <h3>Routes</h3>
      <Row>
        <Col span={6}><List dataSource={routes} renderItem={Route} bordered/></Col>
        <Col span={12}><RouteMap shapes={shapes.filter((element) => element.shape_id === activeItem)} /></Col>
      </Row>
    </Fragment>
  );
} 

Routes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      route_id: PropTypes.string,
      route_long_name: PropTypes.string
    })
  ),
  shapes: PropTypes.arrayOf(
    PropTypes.shape({
      shape_id: PropTypes.string,
      shape_pt_lat: PropTypes.number,
      shape_pt_lon: PropTypes.number
    })
  ),
  onHover: PropTypes.func,
  activeItem: PropTypes.string
};

export default Routes;
