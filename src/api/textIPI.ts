import httpInstance from '@/utils/http'

// 获取文章列表
export const getArticles = () => {
  return httpInstance.get('home/category/head')
}
