<template lang="">
  <div>
    <ul class="flex space-x-8">
      <li><MagnifyingGlassIcon class="cursor-pointer size-5" /></li>
      <li>
        <div class="relative inline-block">
          <router-link :to="authStore.isAuthenticated ? { name: 'account' } : { name: 'login' }">
            <UserIcon v-if="!authStore.isAuthenticated" class="cursor-pointer size-5" />

            <UserPlusIcon v-if="authStore.isAuthenticated" class="cursor-pointer size-5" />
          </router-link>
        </div>
      </li>
      <li>
        <div class="relative inline-block">
          <router-link :to="{ name: 'wishlist' }">
            <HeartIcon class="cursor-pointer size-5"
          /></router-link>

          <span
            v-if="wishlist.length >= 0"
            type="button"
            class="absolute z-10 flex items-center justify-center  size-4 text-xs font-medium text-white bg-red-600 rounded-full shadow -top-2 -right-2"
          >
            {{ wishlist.length }}
          </span>
        </div>
      </li>
      <li>
        <div v-if="!isCartPath" class="relative inline-block">
      
          <ShoppingCartIcon @click="isSideModalOpen = true" class="cursor-pointer size-5" />
          <span
            v-if="cart.length >= 0"
            type="button"
            class="absolute z-10 flex items-center justify-center size-4 text-xs font-medium text-white bg-red-600 rounded-full shadow -top-2 -right-2"
          >
            {{ cart.length }}
          </span>
        </div>
      </li>
    </ul>
    <div
      v-if="isSideModalOpen"
      class="fixed inset-0 z-50 bg-black/40"
      @click="isSideModalOpen = false"
    >
      <CartSideModal @click.stop @close="isSideModalOpen = false" />
    </div>
  </div>
</template>
<script setup>
import { MagnifyingGlassIcon, HeartIcon } from '@heroicons/vue/24/outline'
import { UserIcon, UserPlusIcon, ShoppingCartIcon } from '@heroicons/vue/24/solid'
import { useWishListStore } from '@/stores/wishlist'
import { useCartStore } from '@/stores/cart'
import { useAuthStore } from '@/stores/auth'
import { ref, computed } from 'vue'
import CartSideModal from '@/components/CartSideModal.vue'
import { useRoute } from 'vue-router'
const wishlistStore = useWishListStore()
const cartStore = useCartStore()
const wishlist = computed(() => wishlistStore.getWishlist)
const cart = computed(() => cartStore.getCart)
const authStore = useAuthStore()
const route = useRoute()

const isCartPath = computed(()=>{
  return route.path === '/cart'
})

// const isAuthenticated = computed(() => authStore.isAuthenticated)
const isSideModalOpen = ref(false)
</script>
<style lang=""></style>
