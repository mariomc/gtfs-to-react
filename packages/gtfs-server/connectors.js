import Route from "gtfs/models/gtfs/route";
import Shape from "gtfs/models/gtfs/shape";
import stop from "gtfs/models/gtfs/stop";

import gtfs from "gtfs";

export class Routes {
  constructor() {
    this.connector = Route;
  }
  async getAllRoutes(params = {}) {
    const routes = await gtfs.getRoutes(params);
    return routes;
  }
  async findRoute(params = {}) {
    const routes = await gtfs.getRoutes(params);
    return routes[0];
  }
}

export class Stops {
  constructor() {
    this.connector = stop;
  }
  async findStops(params = {}) {
    const stops = await this.connector.find(params);
    return stops;
  }
}

export class Stop {
  constructor() {
    this.connector = stop;
  }
  async getStop(params = {}) {
    const stops = await this.connector.findOne(params);
    return stops;
  }
  async getTimes(params = {}) {
    const times = await gtfs.getStoptimes(params);
    return times;
  }
  async getTrips(params = {}) {
    const times = await gtfs.getTrips(params);
    return times;
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

export default { Routes, Shapes, Stop, Stops };
