<template lang="">
  <div class="w-auto h-auto py-6 md:py-10 mt-6 md:mt-10">
    <!-- Tabs -->
    <div class="flex items-center justify-center w-full space-x-6 md:space-x-10">
      <h2
        v-for="tab in ['New', 'Popular', 'Sale']"
        :key="tab"
        @click="changeTab(tab)"
        class="text-3xl md:text-5xl cursor-pointer hover:text-[#333]"
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

    <!-- Product Grid -->
    <div v-else class="container grid grid-cols-2 gap-4 md:gap-8 mx-auto md:grid-cols-3">
      <ProductCard
        v-for="product in productStore.getProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <!-- Bottom Banner -->
    <div class="flex flex-col items-center justify-center w-full mt-10 px-4 md:px-0">
      <img
        src="https://lezada-demo.myshopify.com/cdn/shop/files/cabinet_922x.jpg?v=1613765140"
        alt=""
        class="w-full max-w-2xl"
      />
      <div class="flex mt-6 space-x-4 md:space-x-6">
        <a href="#" class="text-[#7e7e7e] text-base md:text-lg">#summer</a>
        <a href="#" class="text-[#7e7e7e] text-base md:text-lg">#shelf</a>
        <a href="#" class="text-[#7e7e7e] text-base md:text-lg">#Sale</a>
      </div>
      <h1 class="text-[#333] text-2xl md:text-4xl mt-6 max-w-2xl tracking-wide text-center px-4 md:px-0">
        Up To 40% Off Final Sale Items. Caught in the moment!
      </h1>
      <router-link :to="{name: 'allCollections'}" >
      <button
        class="px-8 md:px-10 py-3 md:py-4 text-sm mt-10 tracking-widest text-white bg-[#333] hover:bg-black transition"
      >
        SHOP NOW
      </button>
      </router-link>
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
    fetchProductsByTab(activeTab.value),
  ])
})

const fetchProductsByTab = async (tab) => {
  const tabParam = tab.toLowerCase()
  await productStore.fetchProducts(tabParam)
}

const changeTab = async (tab) => {
  activeTab.value = tab
  await fetchProductsByTab(tab)
}
</script>
<style lang=""></style>