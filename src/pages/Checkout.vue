<template>
  <div class="overflow-x-scroll px-30">
    <div class="flex items-center justify-between py-5">
      <router-link :to="{ name: 'home' }" class="text-xl font-semibold text-black">
        Cartify - Multipurpose eCommerce Shopify Theme
      </router-link>
      <button @click="viewCart()" class="cursor-pointer">
        <Icon icon="uil-cart" class="text-black size-7" />
      </button>
    </div>
    <div class="border-b border-[#e7e7e7] -mx-30"></div>

    <div class="flex items-start">
      <div class="flex-1 mr-10">
        <div class="flex items-center justify-between my-10 mb-5">
          <h3 class="text-xl font-semibold text-black">Contact</h3>
          <router-link :to="{ name: 'login' }" class="text-sm text-black underline"
            >Sign in</router-link
          >
        </div>

        <form @submit.prevent="payNow">
          <input
            type="text"
            placeholder="Email or mobile phone number"
            v-model="email"
            class="w-full mb-3 p-3 placeholder:text-[#666] border border-[#999] placeholder:text-sm rounded-lg"
          />
          <div class="flex items-center mb-10">
            <input type="checkbox" class="mr-2 size-4" />
            <label class="text-sm text-black">Email me with news and offers</label>
          </div>
          <h2 class="mb-5 text-xl font-semibold text-black">Delivery</h2>
          <select
            name="country"
            id="country"
            placeholder="Country/region"
            class="w-full mb-3 p-3 placeholder:text-[#666] border border-[#999] placeholder:text-sm rounded-lg"
          >
            <option value="Nigeria">Nigeria</option>
          </select>
          <div class="flex items-center gap-3">
            <input
              type="text"
              placeholder="First name (optional)"
              v-model="firstName"
              class="w-1/2 mb-3 p-3 placeholder:text-[#666] border border-[#999] placeholder:text-sm rounded-lg"
            />
            <input
              type="text"
              placeholder="Last name"
              v-model="lastName"
              class="w-1/2 mb-3 p-3 placeholder:text-[#666] border border-[#999] placeholder:text-sm rounded-lg"
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            v-model="shippingAddress"
            class="w-full mb-3 p-3 placeholder:text-[#666] border border-[#999] placeholder:text-sm rounded-lg"
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            class="w-full mb-3 p-3 placeholder:text-[#666] border border-[#999] placeholder:text-sm rounded-lg"
          />
          <div class="flex items-center justify-between gap-3">
            <input
              type="text"
              placeholder="City"
              class="mb-3 p-3 placeholder:text-[#666] border border-[#999] placeholder:text-sm rounded-lg"
            />
            <input
              type="text"
              placeholder="State"
              class="mb-3 p-3 placeholder:text-[#666] border border-[#999] placeholder:text-sm rounded-lg"
            />
            <input
              type="text"
              placeholder="Postal code (optional)"
              class="mb-3 p-3 placeholder:text-[#666] border border-[#999] placeholder:text-sm rounded-lg"
            />
          </div>
          <div class="flex items-center mb-5">
            <input type="checkbox" class="mr-2 size-4" />
            <label class="text-sm text-black">Save this information for next time</label>
          </div>
          <h2 class="mb-3 text-base font-semibold text-black">Shipping method</h2>
          <div class="flex items-center justify-between p-3 border bg-[#f6f6f6] rounded-lg mb-5">
            <p class="text-sm">International Shipping</p>
            <strong class="text-sm">$20.00</strong>
          </div>
          <h3 class="mb-2 text-xl font-semibold text-black">Payment</h3>
          <p class="text-sm mb-3 text-[#0000008f]">All transactions are secure and encrypted.</p>
          <div v-if="checkoutStore.message" class="flex items-center justify-center p-3 mb-5 text-green-700 bg-amber-100">
            <CheckCircleIcon class="mr-2 size-10" />
          <h2 class="text-lg font-semibold uppercase">
            {{ checkoutStore.message }}
          </h2>
          </div>
          

          <div class="px-4 rounded-lg bg-[#0000000b] space-y-3">
            <div
              class="flex items-center p-3 justify-between border bg-[#f6f6f6] rounded-t-lg -mx-4"
            >
              <div class="flex items-center">
                <input type="radio" value="card" v-model="paymentMethod" class="mr-2 size-4" />
                <span>Credit Card</span>
              </div>
              <img
                class=""
                src="https://lezada-demo.myshopify.com/cdn/shopifycloud/checkout-web/assets/c1/assets/bogus.CIsYlO1z.svg"
              />
            </div>
            <div v-if="paymentMethod === 'card'" class="space-y-3">
              <input
                type="number"
                placeholder="Card number"
                class="w-full p-3 placeholder:text-[#666] bg-white border border-[#999] placeholder:text-sm rounded-lg"
              />
              <div class="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Expiry date (MM/YY)"
                  class="w-1/2 p-3 placeholder:text-[#666] bg-white border border-[#999] placeholder:text-sm rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Security Code"
                  class="w-1/2 p-3 placeholder:text-[#666] bg-white border border-[#999] placeholder:text-sm rounded-lg"
                />
              </div>
              <input
                type="text"
                placeholder="Name on card"
                class="w-full p-3 placeholder:text-[#666] bg-white border border-[#999] placeholder:text-sm rounded-lg"
              />
              <div class="flex items-center mb-5">
                <input
                  type="checkbox"
                  id="billingAddress"
                  v-model="useShippingAsBilling"
                  class="mr-2 size-4"
                />
                <label for="billingAddress" class="text-sm text-black"
                  >Use shipping address as billing address</label
                >
              </div>
            </div>

            <!-- Pay with cash -->
            <div
              class="flex items-center mb-5 p-3 -mx-4 bg-white border border-[#999] rounded-b-lg"
            >
              <div class="flex items-center">
                <input type="radio" value="cash" v-model="paymentMethod" class="mr-2 size-4" />
                <span> Cash on Delivery (COD)</span>
              </div>
            </div>
          </div>

          <!-- <div v-if="paymentMethod === 'cash'">
            <h2 class="mb-3 text-base font-semibold text-black">Billing Address</h2>
            <div class="flex items-center mb-5">
              <input
                type="radio"
                id="billingAddress"
                v-model="useShippingAsBilling"
                class="mr-2 size-4"
              />
              <label for="billingAddress" class="text-sm text-black"
                >Same as shipping address</label
              >
            </div>
             <div class="flex items-center mb-5">
              <input
                type="radio"
                id="billingAddress"
                class="mr-2 size-4"
              />
              <label for="billingAddress" class="text-sm text-black"
                >Use a different billing address</label
              >
            </div>
          </div> -->

          <button
            type="submit"
            class="w-full py-3 mt-5 mb-10 font-bold text-white bg-black rounded-lg"
          >
            Pay now
          </button>
        </form>

        <div class="border border-[#e7e7e7] mb-5"></div>
        <p class="text-xs text-[#0000008f]">
          All rights reserved Cartify - Multipurpose eCommerce Shopify Theme
        </p>
      </div>

      <div class="self-stretch border-l border-[#e7e7e7]"></div>

      <div class="flex-1 bg-[#fafafa] -mr-30">
        <CartSummary class="my-10 ml-10 mr-30" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
