<template lang="">
  <div
    class="absolute top-0 right-0 w-4/5 bg-white h-screen px-5 py-10 overflow-y-scro shadow-lg md:w-95"
  >
    <div class="flex justify-between border-b border-[#eee]">
      <h2 class="text-[#333] text-xl">Cart</h2>
      <XMarkIcon class="text-[#333] size-6" @click="$emit('close')" />
    </div>
    <div v-if="cart.length === 0" class="mt-5">
      <h2 class="text-[#333] text-xl">Your cart is currently empty.</h2>
    </div>
    <div v-else class="">
      <div class="flex-1 overflow-y-scroll h-100">
        <div
          v-for="item in cart"
          :key="item.id"
          class="flex items-start justify-between mt-3 py-3 border-b border-[#eee]"
        >
          <div class="md:p-2 p-1">
            <img :src="item.image" class="object-contain w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <div class="flex flex-col justify-center p-2 flex-1">
            <h2 class="text-[#333] text-sm">{{ item.id }}. {{ item.name }}</h2>
            <p class="text-[#777] text-xs">
              {{ item.quantity }} x
              <span class="text-[#333] font-medium text-sm">${{ item.price }}</span>
            </p>
          </div>
          <div class="p-2">
            <XMarkIcon @click="deleteFromCart(item.id)" class="size-3 hover:text-[#e5717f]" />
          </div>
        </div>
      </div>
      <div class="flex justify-between text-[#333] font-bold text-lg border-b border-[#eee] mt-5">
        <h2>Total:</h2>
        <h2>${{ cartTotal.toFixed(2) }}</h2>
      </div>
      <div class="flex mt-10 space-x-2">
        <input type="checkbox" id="policy" v-model="agreeToTerms" />
        <label class="text-[#777] text-sm sm:text-lg" for="policy"
          >I agree with the terms and conditions</label
        >
      </div>
      <router-link :to="{name: 'checkout'}">
      <CustomButton
        :disabled="!agreeToTerms"
        class="w-full mt-4 mb-3 text-white uppercase transition-colors border-none"
        :class="agreeToTerms ? 'bg-[#d3122a] cursor-pointer' : 'bg-[#e5717f] cursor-not-allowed'"
      >
        <template #button-name>Checkout</template>
      </CustomButton>
      </router-link>
      <CustomButton
        @click="viewCart()"
        class="w-full bg-[#333] text-white uppercase hover:bg-[#d3122a] hover:text-white transition-colors"
      >
        <template #button-name> View Cart </template>
      </CustomButton>
    </div>
  </div>
</template>
<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
import CustomButton from './CustomButton.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'

const cartStore = useCartStore()
const router = useRouter()
const cart = computed(() => cartStore.getCart)
const cartTotal = computed(() => cartStore.getCartTotal)
const agreeToTerms = ref(false)
const emit = defineEmits('close')
const deleteFromCart = (id) => cartStore.deleteFromCart(id)

const viewCart = () => {
  window.location.href = '/cart'
}
onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>
<style lang=""></style>
