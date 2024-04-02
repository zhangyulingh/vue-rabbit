import httpInstance from '@/utils/http'

/**
 * @description: 获取分类数据
 * @param {*} id 分类id
 * @return {*}
 */
export const getCategoryAPI = (id: any): any => {
  return httpInstance({
    url: '/category',
    params: {
      id,
    },
  })
}
