import React, { Fragment } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { Link } from "react-router-dom";
import List from "antd/lib/list";
import Search from "antd/lib/input/Search";
import Spin from "antd/lib/spin";

import { Row, Col } from "antd";

import RouteMap from "../components/RouteMap";

const route = {
  route_id: PropTypes.string,
  route_long_name: PropTypes.string
};

const Routes = ({
  routes,
  shapes,
  stops,
  onHover,
  loading,
  activeItem,
  onSearch,
  searchQuery
}) => {
  if( !routes ) return null;
  const Route = ({ route_id, route_long_name }) => (
    <List.Item className={cx({'active-route': activeItem && activeItem == route_id})}>
      <Link to={`/routes/${route_id}`} onMouseOver={() => onHover(route_id)}>
        {route_long_name}
      </Link>
    </List.Item>
  );

  Route.propTypes = route;

  return (
    <Fragment>
      <Row>
        <Col span={6} style={{ height: "100vh", overflow: "scroll" }}>
          <Search
            placeholder="Search"
            onChange={ev => {
              onSearch(ev.target.value);
            }}
          />
          <List
            style={{ height: "100%" }}
            dataSource={routes.filter(
              route => route.route_long_name.indexOf(searchQuery) > -1
            )}
            renderItem={Route}
            bordered
          />
        </Col>
        <Col span={18}>
          <Spin spinning={loading}>
            <RouteMap
              style={{ height: "100vh" }}
              stops={stops}
              shapes={shapes.filter(element => element.shape_id === activeItem)}
            />
        </Spin>
        </Col>
      </Row>
    </Fragment>
  );
};

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
