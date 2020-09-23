const getters = {
  token: state => state.user.token,
  roles: state => state.user.info.roles || [],
  permission_routes: state => state.permission.routes
}
export default getters
