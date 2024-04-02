import { getCategoryAPI } from '@/api/category'

export const useCategory = () => {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())
  onBeforeRouteUpdate(to => {
    getCategory(to.params.id)
  })
  return {
    categoryData,
  }
}
