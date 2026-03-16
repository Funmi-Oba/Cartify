import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCompareStore = defineStore('compare', () => {
  const comparedProducts = ref([])
  const getComparedProducts = computed(() => comparedProducts.value)

  const compare = (product) => {
    comparedProducts.value.push(product)
  }

  return {
    compare,
    getComparedProducts,
  }
})
