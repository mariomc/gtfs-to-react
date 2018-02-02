import React, { Component } from 'react';
import List from 'antd/lib/list';

const Route = (item) => {
  return <List.Item>{item.route_long_name}</List.Item>;
}

const Routes = ({ routes }) => {
  return <div>
    <h3>Routes</h3>
    <List dataSource={routes} renderItem={Route} bordered />
  </div>
}

export default Routes;