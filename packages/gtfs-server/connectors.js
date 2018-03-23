const Route = require('gtfs/models/gtfs/route');
const Shape = require('gtfs/models/gtfs/shape');

class Routes {
  async getAllRoutes(params = {}) {
    const routes = await Route.find(params);
    return routes;
  }
  async findRoute(params = {}) {
    const routes = await Route.findOne(params);
    return routes;
  }
}

class Shapes {
  async findShapes(params = {}) {
    const shapes = await Shape.find(params);
    return shapes;
  }
}


module.exports = { Routes, Shapes };
