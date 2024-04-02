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
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = (): any => {
  return httpInstance({
    url: '/home/hot',
  })
}
