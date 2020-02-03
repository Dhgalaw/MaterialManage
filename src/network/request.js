import axios from 'axios'
import store from '../store/index'

const baseUrl = 'http://121.36.19.208:8003/'

export function request(config) {
  //创建axios的实例
  const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? baseUrl : '/api',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  instance.defaults.headers.common['access-token'] = store.state.token
  instance.defaults.headers.post['Content-Type'] = 'application/json'

  //发送真正的网络请求
  return instance(config)  //instance本身就是一个promise
}
