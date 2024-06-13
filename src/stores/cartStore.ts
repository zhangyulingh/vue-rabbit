import { defineStore } from 'pinia'
import { useUserStore } from './userStore'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/api/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    const cartList = ref([])
    const updateNewList = async () => {
      const res = await findNewCartListAPI()
      cartList.value = res.result
    }
    const addCart = async goods => {
      const { skuId, count } = goods
      if (isLogin.value) {
        await insertCartAPI({
          skuId,
          count,
        })
        updateNewList()
      } else {
        const item = cartList.value.find(item => goods.skuId === item.skuId)
        if (item) {
          item.count++
        } else {
          cartList.value.push(goods)
        }
      }
    }

    const delCart = async (skuID: any) => {
      if (isLogin.value) {
        await delCartAPI([skuID])
        updateNewList()
      } else {
        const idx = cartList.value.findIndex(item => skuID === item.skuId)
        cartList.value.splice(idx, 1)
      }
    }
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find(item => item.skuId === skuId)
      item.selected = selected
    }
    const isAll = computed(() => cartList.value.every(item => item.selected))

    const allCheck = (selected: any) => {
      cartList.value.forEach(item => (item.selected = selected))
    }
    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0),
    )
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.count * c.price, 0),
    )
    // 已选择数量
    const selectedCount = computed(() =>
      cartList.value
        .filter(item => item.selected)
        .reduce((a, c) => a + c.count, 0),
    )
    //
    const selectedPrice = computed(() =>
      cartList.value
        .filter(item => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0),
    )

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      isAll,
      singleCheck,
      selectedCount,
      selectedPrice,
      allCheck,
    }
  },
  {
    persist: true,
  },
)
