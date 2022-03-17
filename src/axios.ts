// import store from '@/store'
import axios from 'axios'
import { isString, isObject, throttle } from 'lodash'
import { ElMessage as Message } from 'element-plus'
// import { getToken } from '@ly/share'
import type { ResponseData } from './apis/types'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'

const SERVER_BAS_URL: string = process.env.VUE_APP_BASE_API || ''

const http: AxiosInstance = axios.create({
  baseURL: SERVER_BAS_URL,
  timeout: 30000
})

http.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = ''
  if (token) {
    if (!config.headers) {
      config.headers = {}
    }
    config.headers['token'] = `${token}`
  }
  return config
})

const reLogin = throttle(res => {
  Message({
    message: res.msg || '登录失效，请重新登录',
    type: 'warning',
    duration: 5000
  })
  // store.dispatch('user/logout')
}, 2000)
http.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    if (res instanceof Blob) {
      return response
    }
    if (res.code.toString() === '9999') {
      reLogin(res)
      return Promise.reject(new Error(res.message || 'Error'))
    }
    if (res.code !== 0) {
      Message({
        message: res.message || 'Error',
        type: 'warning',
        duration: 5000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  (error: AxiosError<ResponseData>) => {
    if (error.response && error.response.data) {
      const data = error.response?.data || {}
      if (isString(data)) {
        error.message = data
      } else if (isObject(data)) {
        error.message = `${data.code}：${data.message}`
      }
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 5000
    })
    return Promise.reject(error)
  }
)

export default http
