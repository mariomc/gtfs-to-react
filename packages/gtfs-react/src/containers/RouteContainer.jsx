import React from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Spin from "antd/lib/spin";
import RouteTable from "../components/RouteTable";
import StopsMap from "../components/StopsMap";

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
      shape_pt_lat
      shape_pt_lon
      shape_pt_sequence
    }
    stopTimes(route_id: $id) {
      trip_id
      arrival_time
      stop_id
      stop_sequence
    }
  }
`;

const RouteContainer = ({ match: { params: { id } } }) => {
  return (
    <Query query={GET_ROUTE} variables={{ id }}>
      {({ loading, error, data }) => {
        if (error) return `Error! ${error.message}`;

        return (
          <Spin spinning={loading} style={{minHeight: '100vh'}}>
            <StopsMap stops={data.stops} shapes={data.shapes} />
            <RouteTable
              route={data.route}
              stops={data.stops}
              timetable={data.stopTimes}
            />
          </Spin>
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
