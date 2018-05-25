import React from "react";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Spin from "antd/lib/spin";
import StopTable from "../components/StopTable";
import StopMap from "../components/StopMap";

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
        return (
          <Spin spinning={loading}>
            <StopMap stop={data.stop} />
            <StopTable
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
