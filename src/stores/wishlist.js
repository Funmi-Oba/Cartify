import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/helpers/axios'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const useWishListStore = defineStore('wishlist', () => {
  const wishlist = ref([])
  const message = ref('')
  const setMessage = (payload) => {
    message.value = payload
  }
  const getMessage = computed(() => message.value)
  const getWishlist = computed(() => wishlist.value)

  const fetchWishlistItems = async () => {
    try {
      const response = await api.get('/wishlist')
      wishlist.value = response.data.data
      console.log(response.data.data)
    } catch (error) {
      setMessage(error.message || error.error || 'Unknown error while fetching wishlist items')
      console.log(message.value)
      throw error
    }
  }

  const addToWishlist = async (payload) => {
    try {
      const response = await api.post(`/wishlist/add`, payload)
      fetchWishlistItems()
      console.log(response.data.data, response.data.status)
    } catch (error) {
      const errMsg = error.message || error.error || 'Unknown error while adding item to cart'
      if (errMsg === 'Unauthenticated.') {
        toast.info(`You need to login to add to wishlist; 
Username: cartify@gmail.com, Password: 123456`)
      } else if (errMsg === 'Unexpected error') {
        toast.error('Check internet connection')
      } else {
        toast.error(errMsg)
      }

      console.log(message.value)
      throw error
    }
  }

  const removeFromWishlist = async (id) => {
    try {
      const response = await api.delete(`/wishlist/${id}`)
      fetchWishlistItems()
      console.log(response.data.status)
    } catch (error) {
      setMessage(error.message || error.error || 'Unknown error while removing from wishlist')
      console.log(message.value)
      throw error
    }
  }
  const getWishlistItemById = (id) => {
    return wishlist.value.find((item) => item.id === id)
  }

  // const addToWishList = (product) => {
  //   wishlist.value.push(product)
  // }

  // const removeFromWishlist = (productId) => {
  //   wishlist.value = wishlist.value.filter((product) => product.id !== productId)
  // }

  const updateWishlist = (product) => {
    const exists = wishlist.value.some((item) => item.id === product.id)

    if (!exists) {
      addToWishlist(product)
    } else {
      removeFromWishlist(product.id)
    }
  }

  return {
    wishlist,
    getWishlist,
    removeFromWishlist,
    addToWishlist,
    fetchWishlistItems,
    updateWishlist,
    getWishlistItemById,
  }
})
