import React from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Spin from "antd/lib/spin";
import RouteTable from "../components/RouteTable";
import StopsMap from "../components/StopsMap";

const GET_STOP = gql`
  query Stop($id: String!) {
    stop(stop_id: $id) {
      stop_id
      stop_name
      stop_lat
      stop_lon
    }
    stopTimes(stop_id: $id) {
      trip_id
      arrival_time
      stop_id
      stop_sequence
    }
  }
`;

const StopContainer = ({ match: { params: { id } } }) => {
  return (
    <Query asyncMode query={GET_STOP} variables={{ id }}>
      {({ loading, error, data }) => {
        if (error) return `Error! ${error.message}`;
        console.log(data);
        return <h1>WIP</h1>;
        return (
          <Spin spinning={loading}>
            <StopsMap stop={data.stops} />
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

StopContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};

export default StopContainer;
