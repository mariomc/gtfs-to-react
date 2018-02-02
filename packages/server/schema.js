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
type RootQuery {
  route(route_id: String): Route
  routes: [Route]
}
schema {
  query: RootQuery
}
`;

module.exports = [typeDefinitions];