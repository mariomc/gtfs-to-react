import React, { Component } from 'react';
import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo';

import Routes from '../components/Routes';

const query = gql`query Routes {
  routes {
    route_id
    route_long_name
  }
}`;

const RoutesContainer = compose(
    graphql(query, {
      props: ({ data: { loading, error, routes } }) => {
        return { loading, error, routes };
      }
    })
)(Routes);

export default RoutesContainer;