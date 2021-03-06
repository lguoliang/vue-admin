// user
import { getToken, setToken, removeToken } from '@utils/auth'
import { login, getInfo } from '@api'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  info: {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token)
  },
  SET_USERINFO: (state, info) => {
    state.info = info
  }
}

const actions = {
  // user login
  login({ commit }, payload) {
    const { username, password } = payload
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password }).then(response => {
        const token = response.data
        commit('SET_TOKEN', token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(res => {
        const { data } = res
        if (!data) reject('Verification failed, please Login again.')

        const { roles } = data
        if (!roles || roles.length <= 0) reject('getInfo: 角色必须是非空数组!')

        commit('SET_USERINFO', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit }) {
    commit('SET_USERINFO', '')
    removeToken()
    resetRouter()
  },

  // remove token
  resetToken() {
    removeToken()
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // TODO: reset visited views and cached views
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
