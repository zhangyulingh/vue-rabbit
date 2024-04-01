import httpInstance from '@/utils/http'

export const getBannerAPI = () => {
  return httpInstance.get('home/banner')
}
