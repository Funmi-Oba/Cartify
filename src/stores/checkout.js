import { defineStore } from 'pinia'
import api from '@/helpers/axios'
import { ref, computed } from 'vue'
import { useCartStore } from './cart'

export const useCheckoutStore = defineStore('checkout', () => {
  const message = ref('')

  const checkout = async (payload) => {
    try {
      const response = await api.post(`/orders/checkout`, payload)
      const cartStore = useCartStore()
      cartStore.fetchCartItems()
      message.value = response.data.message
      console.log(response.data.status)
    } catch (error) {

    }
  }

  return{
    checkout, message
  }
})
