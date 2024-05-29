import { defineStore } from 'pinia'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref([])
    const addCart = goods => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const item = cartList.value.find(item => goods.skuId === item.skuId)
      if (item) {
        item.count++
      } else {
        cartList.value.push(goods)
      }
    }
    const delCart = skuID => {
      const idx = cartList.value.findIndex(item => skuID === item.skuId)
      cartList.value.splice(idx, 1)
    }
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find(item => item.skuId === skuId)
      item.selected = selected
    }
    const isAll = computed(() => cartList.value.every(item => item.selected))

    const allCheck = selected => {
      cartList.value.forEach(item => (item.selected = selected))
    }
    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0),
    )
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.count * c.price, 0),
    )
    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      allCheck,
    }
  },
  {
    persist: true,
  },
)
