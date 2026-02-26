<template lang="">
  <div v-if ="cart.length===0" class="flex flex-col items-center justify-center">
    <div class="flex items-center justify-center w-full text-[#856404] bg-[#fff3cd]  mt-20 ">
      <p class="p-5">Shopping Cart is Empty.</p>
     
    </div>
    
      <Icon icon="hugeicons-shopping-cart-check-in-02" class="mt-10 size-25 text-[#333]"/>
      <p class="p-5 text-[#333] text-base">You have no items in your shopping cart.</p>
       <router-link :to="{name: 'allCollections'}">
        <CustomButton class="bg-[#333] flex items-center justify-center uppercase text-white border hover:text-[#333] hover:bg-white text-sm mb-10">
          <template #button-name>
            <span class="inline-block"><ChevronLeftIcon class="mr-1 size-4"/></span> continue shopping
          </template>
        </CustomButton>
      </router-link>
  </div>
  <div v-else>
     <div class="my-20">
    <div class="overflow-x-auto">
      <table class="w-full border border-collapse border-spacing-y-2">
        <thead>
          <tr class="uppercase text-[#484848]">
            <th class="px-4 py-5 border border-[#e7e7e7]" colspan="2">Product</th>
            <th class="px-4 py-5 border border-[#e7e7e7]">Price</th>
            <th class="px-4 py-5 border border-[#e7e7e7]">Quantity</th>
            <th class="px-4 py-5 border border-[#e7e7e7]">Total</th>
            <th class="px-4 py-5 border border-[#e7e7e7]"></th>
          </tr>
        </thead>

        <tbody class="text-[#777]">
          <tr v-for="item in cart" :key="item.id">
            <td class="px-10 py-10 border border-[#e7e7e7]">
              <div class="flex items-center">
                <img :src="item.image" class="object-contain size-30" />
              </div>
            </td>
            <td class="px-10 py-10 text-center border border-[#e7e7e7]">
              {{ item.id }}. {{ item.name }}
            </td>
            <td class="px-10 py-10 text-center border border-[#e7e7e7] text-[#333] font-medium">
              ${{ item.price }}
            </td>
            <td class="px-10 py-10 text-center border border-[#e7e7e7]">
              <div class="flex items-center justify-center border-b-2 border-[#e7e7e7]">
                <button
                  @click="decreaseQuantity(item.id)"
                  class="cursor-pointer px-4 py-2 text-[#333]"
                >
                  <MinusIcon class="size-5" />
                </button>
                <span class="inline-block w-10 text-lg text-center">
                  {{ item.quantity }}
                </span>
                <button
                  @click="increaseQuantity(item.id)"
                  class="cursor-pointer px-4 py-2 text-[#333]"
                >
                  <PlusIcon class="size-5" />
                </button>
              </div>
            </td>
            <td class="px-10 py-10 text-center border border-[#e7e7e7] text-[#333] font-medium">
              ${{ totalItem(item.id).toFixed(2) }}
            </td>
            <td class="px-10 py-10 text-center border border-[#e7e7e7]">
              <button @click="deleteFromCart(item.id)">
                <XMarkIcon
                  class="p-4 border-2 text-[#c7c3c3] hover:text-[#d3122a] hover:border-[#d3122a] border-[#e7e7e7] size-14"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex justify-end w-full mt-10 space-x-4">
      <CustomButton
        @click="cartStore.getCart"
        class="bg-[#333] text-white uppercase border-[#333] hover:bg-white hover:text-[#333]"
      >
        <template #button-name> Update Cart </template>
      </CustomButton>
      <CustomButton
        class="bg-[#333] text-white uppercase border-[#333] hover:bg-white hover:text-[#333]"
      >
        <template #button-name> Continue Shopping </template>
      </CustomButton>
      <CustomButton
        class="bg-[#333] text-white uppercase border-[#333] hover:bg-white hover:text-[#333]"
      >
        <template #button-name> Clear Cart </template>
      </CustomButton>
    </div>
  </div>

  <div class="flex items-start justify-between my-20">
    <div class="flex flex-col w-1/2 space-y-6">
      <h2 class="text-2xl text-[#333]">Pick a delivery date and Time</h2>
      <div class="max-w-lg space-y-4">
        <!-- Date Input with custom icon -->
        <div class="relative">
          <CalendarIcon
            class="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#999] pointer-events-none"
          />
          <input
            type="date"
            v-model="deliveryDate"
            :min="today"
            class="w-3/4 pl-12 pr-4 py-4 border border-[#ddd] text-[#666] focus:outline-none focus:border-[#999]"
            style="box-shadow: inset 0 0 7px #0000001a"
          />
        </div>

        <!-- Time Input -->
        <input
          type="text"
          v-model="deliveryTime"
          class="w-3/4 px-4 py-4 border border-[#ddd] text-[#999] placeholder:text-[#999] focus:outline-none focus:border-[#999]"
          placeholder="Write delivery time"
          style="box-shadow: inset 0 0 7px #0000001a"
        />
        <p class="text-[#777]">
          Pick delivery date and time as you choose. Delivery Time takes place between 12PM - 4PM
          MON-FRI AND 8AM-11AM SAT.
        </p>

        <h2 class="text-2xl text-[#333] mt-15">Get shipping estimates</h2>
        <input type="" name="" value="" />
      </div>
    </div>
    <div class="bg-[#f7f7f7] w-1/2 px-10 py-10 flex flex-col justify-center items-center">
      <h2 class="text-4xl mb-10 text-[#333]">Cart Totals</h2>

      <table class="w-full border border-collapse border-spacing-y-2">
        <tbody>
          <tr>
            <td
              class="px-4 py-6 text-left border text-[#222] border-[#e7e7e7] uppercase tracking-widest"
            >
              Subtotal
            </td>
            <td class="px-4 py-6 text-right border text-[#777] border-[#e7e7e7]">
              ${{ cartTotal.toFixed(2) }}
            </td>
          </tr>
          <tr>
            <td
              class="px-4 py-6 text-left text-[#222] border border-[#e7e7e7] uppercase tracking-widest"
            >
              Total
            </td>
            <td class="px-4 py-6 text-right text-[#333] font-medium border border-[#e7e7e7]">
              ${{ cartTotal.toFixed(2) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex mt-10 space-x-2">
        <input type="checkbox" id="policy" v-model="agreeToTerms" />
        <label class="text-[#777]" for="policy">I agree with the terms and conditions</label>
      </div>
        <router-link :to="{ name: 'checkout' }">
      <CustomButton
        :disabled="!agreeToTerms"
        class="w-full mt-4 text-white uppercase transition-colors border-none"
        :class="agreeToTerms ? 'bg-[#d3122a] cursor-pointer' : 'bg-[#e5717f] cursor-not-allowed'"
      >
        <template #button-name>
        Proceed to checkout
        </template>
      </CustomButton>
      </router-link>
    </div>
  </div>
  </div>
 
</template>
<script setup>
import { useCartStore } from '@/stores/cart'
import { ref, computed, onMounted } from 'vue'
import { XMarkIcon, MinusIcon, PlusIcon, CalendarIcon, ChevronLeftIcon } from '@heroicons/vue/24/outline'
import { Icon } from '@iconify/vue'
import CustomButton from '@/components/CustomButton.vue'
import { useBreadcrumbStore } from '@/stores/breadcrumb'

const breadcrumbStore = useBreadcrumbStore()
onMounted(() => {
  breadcrumbStore.setCrumbs([{ label: 'Your Shopping Cart' }])
})

const cartStore = useCartStore()
const agreeToTerms = ref(false)
const deliveryDate = ref('')
const deliveryTime = ref('')

const cart = computed(() => cartStore.getCart)

const totalItem = (id) => cartStore.getItemSubtotal(id)
const deleteFromCart = (id) => cartStore.deleteFromCart(id)
const decreaseQuantity = (id) => {
  const item = cartStore.getCartItemById(id)
  if (item.quantity > 1) cartStore.updateCartQuantity({ id, type: 'decrement' })
}
const increaseQuantity = (id) => {
  const item = cartStore.getCartItemById(id)
  if (item.quantity < item.stock) {
    cartStore.updateCartQuantity({ id, type: 'increment' })
  }
  else {
    alert(`Only ${item.stock} items in stock`)
  }
}
const cartTotal = computed(() => cartStore.getCartTotal)

const today = computed(() => {
  const date = new Date()
  return date.toISOString().split('T')[0]
})
</script>

<style>
/* Remove scoped if you have it, or make sure these styles apply */
input[type='date']::-webkit-calendar-picker-indicator {
  opacity: 0 !important;
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

/* Hide the placeholder text completely */
input[type='date']::-webkit-datetime-edit {
  color: transparent;
}

input[type='date']::-webkit-datetime-edit-fields-wrapper {
  color: transparent;
}

input[type='date']::-webkit-datetime-edit-text {
  color: transparent;
}

input[type='date']::-webkit-datetime-edit-month-field {
  color: transparent;
}

input[type='date']::-webkit-datetime-edit-day-field {
  color: transparent;
}

input[type='date']::-webkit-datetime-edit-year-field {
  color: transparent;
}

/* Show the actual date when it has a value */
input[type='date']:valid::-webkit-datetime-edit,
input[type='date']:valid::-webkit-datetime-edit-fields-wrapper,
input[type='date']:valid::-webkit-datetime-edit-text,
input[type='date']:valid::-webkit-datetime-edit-month-field,
input[type='date']:valid::-webkit-datetime-edit-day-field,
input[type='date']:valid::-webkit-datetime-edit-year-field {
  color: #666;
}
</style>
