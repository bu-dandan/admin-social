const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  idName: state => state.user.idName,
  name: state => state.user.name,
  userList: state => state.user.userList,
  userInfo: state => state.user.userInfo
}
export default getters
