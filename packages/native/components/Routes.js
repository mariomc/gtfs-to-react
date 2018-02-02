import React, { Component } from 'react';
import { List, ListItem, Avatar } from 'react-native-elements';

const Routes = ({ routes }) => {
  if (!routes) {
    return null;
  }
  return <List>
    {
      routes.map((route) => (
        <ListItem
          key={route.route_id}
          title={route.route_long_name}
        />
      ))
    }
  </List>
}

export default Routes;