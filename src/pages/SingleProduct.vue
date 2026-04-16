<template>
  <div class="container mx-auto my-10 md:my-20 px-4 md:px-8">
    
    <!-- Loading State -->
    <div v-if="productStore.getLoading" class="flex items-center justify-center py-20">
      <div class="flex flex-col items-center space-y-4">
        <div class="w-16 h-16 border-4 border-[#ccc] border-t-[#333] rounded-full animate-spin"></div>
        <p class="text-2xl text-[#ccc]">Loading product...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="productStore.getError" class="flex items-center justify-center py-20">
      <div class="flex flex-col items-center space-y-4">
        <p class="text-2xl text-red-500">{{ productStore.getError }}</p>
        <button @click="loadProduct" class="px-6 py-3 text-white bg-[#333] hover:bg-black transition">
          Retry
        </button>
      </div>
    </div>

    <!-- Product Content -->
    <div v-else-if="product" class="flex flex-col md:flex-row items-stretch gap-6 md:gap-10 mt-10 md:mt-20">
      
      <!-- Product Image -->
      <div class="flex-1 overflow-hidden group">
        <img
          :src="product.image"
          :alt="product.name"
          class="object-contain w-full h-auto transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2"
        />
      </div>

      <!-- Product Details -->
      <div class="flex-1">
        <h1 class="mb-4 text-xl md:text-2xl text-[#333]">{{ product.id }}. {{ product.name }}</h1>
        <p class="text-base text-[#333] mb-4">
          Availability:
          <span class="text-[#d3122a] font-semibold">{{ product.stock }} In Stock</span>
        </p>
        <div class="mb-4 text-lg font-semibold text-[#333]">${{ product.price }}</div>

        <!-- Quantity Selector -->
        <div class="flex items-center mb-8 md:mb-12 space-x-6">
          <span class="text-[#333]">Quantity:</span>
          <div class="flex items-center border border-[#e7e7e7]">
            <button @click="decreaseQuantity" class="px-4 py-2 text-[#333] hover:bg-[#f7f7f7] transition">
              <MinusIcon class="size-4" />
            </button>
            <span class="w-10 text-center text-[#333]">{{ quantity }}</span>
            <button @click="increaseQuantity" class="px-4 py-2 text-[#333] hover:bg-[#f7f7f7] transition">
              <PlusIcon class="size-4" />
            </button>
          </div>
        </div>

        <!-- Add to Cart & Wishlist -->
        <div class="flex items-center space-x-4 md:space-x-8">
          <button
            @click="addToCart"
            class="bg-[#333] px-5 md:px-6 py-2 border text-white uppercase border-[#333] hover:bg-white hover:text-[#333]"
          >
            Add to Cart
          </button>

          <div>
            <div v-if="loading">
              <button class="p-2 border border-[#666] text-[#82807e] hover:text-white hover:bg-[#333] transition-colors">
                <Icon icon="eos-icons:bubble-loading" class="size-6" />
              </button>
            </div>
            <div v-else-if="existInWishlist" class="relative group/tooltip">
              <button
                class="p-2 text-[#333] border border-[#666] hover:text-white hover:bg-[#333] transition-colors"
                @click="removeInWishlist()"
              >
                <XMarkIcon class="font-bold size-6" />
              </button>
              <span class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 rounded text-sm whitespace-nowrap pointer-events-none">
                Remove From Wishlist
                <span class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"></span>
              </span>
            </div>
            <div v-else class="relative group/tooltip">
              <button
                class="p-2 text-[#82807e] border border-[#666] hover:text-white hover:bg-[#333] transition-colors"
                @click="toggleWishlist()"
              >
                <HeartIcon class="size-6" />
              </button>
              <span class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 text-sm whitespace-nowrap pointer-events-none">
                Add to Wishlist
                <span class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"></span>
              </span>
            </div>
          </div>
        </div>

        <!-- Terms -->
        <div class="flex mt-4 space-x-2">
          <input type="checkbox" id="policy" v-model="agreeToTerms" />
          <label class="text-[#777] text-sm" for="policy">I agree with the terms and conditions</label>
        </div>

        <!-- Buy Now -->
        <button
          :disabled="!agreeToTerms"
          class="w-full py-4 mt-4 text-base text-black uppercase transition-colors border-none"
          :class="agreeToTerms ? 'bg-[#ecd265] hover:text-[#333] cursor-pointer' : 'bg-[#ecd265]/70 text-black/70 cursor-not-allowed'"
        >
          Buy it now
        </button>

        <!-- Secure Checkout -->
        <p class="mt-6 text-base md:text-lg text-[#333]">Guaranteed secure checkout</p>
        <div class="flex flex-wrap mt-2 gap-2 md:gap-4">
          <Icon icon="logos:visa" class="size-8 md:size-12" />
          <Icon icon="logos:mastercard" class="size-8 md:size-12" />
          <Icon icon="logos:maestro" class="size-8 md:size-12" />
          <Icon icon="cib-american-express" class="size-8 md:size-12" />
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div v-if="product" class="flex items-center justify-center w-full mt-10 space-x-4 md:space-x-10">
      <h2
        v-for="tab in ['Description', 'Review', 'Custom Tab']"
        :key="tab"
        @click="activeTab = tab"
        class="text-lg md:text-3xl cursor-pointer hover:text-[#333]"
        :class="activeTab === tab ? 'text-[#333]' : 'text-[#ccc]'"
      >
        {{ tab }}
      </h2>
    </div>

    <!-- Tab Content -->
    <div v-if="product" class="w-full mt-6 px-2 md:px-0">
      <p class="text-center">
        <span v-if="activeTab === 'Description'" class="text-sm md:text-base text-[#666]">
          {{ product.description }}
        </span>
        <span v-else-if="activeTab === 'Review'" class="text-sm md:text-base">
          No reviews yet. Be the first to review this product!
        </span>
        <span v-else-if="activeTab === 'Custom Tab'" class="text-sm md:text-base">
          This is a custom tab content. You can put anything here.
        </span>
      </p>
    </div>

  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
