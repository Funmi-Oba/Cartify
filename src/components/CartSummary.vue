<template>
  <div>
    <div class="h-auto overflow-y-scroll">
      <div
        v-for="item in cart"
        :key="item.id"
        class="flex items-center justify-between mt-3 py-3 border-b border-[#eee]"
      >
        <div class="flex items-center justify-center">
          <div class=" relative border border-[#e7e7e7] rounded-xl mr-3">
            <img
              :src="item.image"
              class="object-contain border-2 border-white rounded-xl size-20"
            />
            <span
            type="button"
            class="absolute z-10 flex items-center justify-center text-xs font-medium text-white bg-black rounded shadow size-5 -top-1 -right-1"
          >
            {{ item.quantity }}
          </span>
          </div>

          <h2 class="text-sm">{{ item.id }}. {{ item.name }}</h2>
        </div>

        <p class="text-sm">${{ item.price }}</p>
      </div>
    </div>
    <div class="flex justify-between mt-5 text-sm">
      <h2>Subtotal:</h2>
      <h2>${{ cartTotal.toFixed(2) }}</h2>
    </div>
    <div class="flex justify-between mt-3 text-sm">
      <h2>Shipping:</h2>
      <h2 v-if="cart.length">$20.00</h2> <h2 v-else>$0.00</h2> 
    </div>
    <div class="flex justify-between text-[#333] font-bold text-lg mt-5">
      <h2>Total:</h2>
      <h2 v-if="cart.length">
        <span class="inline-block text-xs text-[#999] font-normal mr-2">USD</span>${{
          (cartTotal + 20).toFixed(2)
        }}
      </h2>
      <h2 v-else>
        <span class="inline-block text-xs text-[#999] font-normal mr-2">USD</span>$0.00
      </h2>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { computed} from 'vue'

const cartStore = useCartStore()
const cart = computed(() => cartStore.getCart)
const cartTotal = computed(() => cartStore.getCartTotal)


const viewCart = () => {
  window.location.href = '/cart'
}

</script>

<style lang="scss" scoped></style>
