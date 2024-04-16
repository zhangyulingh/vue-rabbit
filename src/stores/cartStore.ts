import { defineStore } from 'pinia'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref([])
    const addCart = (goods: { skuId: any }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const item = cartList.value.find(item => goods.skuId === goods.skuId)
      if (item) {
        item.count++
      } else {
        cartList.value.push({ ...goods, count: 1 })
      }
    }
    return { cartList, addCart }
  },
  {
    persist: true,
  },
)
