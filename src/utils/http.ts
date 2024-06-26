import axios from 'axios'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 10000,
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
      message: e.response.data.message,
    })
    const userStore = useUserStore()
    if (e.response.status === 401) {
      userStore.clearUserInfo()
      router.push('/login')
    }
    return Promise.reject(e)
  },
)
export default httpInstance
