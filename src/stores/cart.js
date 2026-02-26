import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/helpers/axios'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])
  const message = ref('')
  const setMessage = (payload) => {
    message.value = payload
  }

  const getCart = computed(() => cart.value)
  const getMessage = computed(() => message.value)

  const addToCart = async (payload) => {
    try {
      const response = await api.post(`/cart/add`, payload)
      fetchCartItems()
      message.value = 'Product Successfully Added To Your Shopping Cart'
      console.log(response.data.status)
    } catch (error) {
      setMessage(error.message || error.error || 'Unknown error while adding item to cart')
      console.log(message.value)
      throw error
    }
  }

  const fetchCartItems = async () => {
    try {
      const response = await api.get('/cart')
      cart.value = response.data.data
        console.log(response.data.data)
    } catch (error) {
      setMessage(error.message || error.error || 'Unknown error while fetching cart items')
      console.log(message.value)
      throw error
    }
  }

  const updateCartQuantity = async (payload) => {
    try {
      const response = await api.put(`/cart/${payload.id}`, payload)
      fetchCartItems()
      console.log(response)
    } catch (error) {
      setMessage(error.message || error.error || 'Unknown error while updating cart item quantity')
      console.log(message.value)
      throw error
    }
  }

  const deleteFromCart = async (id)=>{
    try {
      const response = await api.delete(`/cart/${id}`)
      fetchCartItems()
      console.log(response)
    } catch (error) {
      setMessage(error.message || error.error || 'Unknown error while deleting item from cart')
      console.log(message.value)
      throw error
    }
  }

    const getCartItemById = (id) => {
    return cart.value.find((item) => item.id === id)
  }

  // const addToCart = (product) => {
  //   cart.value.push({ ...product, quantity: 1, inStock: 10 })
  // }

  // const increaseQuantity = (productId) => {
  //   const item = cart.value.find((item) => item.id === productId)
  //   if (!item) return
  //   if (item.quantity >= item.inStock) {
  //     alert('The maximum quantity in stock reached, you can not buy more than what is in stock.')
  //   } else {
  //     item.quantity++
  //   }
  // }

  // const decreaseQuantity = (productId) => {
  //   const item = cart.value.find((item) => item.id === productId)

  //   if (item.quantity > 1) {
  //     item.quantity--
  //   } else return
  // }
  // const deleteFromCart = (productId) => {
  //   cart.value = cart.value.filter((item) => item.id !== productId)
  // }

  const getItemSubtotal = (productId) => {
    const item = cart.value.find((item) => item.id === productId)
    return item ? item.price * item.quantity : '0:00'
  }

  const getCartTotal = computed(() => {
    return cart.value.reduce(
      (accumulator, currentItem) => accumulator + currentItem.price * currentItem.quantity,
      0,
    )
  })
  // const addToCartAndIncrease = (product) => {
  //   existingItem.value = cart.value.find((item) => item.id === product.id)
  //   if (existingItem.value && existingItem.value.quantity >= 1) {
  //     increaseQuantity(product.id)
  //     message.value = 'Product Successfully Added To Your Shoping Cart'
  //   } else if (existingItem.value && existingItem.value.quantity === existingItem.value.inStock) {
  //     alert('The maximum quantity of this item is already in your cart.')
  //   } else {
  //     addToCart(product)
  //     message.value = 'Product Successfully Added To Your Shoping Cart'
  //   }
  // }

  return {
    cart,
    getCart,
    getMessage,
    deleteFromCart,
    updateCartQuantity,
    addToCart,
    fetchCartItems,
    getItemSubtotal,
    getCartTotal,
    getCartItemById
  }
})
