import React, { Fragment } from 'react';
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo';

import Route from '../components/Route';
import RouteMap from '../components/RouteMap';

const GET_ROUTE = gql`query Route($id: String!) {
  route(route_id: $id) {
    route_id
    route_long_name
  }
  shapes(shape_id: $id) {
    shape_pt_sequence
    shape_pt_lat
    shape_pt_lon
  }
}`;

const RouteContainer = ({ match: { params: { id }} }) => {
  return (<Query query={GET_ROUTE} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <Fragment>
          <RouteMap shapes={data.shapes} />
          <Route route={data.route} />
        </Fragment>
      );
    }}
  </Query>)
};

export default RouteContainer;
