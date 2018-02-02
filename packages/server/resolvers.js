const resolveFunctions = {
  RootQuery: {
    route(_, params, ctx) {
      const routes = new ctx.constructor.Routes();
      return routes.findRoute(params);
    },
    routes(_, props, ctx) {
      const routes = new ctx.constructor.Routes();
      return routes.getAllRoutes();
    }
  },
};

module.exports = resolveFunctions;