import { useWishListStore } from '../stores/wishlist'
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MinusIcon, PlusIcon, HeartIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import { useBreadcrumbStore } from '@/stores/breadcrumb'

const productStore = useProductStore()
const cartStore = useCartStore()
const wishlistStore = useWishListStore()
const breadcrumbStore = useBreadcrumbStore()
const route = useRoute()

const quantity = ref(1)
const loadingDelay = 1000
const agreeToTerms = ref(false)
const loading = ref(false)
const activeTab = ref('Description')
const product = computed(() => productStore.getSingleProduct)

const router = useRouter()
const loadProduct = async () => {
  const productId = route.params.id
  await productStore.fetchSingleProductById(productId)
  breadcrumbStore.setCrumbs([{ label: `${product.value.id}. ${product.value.name}` }])
}

onMounted(async () => {
  await loadProduct()
})

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--
}

const increaseQuantity = () => {
  if (quantity.value < product.value.stock) quantity.value++
}

const addToCart = async () => {
  await cartStore.addToCart({ product_id: product.value.id, quantity: quantity.value })
}

const toggleWishlist = () => {
  if (loading.value) return
  loading.value = true
  wishlistStore.updateWishlist({ product_id: product.value.id })
  setTimeout(() => { loading.value = false }, loadingDelay)
}

const existInWishlist = computed(() => {
  return !!wishlistStore.getWishlistItemById(product.value.id)
})

const removeInWishlist = () => {
  if (loading.value) return
  loading.value = true
  wishlistStore.removeFromWishlist(product.value.id)
  setTimeout(() => { loading.value = false }, loadingDelay)
}
</script>

<style lang="scss" scoped></style>