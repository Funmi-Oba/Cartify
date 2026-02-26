<template lang="">
  <div v-if="wishlist.length === 0" class="container my-20">
    <h2 class="text-[#333] tracking-wide text-4xl">Your wishlist is currently empty!</h2>
    <p class="text-[#82807e] mt-5">
      Continue browsing
      <router-link :to="{ name: 'home' }" class="text-[#333] font-bold hover:underline"
        >here</router-link
      ><span>.</span>
    </p>
  </div>
  <div v-else class="grid grid-cols-4 gap-6 px-4 py-10 mx-auto">
    <div v-for="item in wishlist" :key="item.id">
      <div class="w-full mt-5 group">
        <div
          class="relative bg-[#f5f5f5] w-full aspect-square flex items-center justify-center p-6"
        >
          <div class="flex items-center justify-center w-full h-full">
            <img :src="item.image" class="object-contain w-3/5 h-3/5" />
          </div>

          <div
            class="absolute group-hover:opacity-100 opacity-0 top-6 right-6 flex flex-col space-y-1.5"
          >
            <div class="relative group/tooltip">
              <button
                class="bg-white p-3 text-[#82807e] hover:text-[#333]"
                @click="removeInWishlist(item.id)"
              >
                <XMarkIcon class="w-5 h-5" />
              </button>
            </div>
            <div class="relative group/tooltip">
              <button class="bg-white p-3 text-[#82807e] hover:text-[#333]">
                <ArrowPathRoundedSquareIcon class="w-5 h-5" />
              </button>
            </div>
            <div class="relative group/tooltip">
              <button class="bg-white p-3 text-[#82807e] hover:text-[#333]">
                <MagnifyingGlassIcon class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-col py-5 space-y-2">
          <div class="relative h-7">
            <a
              class="absolute inset-0 transition-opacity duration-200 text-xl text-[#333333] line-clamp-1 group-hover:opacity-0"
            >
              {{ item.id }}. {{ item.name }}
            </a>

            <a
              @click="addToCart(item)"
              class="absolute inset-0 transition-opacity duration-200 text-xl text-[#d3122a] opacity-0 group-hover:opacity-100"
            >
              + Add To Cart
            </a>
          </div>
          <h2 class="font-bold text-[#333333]">${{ item.price }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  XMarkIcon,
  ArrowPathRoundedSquareIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline'
import { useWishListStore } from '@/stores/wishlist'
import { useCartStore } from '@/stores/cart'
import { ref, computed, onMounted } from 'vue'
const wishlistStore = useWishListStore()
import { useBreadcrumbStore } from '@/stores/breadcrumb'

const breadcrumbStore = useBreadcrumbStore()

const cartStore = useCartStore()
const hover = ref(false)

onMounted(() => {
  wishlistStore.fetchWishlistItems()
   breadcrumbStore.setCrumbs([{ label: 'Wishlist' }])
},
)
const wishlist = computed(() => wishlistStore.getWishlist)
const removeInWishlist = (id) => {
  wishlistStore.removeFromWishlist(id)
}

const addToCart = (item) => {
  cartStore.addToCart({ product_id: item.id, quantity: 1 })
 removeInWishlist(item.id)
  console.log('items added to cart', cartStore.getCart)
}
</script>
<style lang=""></style>
