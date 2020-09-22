import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: '',
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // config.headers['token']
    return config
  },
  error => {
    console.log(error)
    return Promise.reject()
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    } else {
      Promise.reject()
    }
  },
  error => {
    console.log(error)
    return Promise.reject()
  }
)

export default service
