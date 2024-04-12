import axios from 'axios'

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
})
// 请求拦截器
httpInstance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)
// 响应拦截器
httpInstance.interceptors.response.use(
  res => res.data,
  e => {
    ElMessage({
      type: 'error',
      message: e.response.data.msg,
    })
    return Promise.reject(e)
  },
)
export default httpInstance
