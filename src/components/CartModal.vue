<template lang="">
  <div
    class="fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 bg-black/50"
    @click="$emit('close')"
  >
    <div
      class="relative flex flex-col items-start justify-between w-auto gap-10 p-10 bg-white shadow-xl md:flex-row"
      @click.stop
    >
      <button
        type="button"
        class="shadow-lg absolute bg-[#6A7E8A] text-white text-sm flex items-center justify-center top-0 right-0 -mt-3 -mr-3 w-8 h-8 cursor-pointer rounded-full"
        @click="$emit('close')"
      >
        x
      </button>
      <div class="max-w-xs mr-5">
        <div class="flex items-start justify-center text-[#50c56b]">
          <CheckCircleIcon class="mr-2 size-12" />
          <h2 class="text-xl font-semibold">{{ message }}</h2>
        </div>

        <div class="flex flex-col items-center justify-center">
          <div class="flex w-4/5 bg-[#f5f5f5] my-4 p-6 items-center justify-center">
            <img :src="product.image" class="object-contain w-4/5 h-4/5" />
          </div>
          <h2 class="text-[#333] text-base leading-5">{{ product.id }}. {{ product.name }}</h2>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center max-w-sm">
        <h2 class="text-[#555555] text-lg uppercase mb-2">
          There are {{ cart.length }} Items In Your Cart.
        </h2>
        <h2 class="text-[#555555] text-lg uppercase mb-4 font-medium">
          Total Price: ${{ cartTotal.toFixed(2) }} USD
        </h2>
        <CustomButton class="w-full mt-5 mb-3 uppercase">
          <template #button-name
            ><router-link :to="{ name: 'allCollections' }">Continue Shopping</router-link>
          </template>
        </CustomButton>
        <CustomButton class="w-full mb-3 uppercase">
          <template #button-name>
            <router-link :to="{ name: 'cart' }"> View Cart </router-link></template
          >
        </CustomButton>

        <div class="flex space-x-2">
          <input type="checkbox" id="policy" v-model="agreeToTerms" />
          <label class="text-[#777] text-sm" for="policy"
            >I agree with the terms and conditions</label
          >
        </div>
        <CustomButton
          :disabled="!agreeToTerms"
          class="w-full mt-4 text-white uppercase transition-colors border-none"
          :class="agreeToTerms ? 'bg-[#d3122a] cursor-pointer' : 'bg-[#e5717f] cursor-not-allowed'"
        >
          <template #button-name> <router-link :to="{ name: 'checkout' }">Checkout</router-link> </template>
        </CustomButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cart'
import { useWishListStore } from '@/stores/wishlist'
import CustomButton from './CustomButton.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
const emit = defineEmits(['close'])
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
const agreeToTerms = ref(false)
const cartStore = useCartStore()
const cart = computed(() => cartStore.getCart)
const message = computed(() => cartStore.getMessage)
const itemToAddToCart = computed(() => cartStore.getCartItemById(props.product.id))
const totalItem = (id) => cartStore.getItemSubtotal(id)
const cartTotal = computed(() => cartStore.getCartTotal)

const cartItem = computed(() => cartStore.getCartItemById(props.product.id))

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>
<style lang=""></style>
