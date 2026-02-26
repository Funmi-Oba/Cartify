<template>
  <div class="container mx-auto my-20">
    <!-- Loading State -->
    <div v-if="productStore.getLoading" class="flex items-center justify-center py-20">
      <div class="flex flex-col items-center space-y-4">
        <div
          class="w-16 h-16 border-4 border-[#ccc] border-t-[#333] rounded-full animate-spin"
        ></div>
        <p class="text-2xl text-[#ccc]">Loading product...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="productStore.getError" class="flex items-center justify-center py-20">
      <div class="flex flex-col items-center space-y-4">
        <p class="text-2xl text-red-500">{{ productStore.getError }}</p>
        <button
          @click="loadProduct"
          class="px-6 py-3 text-white bg-[#333] hover:bg-black transition"
        >
          Retry
        </button>
      </div>
    </div>

    <div v-else-if="product" class="flex items-stretch gap-10 mt-20">
      <div class="flex-1 overflow-hidden group">
        <img
          :src="product.image"
          :alt="product.name"
          class="object-contain w-full h-auto transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2"
        />
      </div>
      <div class="flex-1">
        <h1 class="mb-4 text-2xl text-[#333]">{{ product.id }}. {{ product.name }}</h1>
        <p class="text-base text-[#333] mb-4">
          Availability:
          <span class="text-[#d3122a] font-semibold">{{ product.stock }} In Stock</span>
        </p>
        <div class="mb-4 text-lg font-semibold text-[#333]">${{ product.price }}</div>

        <!-- Quantity Selector -->
        <div class="flex items-center mb-12 space-x-6">
          <span class="text-[#333]">Quantity:</span>
          <div class="flex items-center border border-[#e7e7e7]">
            <button
              @click="decreaseQuantity"
              class="px-4 py-2 text-[#333] hover:bg-[#f7f7f7] transition"
            >
              <MinusIcon class="size-4" />
            </button>
            <span class="w-10 text-center text-[#333]">{{ quantity }}</span>
            <button
              @click="increaseQuantity"
              class="px-4 py-2 text-[#333] hover:bg-[#f7f7f7] transition"
            >
              <PlusIcon class="size-4" />
            </button>
          </div>
        </div>
        <div class="flex items-center space-x-8">
          <button
            @click="addToCart"
            class="bg-[#333] px-6 py-2 border text-white uppercase border-[#333] hover:bg-white hover:text-[#333]"
          >
            Add to Cart
          </button>

          <div class="">
            <div v-if="loading" class="">
              <button
                class="p-2 border border-[#666] text-[#82807e] hover:text-white hover:bg-[#333] transition-colors"
              >
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

              <span
                class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 rounded text-sm whitespace-nowrap pointer-events-none"
              >
                Remove From Wishlist
                <span
                  class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"
                ></span>
              </span>
            </div>

            <div v-else class="relative group/tooltip">
              <button
                class="p-2 text-[#82807e] border border-[#666] hover:text-white hover:bg-[#333] transition-colors"
                @click="toggleWishlist()"
              >
                <HeartIcon class="size-6" />
              </button>

              <span
                class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 text-sm whitespace-nowrap pointer-events-none"
              >
                Add to Wishlist
                <span
                  class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"
                ></span>
              </span>
            </div>
          </div>
        </div>
        <div class="flex mt-4 space-x-2">
          <input type="checkbox" id="policy" v-model="agreeToTerms" />
          <label class="text-[#777] text-sm" for="policy"
            >I agree with the terms and conditions</label
          >
        </div>
        <button
          :disabled="!agreeToTerms"
          class="w-full py-4 mt-4 text-base text-black uppercase transition-colors border-none"
          :class="
            agreeToTerms
              ? 'bg-[#ecd265] hover:text-[#333] cursor-pointer'
              : 'bg-[#ecd265]/70 text-black/70 cursor-not-allowed'
          "
        >
          Buy it now
        </button>

        <p class="mt-6 text-lg text-[#333]">Guaranteed safe and secure checkout</p>
        <div class="flex mt-2 space-x-4">
          <Icon icon="logos:visa" class="size-12" />
          <Icon icon="logos:mastercard" class="size-12" />
          <Icon icon="logos:maestro" class="size-12" />
          <Icon icon="cib-american-express" class="size-12" />
        </div>
      </div>
    </div>

    <div v-if="product" class="flex items-center justify-center w-full mt-10 space-x-10">
      <h2
        v-for="tab in ['Description', 'Review', 'Custom Tab']"
        :key="tab"
        @click="activeTab = tab"
        class="text-3xl hover:text-[#333]"
        :class="activeTab === tab ? 'text-[#333]' : 'text-[#ccc]'"
      >
        {{ tab }}
      </h2>
    </div>

    <div v-if="product" class="w-full mt-6">
      <p class="text-center">
        <span v-if="activeTab === 'Description'" class="text-base text-[#666]">
          {{ product.description }}
        </span>
        <span v-else-if="activeTab === 'Review'">
          No reviews yet. Be the first to review this product!
        </span>
        <span v-else-if="activeTab === 'Custom Tab'">
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
import { useRoute,  useRouter } from 'vue-router'
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
  const productId = route.params.id //Gets id from /products/:id in the url
  await productStore.fetchSingleProductById(productId) // Fetches the product details from api using the id

   // Once product is loaded, update breadcrumb dynamically
  breadcrumbStore.setCrumbs([{ label: `${product.value.id}. ${product.value.name}` }])
}

onMounted(async () => {
  await loadProduct()
},)

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
  setTimeout(() => {
    loading.value = false
  }, loadingDelay)
  console.log('wishlist items', wishlistStore.getWishlist)
}
const existInWishlist = computed(() => {
  return !!wishlistStore.getWishlistItemById(product.value.id)
})
const removeInWishlist = () => {
  if (loading.value) return
  loading.value = true
  wishlistStore.removeFromWishlist(product.value.id)
  setTimeout(() => {
    loading.value = false
  }, loadingDelay)
}
</script>

<style lang="scss" scoped></style>
