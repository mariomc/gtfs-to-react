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
  location_type: Int,
  parent_station: String
  stop_timezone: String
  wheelchair_boarding: Int
}

type RootQuery {
  route(route_id: String): Route
  routes: [Route]
  stops: [Stop]
  shapes(shape_id: String): [Shape]
}
schema {
  query: RootQuery
}
`;

export default typeDefinitions;
