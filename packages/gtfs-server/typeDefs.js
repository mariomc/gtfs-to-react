const typeDefinitions = `
type Route {
  agency_id : String
  route_id : String
  route_short_name : String
  route_long_name : String
  route_desc : String
  route_type : Int
  route_url : String
  route_color : String
  route_text_color : String
  agency_key : String
}

type Shape {
  agency_key : String
  shape_id : String
  shape_pt_lat : Float
  shape_pt_lon : Float
  loc : [Float]
  shape_pt_sequence : Float
  shape_dist_traveled : Float
}

type Stop {
  agency_key : String
  stop_id : String
  stop_code : String
  stop_name : String
  stop_desc : String
  stop_lat : Float
  stop_lon : Float
  loc: [Float]
  zone_id : String
  stop_url: String
  location_type: Int
  parent_station: String
  stop_timezone: String
  wheelchair_boarding: Int
}

type StopTime {
  trip_id: String
  arrival_time: String,
  departure_time: String,
  stop_id: String,
  stop_sequence: Int,
  stop_headsign: String,
  agency_key: String
}

type Trip {
  route_id: String,
  service_id: String,
  trip_id: String,
  trip_headsign: String,
  block_id: String,
  shape_id: String,
  agency_key: String
}

type RootQuery {
  route(route_id: String, stop_id: String): Route
  stop(stop_id: String): Stop
  stopTimes(route_id: String): [StopTime]
  routes(route_id: String, stop_id: String): [Route]
  stops(stop_id: String, route_id: String): [Stop]
  getStopTrips(route_id: String): [Trip]
  shapes(shape_id: String): [Shape]
}
schema {
  query: RootQuery
}
`;

export default typeDefinitions;
