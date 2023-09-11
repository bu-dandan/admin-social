import { access_token, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ID_NAME: (state, idName) => {
    state.idName = idName
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USER_LIST: (state, userList) => {
    state.userList = userList
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      // access_token({ username: username.trim(), password: password }).then(response => {
      commit('SET_TOKEN', userInfo.access_token)
      setToken(userInfo.access_token)
      resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    })
  },

  setUserInfo({ commit, state }, userInfo) {
    return new Promise((resolve, reject) => {
      commit('SET_USER_INFO', userInfo)
      resolve()
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response
        if (!data) {
          return reject('Verification failed, please Login again.')
        }
        const { name, avatar } = data
        commit('SET_ID_NAME', response.request_id)
        commit('SET_USER_LIST', response.data.list)
        // Cookies.get('userInfo') ? '' : Cookies.set('userInfo', response.data.list[0])

        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      // logout(state.token).then(() => {
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      resolve()
      //   }).catch(error => {
      //     reject(error)
      //   })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

