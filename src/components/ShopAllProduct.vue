<template>
  <div class="w-full flex-3">
    <!-- Product Grid -->
    <div :class="['container grid gap-8 mx-auto', gridClass]">
      <ProductCard
        v-for="product in productStore.getAllProducts.data"
        :key="product.id"
        :product="product"
         :is-list-view="productStore.gridCols === 1"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import ProductCard from './ProductCard.vue'
import { useProductStore } from '@/stores/product'
const productStore = useProductStore()

const gridClass = computed(() => {
  const map = {1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4'}
  return map[productStore.gridCols] || 'grid-cols-3'
})

// const totalPages = computed(() => Math.ceil(allProducts.value.length / props.perPage))

// const paginatedProducts = computed(() => {
//   const start = (props.currentPage - 1) * props.perPage
//   return allProducts.value.slice(start, start + props.perPage)
// })

// Keep parent's total count in sync
// watch(
//   () => allProducts.value.length,
//   (val) => emit('update:totalProducts', val),
//   { immediate: true }
// )

// function goToPage(page) {
//   if (page < 1 || page > totalPages.value) return
//   emit('update:currentPage', page)
//   window.scrollTo({ top: 0, behavior: 'smooth' })
// }
</script>