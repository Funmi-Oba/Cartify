<template>
  <!-- Backdrop -->
  <div class="fixed inset-0 z-50 bg-black/80 overflow-y-auto" @click.self="$emit('close')">
    <!-- Modal Container -->
    <div class="min-h-full flex justify-center py-10 px-40">
      <!-- White Box -->
      <div class="relative bg-white shadow-xl overflow-visible max-w-full">
        <!-- Close Button -->
        <button
          type="button"
          class="absolute shadow-lg top-3 right-3 bg-[#6A7E8A] text-white text-sm flex items-center justify-center w-8 h-8 cursor-pointer rounded-full"
          @click="$emit('close')"
        >
          x
        </button>

        <!-- Content -->
        <div class="flex flex-col items-center justify-center p-5">
          <h1 class="text-[#333] font-extrabold text-2xl">COMPARE PRODUCT</h1>
          <div class="border-b border-[#c0c0c0] w-full mb-4 -mx-5"></div>

          <div class="overflow-x-auto w-full">
            <table class="border-collapse border border-[#e7e7e7]">
              <tbody class="text-[#777]">
                <!-- Action Row -->
                <tr>
                  <td
                    class="sticky left-0 bg-white z-10 px-5 py-5 font-bold text-[#484848] border border-[#e7e7e7] whitespace-nowrap"
                  >
                    Action
                  </td>
                  <td
                    v-for="item in compareStore.getComparedProducts"
                    :key="item.id"
                    class="px-5 py-5 text-center border border-[#e7e7e7]"
                  >
                    <button @click="compareStore.removeProduct(item.id)">
                      <XMarkIcon class="text-[#7f7f7f] size-6" />
                    </button>
                  </td>
                </tr>

                <!-- Product Name Row -->
                <tr class="hover:bg-[#ebebeb]">
                  <td
                    class="z-10 px-5 py-5 font-bold text-[#484848] border border-[#e7e7e7] whitespace-nowrap"
                  >
                    Product Name
                  </td>
                  <td
                    v-for="item in compareStore.getComparedProducts"
                    :key="item.id"
                    class="px-5 py-5 text-center border border-[#e7e7e7]"
                  >
                    {{ item.id }}. {{ item.name }}
                  </td>
                </tr>

                <!-- Product Image Row -->
                <tr class="hover:bg-[#ebebeb]">
                  <td
                    class="z-10 px-5 py-5 font-bold text-[#484848] border border-[#e7e7e7] whitespace-nowrap"
                  >
                    Product Image
                  </td>
                  <td
                    v-for="item in compareStore.getComparedProducts"
                    :key="item.id"
                    class="px-5 py-5 border border-[#e7e7e7]"
                  >
                    <div class="flex flex-col items-center">
                      <img :src="item.image" class="object-contain size-50 " />
                    <span class="text-[#D82E2E]">${{ item.price }}</span>  
                     <router-link :to="{ name: 'product', params: { id: item.id } }">
                     <span class="hover:text-[#D82E2E] text-sm">VIEW PRODUCT</span>  
                     </router-link>
                    </div>
                  </td>
                </tr>

                <!-- Product Description Row -->
                <tr class="hover:bg-[#ebebeb]">
                  <td
                    class="z-10 px-5 py-5 font-bold text-[#484848] border border-[#e7e7e7] whitespace-nowrap"
                  >
                    Product Description
                  </td>
                  <td
                    v-for="item in compareStore.getComparedProducts"
                    :key="item.id"
                    class="px-5 py-5 text-center border border-[#e7e7e7] max-w-xs"
                  >
                    {{ item.description }}
                  </td>
                </tr>

                <!-- Availability Row -->
                <tr class="hover:bg-[#ebebeb]">
                  <td
                    class="z-10 px-5 py-5 font-bold text-[#484848] border border-[#e7e7e7] whitespace-nowrap"
                  >
                    Availability
                  </td>
                  <td
                    v-for="item in compareStore.getComparedProducts"
                    :key="item.id"
                    class="px-5 py-5 text-center border border-[#e7e7e7]"
                  >
                    <span v-if="item.stock" class="text-green-600">In Stock</span>
                    <span v-else class="text-red-600">Unavailable</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCompareStore } from '@/stores/compare'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { onMounted, onUnmounted } from 'vue'

const compareStore = useCompareStore()
const emit = defineEmits(['close'])
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
onMounted(() => {
  document.body.style.overflow = 'hidden'
})
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped></style>
