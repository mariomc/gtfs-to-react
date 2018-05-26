import gtfs from "gtfs";
import stop from "gtfs/models/gtfs/stop";
import Shape from "gtfs/models/gtfs/shape";

import config from "./config.json";

const resolveFunctions = {
  RootQuery: {
    async route(_, params) {
      const routes = await gtfs.getRoutes(params);
      return routes[0];
    },
    routes(_, params) {
      return gtfs.getRoutes(params);
    },
    stops(_, props) {
      const params = { agency_key: config.agency_key, ...props };
      return gtfs.getStops(params);
    },
    stop(_, params) {
      return stop.findOne(params);
    },
    stopTimes(_, props) {
      const params = {
        agency_key: config.agency_key,
        ...props
      };
      return gtfs.getStoptimes(params, undefined, {
        $sort: { arrival_time: 1, stop_sequence: 1 }
      });
    },
    getStopTrips(_, params) {
      return gtfs.getTrips(params);
    },
    shapes(_, params) {
      const shapes = Shape.find(params).sort({ shape_pt_sequence: 1 });
      return shapes;
    }
  }
};

export default resolveFunctions;
