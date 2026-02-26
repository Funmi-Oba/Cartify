import { defineStore } from 'pinia'
import api from '@/helpers/axios'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const currentUser = ref(null)
  const message = ref('')
  const setMessage = (payload) => {
    message.value = payload
  }
  const getMessage = computed(() => message.value)  


  const getCurrentUser = computed(() => currentUser.value)

  const fetchCurrentUser = async () => {
    try {
      const response = await api.get('/user')
      currentUser.value = response.data.user
      console.log(currentUser.value)
      return currentUser.value
    } catch (error) {
      setMessage(error.message || error.error || 'Unknown error while fetching user data')
      console.log(message.value)
      throw error
    }
  }

  return {
    getCurrentUser,
    fetchCurrentUser,
    getMessage,
  }
})
