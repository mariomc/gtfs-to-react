import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import List from 'antd/lib/list';

const Stop = ({ stop_id, stop_name }) => (
  <List.Item>
    <Link to={`/stops/${stop_id}`}>{stop_id} - {stop_name}</Link>
  </List.Item>
)

const Stops = ({ stops }) => (
  <Fragment>
    <h3>Stops</h3>
    <List dataSource={stops} renderItem={Stop} bordered />
  </Fragment>
);

export default Stops;
