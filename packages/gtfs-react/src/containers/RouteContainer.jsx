import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Route from "../components/Route";
import RouteMap from "../components/RouteMap";

const GET_ROUTE = gql`
  query Route($id: String!) {
    route(route_id: $id) {
      route_id
      route_long_name
    }
    stops(route_id: $id) {
      stop_id
      stop_name
      stop_lat
      stop_lon
    }
    shapes(shape_id: $id) {
      shape_pt_sequence
      shape_pt_lat
      shape_pt_lon
    }
  }
`;

const RouteContainer = ({ match: { params: { id } } }) => {
  return (
    <Query asyncMode query={GET_ROUTE} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return (
          <Fragment>
            <RouteMap shapes={data.shapes} stops={data.stops} />
            <Route route={data.route} stops={data.stops} />
          </Fragment>
        );
      }}
    </Query>
  );
};

RouteContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default RouteContainer;
