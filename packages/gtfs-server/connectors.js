import Route from "gtfs/models/gtfs/route";
import Shape from "gtfs/models/gtfs/shape";
import Stop from "gtfs/models/gtfs/stop";

export class Routes {
  constructor() {
    this.connector = Route;
  }
  async getAllRoutes(params = {}) {
    const routes = await this.connector.find(params);
    return routes;
  }
  async findRoute(params = {}) {
    const routes = await this.connector.findOne(params);
    return routes;
  }
}

export class Stops {
  constructor() {
    this.connector = Stop;
  }
  async findStops(params = {}) {
    const stops = await this.connector.find(params);
    return stops;
  }
}

export class Shapes {
  constructor() {
    this.connector = Shape;
  }
  async findShapes(params = {}) {
    const shapes = await this.connector
      .find(params)
      .sort({ shape_pt_sequence: 1 });
    return shapes;
  }
}

export default { Routes, Shapes, Stops };
