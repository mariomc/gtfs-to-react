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
    shapes {
      shape_id
      shape_pt_sequence
      shape_pt_lat
      shape_pt_lon
    }
  }
`;

class RoutesContainer extends React.Component {
  state = {};
  onHover = (id) => {
    this.setState({hoveredItem: id});
  }

  render() {
    return <Query query={GET_ROUTES}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return <Routes routes={data.routes} shapes={data.shapes} onHover={this.onHover} activeItem={this.state.hoveredItem} />;
      }}
    </Query>
  }
}

  export default RoutesContainer;
