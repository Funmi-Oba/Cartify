<script setup>
import NavBar from './layouts/NavBar.vue'
import Footer from './components/Footer.vue'
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useProductStore } from '@/stores/product'
import { useWishListStore } from '@/stores/wishlist'
import { useUserStore } from './stores/user'
import router from './router'
import BreadCrumb from './components/BreadCrumb.vue'

const route = useRoute()
const cartStore = useCartStore()
const productStore = useProductStore()
const wishlistStore = useWishListStore()
const userStore = useUserStore()
onMounted(async () => {
  await Promise.all([
    cartStore.fetchCartItems(),
    productStore.fetchProducts(),
    wishlistStore.fetchWishlistItems(),
    userStore.fetchCurrentUser()
  ])
})

const isCheckout = computed(() => route.path === '/checkout')
</script>

<template>
  <div v-if="isCheckout">
    <router-view />
  </div>
  <div v-else>
    <div class="px-10">
      <NavBar />
      <BreadCrumb/>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
