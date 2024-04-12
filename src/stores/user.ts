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
  },
  persist: true,
})
