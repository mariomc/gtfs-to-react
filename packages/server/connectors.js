const gtfs = require('gtfs');

class Routes {
  async getAllRoutes(params = {agency_key: 'carris'}) {
    const routes = await gtfs.getRoutes(params);
    return routes;
  }
  async findRoute(params = {}) {
    const routes = await gtfs.getRoutes(params);
    if ( routes.length ) {
      return routes[0];
    }
    return routes;
  }
}


module.exports = { Routes };