import React, { Component } from 'react';
import gql from 'graphql-tag'
import { Query } from 'react-apollo';

import Route from '../components/Route';

const GET_ROUTE = gql`query Route($id: String!) {
  route(route_id: $id) {
    route_id
    route_long_name
  }
}`;

const RouteContainer = ({ match: { params: { id }} }) => {
  return (<Query query={GET_ROUTE} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <Route route={data.route} />
      );
    }}
  </Query>)
};

export default RouteContainer;
