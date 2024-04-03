import httpInstance from '@/utils/http'

export const getDetail = (id: any) => {
  return httpInstance({
    url: '/goods',
    params: {
      id,
    },
  })
}
