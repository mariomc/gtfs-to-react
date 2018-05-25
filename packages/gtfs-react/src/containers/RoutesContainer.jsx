import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Routes from "../components/Routes";

const GET_ROUTES = gql`
  query Routes($id: String!) {
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
    stops(route_id: $id) {
      stop_id
      stop_name
      stop_lat
      stop_lon
    }
  }
`;

class RoutesContainer extends React.Component {
  state = { searchQuery: "" };
  onHover = id => {
    this.setState({ hoveredItem: id });
  };
  onSearch = query => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <Query query={GET_ROUTES} variables={{ id: this.state.hoveredItem || '' }}>
        {({ loading, error, data }) => {
          if (error) return `Error! ${error.message}`;
          return (

            <Routes
              loading={loading}
              routes={data.routes}
              shapes={data.shapes}
              stops={data.stops}
              onHover={this.onHover}
              onSearch={this.onSearch}
              searchQuery={this.state.searchQuery}
              activeItem={this.state.hoveredItem}
            />
          );
        }}
      </Query>
    );
  }
}

export default RoutesContainer;
