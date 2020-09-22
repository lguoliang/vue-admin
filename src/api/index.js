import request from './request'

// api
const api = {
  test: '/api/test',
  user: {
    login: '/user/login', // 登录
    getInfo: '/user/info' // 获取用户信息
  }
}

// test
export const test = () => {
  return request({ url: api.test })
}

// 登录
export const login = (data) => {
  return request({
    url: api.user.login,
    method: 'post',
    data
  })
}

// 获取用户信息
export const getInfo = (token) => {
  return request({
    url: api.user.getInfo,
    method: 'get',
    params: { token }
  })
}

// 获取用户信息
export const logout = (token) => {
  return request({
    url: api.user.getInfo,
    method: 'get',
    params: { token }
  })
}

export default {
  test
}
