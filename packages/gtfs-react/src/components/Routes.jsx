import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import List from 'antd/lib/list';

const Route = ({ route_id, route_long_name}) => (
  <List.Item>
    <Link to={`/routes/${route_id}`}>{route_long_name}</Link>
  </List.Item>
)

const Routes = ({ routes }) => (
  <Fragment>
    <h3>Routes</h3>
    <List dataSource={routes} renderItem={Route} bordered />
  </Fragment>
);

export default Routes;
