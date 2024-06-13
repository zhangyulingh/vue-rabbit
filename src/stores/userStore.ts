import { defineStore } from 'pinia'
import { loginAPI } from '@/api/user'

interface User {
  token: string
  account: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {} as User,
  }),
  actions: {
    async getUserInfo({
      account,
      password,
    }: {
      account: string
      password: string
    }) {
      const res = await loginAPI({ account, password })
      this.userInfo = res.result as User
    },
    // 退出 清空用户信息
    clearUserInfo() {
      this.userInfo = {} as User
    },
  },
  persist: true,
})
