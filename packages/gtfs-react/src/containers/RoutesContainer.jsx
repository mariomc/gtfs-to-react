import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Routes from "../components/Routes";

const GET_ROUTES = gql`
  query Routes {
    routes {
      route_id
      route_long_name
    }
  }
`;

const RoutesContainer = () => (
  <Query query={GET_ROUTES}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return <Routes routes={data.routes} />;
    }}
  </Query>
);

export default RoutesContainer;
