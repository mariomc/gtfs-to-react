const Route = require('gtfs/models/gtfs/route');
const Shape = require('gtfs/models/gtfs/shape');
const Stop = require('gtfs/models/gtfs/stop');

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

class Stops {
  async findStops(params = {}) {
    const stops = await Stop.find(params);
    return stops;
  }
}

class Shapes {
  async findShapes(params = {}) {
    const shapes = await Shape.find(params).sort({ 'shape_pt_sequence' : 1 });
    return shapes;
  }
}


module.exports = { Routes, Shapes, Stops };
