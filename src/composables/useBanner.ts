import { getBannerAPI } from '@/api/home'

export const useBanner = () => {
  const bannerData = ref([])
  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: '2',
    })
    bannerData.value = res.result
  }
  onMounted(() => getBanner())
  return {
    bannerData,
  }
}
