const resolveFunctions = {
  RootQuery: {
    route(_, params, ctx) {
      const routes = new ctx.models.Routes();
      return routes.findRoute(params);
    },
    routes(_, props, ctx) {
      const routes = new ctx.models.Routes();
      return routes.getAllRoutes();
    },
    stops(_, props, ctx) {
      const stops = new ctx.models.Stops();
      return stops.findStops(props);
    },
    shapes(_, props, ctx) {
      const shapes = new ctx.models.Shapes();
      return shapes.findShapes(props);
    }
  }
};

export default resolveFunctions;
