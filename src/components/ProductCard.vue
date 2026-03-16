<template lang="">
  <div
    :class="['mt-10 group', isListView ? 'flex flex-row items-start gap-6' : 'w-full']"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div
      :class="[
        'relative bg-[#f5f5f5] flex items-center justify-center p-6',
        isListView ? 'size-80 shrink-0' : 'w-full aspect-square',
      ]"
    >
      <div class="flex items-center justify-center w-full h-full">
        <router-link :to="{ name: 'product', params: { id: product.id } }">
          <img
            :src="product.image"
            :alt="product.name"
            class="absolute inset-0 object-cover object-center w-full h-full transition-transform duration-500 ease-out"
          />
        </router-link>
      </div>

      <div
        :class="[
          'absolute flex flex-col items-center justify-center',
          isGridFour
            ? 'top-2 left-2 space-y-1'
            : isGridThree
              ? 'top-3 left-3 space-y-2'
              : 'top-4 left-3 space-y-2 md:top-4 md:left-4',
        ]"
      >
        <h2
          :class="[
            'bg-[#98d8ca] flex items-center justify-center text-white p-2 rounded-full',
            isGridFour
              ? 'size-8 text-[10px]'
              : isGridThree
                ? 'size-10  text-xs'
                : 'size-12 text-xs',
          ]"
        >
          SALE
        </h2>
        <h2
          :class="[
            'bg-[#98d8ca] flex items-center justify-center text-white p-2 rounded-full',
            isGridFour
              ? 'size-8 text-[10px]'
              : isGridThree
                ? 'size-10  text-xs'
                : 'size-12 text-xs',
          ]"
        >
          -10%
        </h2>
      </div>
      <div
        :class="[
          'absolute group-hover:opacity-100 opacity-0  flex flex-col ',
          isGridFour ? 'top-2 right-2 space-y-1' : 'top-4 right-4 space-y-1.5',
        ]"
      >
        <div v-if="loading" class="">
          <button
            :class="[
              'flex justify-center items-center bg-white',
              isGridFour ? 'size-6' : 'size-10 p-2',
            ]"
          >
            <Icon
              icon="eos-icons:bubble-loading"
              :class="['text-[#333]', isGridFour ? 'size-3' : 'size-5']"
            />
          </button>
        </div>
        <div v-else-if="existInWishlist" class="relative group/tooltip">
          <button
            :class="[
              'flex justify-center items-center bg-white  text-[#82807e] hover:text-[#333]',
              isGridFour ? 'size-6' : 'size-10 p-2',
            ]"
            @click="removeInWishlist()"
          >
            <XMarkIcon :class="isGridFour ? 'size-3' : 'size-5'" />
          </button>

          <span
            class="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 rounded text-sm whitespace-nowrap pointer-events-none"
          >
            Remove From Wishlist
            <span
              class="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#333]"
            ></span>
          </span>
        </div>

        <div v-else class="relative group/tooltip">
          <button
            :class="[
              'flex justify-center items-center bg-white  text-[#82807e] hover:text-[#333]',
              isGridFour ? 'size-6' : 'size-10 p-2',
            ]"
            @click="toggleWishlist()"
          >
            <HeartIcon :class="isGridFour ? 'size-3' : 'size-5'" />
          </button>

          <span
            class="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 rounded text-sm whitespace-nowrap pointer-events-none"
          >
            Add to Wishlist
            <span
              class="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#333]"
            ></span>
          </span>
        </div>

        <div class="relative group/tooltip">
          <button
            @click="compare()"
            :class="[
              'flex justify-center items-center bg-white text-[#82807e] hover:text-[#333]',
              isGridFour ? 'size-6' : 'size-10 p-2',
            ]"
          >
            <ArrowPathRoundedSquareIcon :class="isGridFour ? 'size-3' : 'size-5'" />
          </button>
          <span
            class="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 rounded text-sm whitespace-nowrap pointer-events-none"
          >
            Compare
            <span
              class="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#333]"
            ></span>
          </span>
        </div>
        <div class="relative group/tooltip">
          <button
            :class="[
              'flex justify-center items-center bg-white text-[#82807e] hover:text-[#333]',
              isGridFour ? 'size-6' : 'size-10 p-2',
            ]"
          >
            <MagnifyingGlassIcon :class="isGridFour ? 'size-3' : 'size-5'" />
          </button>
          <span
            class="absolute right-full mr-2 top-1/2 -translate-y-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 rounded text-sm whitespace-nowrap pointer-events-none"
          >
            Quick View
            <span
              class="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#333]"
            ></span>
          </span>
        </div>
      </div>
    </div>
    <div
      :class="['flex flex-col space-y-2', isListView ? 'flex w-200 justify-center py-2' : 'py-5']"
    >
      <a
        v-if="!hover || isListView"
        class="text-xl text-[#333333]"
        :class="{
          'group-hover:opacity-0': !isListView,
          'line-clamp-1': !isListView,
        }"
      >
        {{ product.id }}. {{ product.name }}
      </a>
      <a
        v-if="hover || isListView"
        @click="addToCart()"
        class="text-xl text-[#d3122a] cursor-pointer"
        :class="{ 'opacity-0 group-hover:opacity-100': !isListView }"
        >+ Add To Cart</a
      >
      <h2 class="font-bold text-[#333333]">${{ product.price }}</h2>
    </div>
  </div>
  <teleport to="body">
    <div v-if="openCartModal">
      <CartModal :product="product" @close="openCartModal = false" />
    </div>
  </teleport>
  <teleport to="body">
    <div v-if="openCompareModal">
      <CompareModal :product="product" @close="openCompareModal = false" />
    </div>
  </teleport>
</template>
<script setup>
import {
  HeartIcon,
  XMarkIcon,
  ArrowPathRoundedSquareIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline'
import { Icon } from '@iconify/vue'
import { ref, computed } from 'vue'
import { defineProps } from 'vue'
import { useWishListStore } from '../stores/wishlist'
import { useCartStore } from '@/stores/cart'
import { useCompareStore } from '@/stores/compare'
import CartModal from './CartModal.vue'
import CompareModal from './CompareModal.vue'
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  isListView: {
    type: Boolean,
    default: false,
  },
  isGridTwo: {
    type: Boolean,
    default: false,
  },
  isGridThree: {
    type: Boolean,
    default: false,
  },
  isGridFour: {
    type: Boolean,
    default: false,
  },
})
const hover = ref(false)
const errorMessage = ref(null)
const loading = ref(false)
const loadingDelay = 1000
const openCartModal = ref(false)
const openCompareModal = ref(false)
const wishlistStore = useWishListStore()
const cartStore = useCartStore()
const compareStore = useCompareStore()
const toggleWishlist = () => {
  if (loading.value) return
  loading.value = true
  wishlistStore.updateWishlist({ product_id: props.product.id })
  setTimeout(() => {
    loading.value = false
  }, loadingDelay)
  console.log('wishlist items', wishlistStore.getWishlist)
}
const existInWishlist = computed(() => {
  return !!wishlistStore.getWishlistItemById(props.product.id)
})
const removeInWishlist = () => {
  if (loading.value) return
  loading.value = true
  wishlistStore.removeFromWishlist(props.product.id)
  setTimeout(() => {
    loading.value = false
  }, loadingDelay)
}

const addToCart = async () => {
  await cartStore.addToCart({ product_id: props.product.id, quantity: 1 })

  
  openCartModal.value = true
  console.log('items added to cart', cartStore.getCart)
}
const compare = () => {
  compareStore.compare(props.product)
  openCompareModal.value = true
}
</script>
<style lang=""></style>
