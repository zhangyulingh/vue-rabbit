import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/api/layout'

export const useCategoryStore = defineStore('category', () => {
  const cagoryList = ref([])
  const getCategoryList = async () => {
    const res = await getCategoryAPI()
    cagoryList.value = res.result
  }
  return {
    cagoryList,
    getCategoryList,
  }
})
