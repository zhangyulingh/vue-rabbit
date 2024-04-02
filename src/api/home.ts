import httpInstance from '@/utils/http'

export const getBannerAPI = () => {
  return httpInstance.get('home/banner')
}
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = (): any => {
  return httpInstance({
    url: '/home/new',
  })
}
