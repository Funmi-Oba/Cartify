<template lang="">
  <div class="w-auto h-auto py-10 mt-10">
    <div class="flex items-center justify-center w-full space-x-10">
      <h2
        v-for="tab in ['New', 'Popular', 'Sale']"
        :key="tab"
        @click="changeTab(tab)"
        class="text-5xl hover:text-[#333]"
        :class="activeTab === tab ? 'text-[#333]' : 'text-[#ccc]'"
      >
        {{ tab }}
      </h2>
    </div>
    <!-- Loading state -->
    <div v-if="productStore.getLoading" class="flex items-center justify-center py-20">
      <p class="text-2xl text-[#666]">Loading...</p>
       <Icon icon="line-md:downloading-loop" class="size-20 text-[#666]" />
    </div>

    <!-- Error state -->
    <div v-else-if="productStore.getError" class="flex items-center justify-center py-20">
      <p class="text-2xl text-red-500">{{ productStore.getError }}</p>
    </div>
    
    <div v-else class="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
      <ProductCard v-for="product in productStore.getProducts" :key="product.id" :product="product" />
    </div>

    <div class="flex flex-col items-center justify-center w-full mt-10">
      <img
        src="https://lezada-demo.myshopify.com/cdn/shop/files/cabinet_922x.jpg?v=1613765140"
        alt=""
      />
      <div class="flex mt-6 space-x-6">
        <a href="#" class="text-[#7e7e7e] text-lg">#summer</a>
        <a href="#" class="text-[#7e7e7e] text-lg">#shelf </a>
        <a href="#" class="text-[#7e7e7e] text-lg">#Sale</a>
      </div>
      <h1 class="text-[#333] text-4xl mt-6 max-w-2xl tracking-wide text-center">
        Up To 40% Off Final Sale Items. Caught in the moment!
      </h1>

      <button
        class="px-10 py-4 text-sm mt-10 tracking-widest text-white bg-[#333] hover:bg-black transition"
      >
        SHOP NOW
      </button>
    </div>
  </div>
</template>
<script setup>
import { Icon } from '@iconify/vue'
import { ref, onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import ProductCard from './ProductCard.vue'
const openCartModal = ref(false)
const activeTab = ref('New')
const productStore = useProductStore()
const cartStore = useCartStore()


onMounted(async () => {
  await Promise.all([
    cartStore.fetchCartItems(),
    fetchProductsByTab(activeTab.value), // Fetch 'New' products initially
  ])
})

//This function Fetch products based on active tab
const fetchProductsByTab = async (tab) => {
  const tabParam = tab.toLowerCase()
  await productStore.fetchProducts(tabParam)
}

// Change tab and fetch new products
const changeTab = async (tab) => {
  activeTab.value = tab
  await fetchProductsByTab(tab)
}

// const filteredProducts = computed(() => {
//   const products = productStore.getProducts
//   if (activeTab.value === 'New') {
//     return products.slice(0, 6)
//   }
//   if (activeTab.value === 'Popular') {
//     return products.slice(6, 12)
//   }
//   if (activeTab.value === 'Sale') {
//     return products.slice(12, 18)
//   }
//   return []
// })
</script>
<style lang=""></style>
