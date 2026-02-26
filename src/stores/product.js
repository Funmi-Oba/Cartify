import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/helpers/axios'


export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)
  const singleProduct = ref(null)
  const allProducts = ref([])
  const gridCols = ref(3)

  const getProducts = computed(() => products.value)
  const getLoading = computed(() => loading.value)
  const getError = computed(() => error.value)
  const getSingleProduct = computed(() => singleProduct.value)
  const getAllProducts = computed(() => allProducts.value)


  const setSingleProduct = (payload) => {
    singleProduct.value = payload
  }
  const setProducts = (payload) => {
    products.value = payload
  }
  const setAllProducts = (payload) => {
    allProducts.value = payload
  }
  const setLoading = (payload) => {
    loading.value = payload
  }
  const setError = (payload) => {
    error.value = payload
  }
  const setGridCols = (payload) => {
    gridCols.value = payload
  }

  const fetchAllProducts = async (perPage, page) => {
    try {
      setLoading(true)
      const response = await api.get(`/products/?per_page=${perPage}&page=${page}`)
      setAllProducts(response.data)
      console.log(response.data)
      return response.data.data
    } catch (error) {
      setError(error.message || 'Something went wrong while fetching all products')
      throw error
    } finally {
      setLoading(false)
    }
  }
  const fetchProducts = async (tab = 'new') => {
    try {
      setLoading(true)
      const response = await api.get(`/products/?tab=${tab}&per_page=15`)
      setProducts(response.data.data)
      console.log(response.data.data)
      return response.data.data
    } catch (err) {
      setError(err.message || 'Something went wrong while fetching products')
      console.log(err.message || err.error || 'Unknown error')
      throw err
    } finally {
      setLoading(false)
    }
  }

  const fetchSingleProductById = async (id) => {
    try {
      setLoading(true)
      const response = await api.get(`/products/${id}`)
      setSingleProduct(response.data.data)
      return response.data.data
    } catch (error) {
      setError(error.message || 'Something went wrong while fetching single product')
      throw error
    } finally {
      setLoading(false)
    }
  }
  return {
    products,
    loading,
    error,
    gridCols,
    setGridCols,
    getSingleProduct,
    getProducts,
    getLoading,
    getAllProducts,
    getError,
    fetchProducts,
    fetchSingleProductById,
    fetchAllProducts,
  }
})
