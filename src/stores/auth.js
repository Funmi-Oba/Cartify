import { defineStore } from 'pinia'
import api from '@/helpers/axios'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('authToken') || null)
  const user = ref(JSON.parse(localStorage.getItem('user')) || null)
  const router = useRouter()
  const setToken = (authToken) => {
    token.value = authToken
    localStorage.setItem('authToken', authToken)
  }
  const clearToken = () => {
    token.value = null
    localStorage.removeItem('authToken')
  }
  const setUser = (userData) => {
    user.value = userData
    localStorage.setItem('user', JSON.stringify(userData))
  }
  const clearUser = () => {
    user.value = null
    localStorage.removeItem('user')
  }
  const isAuthenticated = computed(() => token.value !== null)

  const login = async (email, password) => {
    try {
      const response = await api.post('/login', { email, password })

      setAuthCredentials(response.data)
       router.push('/');
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const register = async (data) => {
    try {
      const response = await api.post('/register', data)
      setAuthCredentials(response.data)
      router.push('/')
      return response.data
    } catch (error) {

      console.error(error.message)
      throw error
    }
  }

  const setAuthCredentials = (data) => {
    setToken(data.token)
    setUser(data.user)
  }

  const logout = () => {
    clearToken()
    clearUser()
  }

  const getUser = computed(() => user.value)

  return { token, setToken, isAuthenticated, getUser, login, logout, register }
})
