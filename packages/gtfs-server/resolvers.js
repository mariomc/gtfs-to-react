const resolveFunctions = {
  RootQuery: {
    route(_, params, ctx) {
      const routes = new ctx.constructor.Routes();
      return routes.findRoute(params);
    },
    routes(_, props, ctx) {
      const routes = new ctx.constructor.Routes();
      return routes.getAllRoutes();
    },
    shapes(_, props, ctx) {
      const shapes = new ctx.constructor.Shapes();
      return shapes.findShapes(props);
    }
  },
};

module.exports = resolveFunctions;
