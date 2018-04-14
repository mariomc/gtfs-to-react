const resolveFunctions = {
  RootQuery: {
    route(_, params, ctx) {
      const routes = new ctx.models.Routes();
      return routes.findRoute(params);
    },
    routes(_, params, ctx) {
      const routes = new ctx.models.Routes();
      return routes.getAllRoutes(params);
    },
    stops(_, props, ctx) {
      const stops = new ctx.models.Stops();
      return stops.findStops(props);
    },
    stop(_, props, ctx) {
      const stop = new ctx.models.Stop();
      return stop.getStop(props);
    },
    getStopTimes(_, props, ctx) {
      const stop = new ctx.models.Stop();
      return stop.getTimes(props);
    },
    getStopTrips(_, props, ctx) {
      const stop = new ctx.models.Stop();
      return stop.getTrips(props);
    },
    shapes(_, props, ctx) {
      const shapes = new ctx.models.Shapes();
      return shapes.findShapes(props);
    }
  }
};

export default resolveFunctions;