import CartSummary from '@/components/CartSummary.vue'
import Cart from './Cart.vue'
import { useUserStore } from '@/stores/user'
import { computed, ref, watch } from 'vue'
import { useCheckoutStore } from '@/stores/checkout'


const userStore = useUserStore()
const checkoutStore = useCheckoutStore()

const currentUser = computed(() => userStore.getCurrentUser)

const email = ref('')
const firstName = ref('')
const lastName = ref('')
const shippingAddress = ref('')
const useShippingAsBilling = ref(true)
const manualBillingAddress = ref('')
const paymentMethod = ref('card')

watch(
  currentUser,
  (user) => {
    if (!user) return

    email.value = user.email ?? ''
    firstName.value = user.firstName ?? ''
    lastName.value = user.name ?? ''
    shippingAddress.value = user.address ?? ''
  },
  { immediate: true },
)

const billingAddress = computed(() => {
  return useShippingAsBilling.value ? shippingAddress.value : manualBillingAddress.value
})

const payNow = async () => {
  const payload = {
    payment_method: paymentMethod.value,
    shipping_address: shippingAddress.value,
    billing_address: billingAddress.value,
  }
  console.log(paymentMethod.value, shippingAddress.value, billingAddress.value)

  await checkoutStore.checkout(payload)
  
}

const viewCart = () => {
  window.location.href = '/cart'
}
</script>

<style lang="scss" scoped></style>
