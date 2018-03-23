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

type RootQuery {
  route(route_id: String): Route
  routes: [Route]
  shapes(shape_id: String): [Shape]
}
schema {
  query: RootQuery
}
`;

module.exports = [typeDefinitions];
