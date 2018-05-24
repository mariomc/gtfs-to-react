import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Stops from "../components/Stops";

const GET_STOPS = gql`
  query Stops {
    stops {
      stop_id
      stop_name
      stop_lon
      stop_lat
    }
  }
`;
class StopsContainer extends React.Component {
  state = { searchQuery: "", activeItem: null };

  onSearch = query => {
    this.setState({ searchQuery: query });
  };
  onHover = stop => {
    this.setState({ activeItem: stop });
  };

  render() {
    return (
      <Query asyncMode query={GET_STOPS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <Stops
              onHover={this.onHover}
              stops={data.stops}
              onSearch={this.onSearch}
              searchQuery={this.state.searchQuery}
              activeItem={this.state.activeItem}
            />
          );
        }}
      </Query>
    );
  }
}

export default StopsContainer;
