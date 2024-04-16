import axios from 'axios'
import { useUserStore } from '@/stores/user'

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
})
// 请求拦截器
httpInstance.interceptors.request.use(
  config => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    Promise.reject(error)
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
