import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Stops from "../components/Stops";

const GET_STOPS = gql`
  query Stops {
    stops {
      stop_id
      stop_name
    }
  }
`;

const StopsContainer = () => (
  <Query asyncMode query={GET_STOPS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return <Stops stops={data.stops} />;
    }}
  </Query>
);

export default StopsContainer;
