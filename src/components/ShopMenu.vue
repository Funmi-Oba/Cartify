<template lang="">
  <div class="flex-1 h-auto">
    <ul class="space-y-8">
      <!-- Custom Section -->
      <li class="">
        <div
          @click="toggleSection('customMenu')"
          class="flex items-center justify-between cursor-pointer text-2xl text-[#333]"
        >
          Custom Menu
          <span
            ><ChevronDownIcon v-if="openSections.customMenu" class="size-6" />
            <ChevronUpIcon v-else class="size-6"
          /></span>
        </div>
        <ul v-show="openSections.customMenu" class="pt-10 h-auto w-full text-[#666] space-y-2">
          <li class="cursor-pointer hover:text-[#333]">Home</li>
          <li class="cursor-pointer hover:text-[#333]">Shop</li>
          <li class="cursor-pointer hover:text-[#333]">
            <div class="flex items-center justify-between">
              Catalog SALE <span><PlusIcon class="size-4" /></span>
            </div>
          </li>
          <li class="cursor-pointer hover:text-[#333]">
            <div class="flex items-center justify-between">
              Blog <span><PlusIcon class="size-4" /></span>
            </div>
          </li>
          <li class="cursor-pointer hover:text-[#333]">
            <div class="flex items-center justify-between">
              Pages <span><PlusIcon class="size-4" /></span>
            </div>
          </li>
        </ul>
      </li>

      <!-- Availability Section -->
      <li class="">
        <div
          @click="toggleSection('availability')"
          class="flex items-center justify-between cursor-pointer text-2xl text-[#333]"
        >
          Availability
          <span
            ><ChevronDownIcon v-if="openSections.availability" class="size-6" />
            <ChevronUpIcon v-else class="size-6"
          /></span>
        </div>

        <div v-show="openSections.availability" class="pt-10 h-auto w-full text-[#333] space-y-2">
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="inStock" class="w-4 h-4" />
            <label for="inStock">In Stock</label>
          </div>
          <div class="flex items-center space-x-2">
            <input type="checkbox" id="outOfStock" class="w-4 h-4" />
            <label for="outOfStock">Out of Stock</label>
          </div>
        </div>
      </li>

      <!-- Price Section -->
      <li class="">
        <div
          @click="toggleSection('price')"
          class="flex items-center justify-between cursor-pointer text-2xl text-[#333]"
        >
          Price
          <span
            ><ChevronDownIcon v-if="openSections.price" class="size-6" />
            <ChevronUpIcon v-else class="size-6"
          /></span>
        </div>

        <div v-show="openSections.price" class="pt-10 h-auto w-full text-[#333] space-y-4">
          <div class="relative">
            <label for="fromPrice">From</label>
            <span class="absolute left-2 top-10">$</span>
            <input
              type="number"
              id="fromPrice"
              placeholder="0"
              class="w-full pl-5 p-2 mt-2 border border-[#666]/50 focus:outline-none text-[#333] rounded"
            />
          </div>

          <div class="relative">
            <label for="toPrice">To</label>
            <span class="absolute left-2 top-10">$</span>
            <input
              type="number"
              id="toPrice"
              placeholder="110.00"
              class="w-full pl-5 p-2 mt-2 border border-[#666]/50 focus:outline-none text-[#333] rounded"
            />
          </div>
          <CustomButton
            class="bg-[#333] text-white border-[#333] hover:opacity-70 self-start"
          >
            <template #button-name> Filter </template>
          </CustomButton>
        </div>
      </li>

      <!-- Color Section -->
      <li class="">
        <div
          @click="toggleSection('color')"
          class="flex items-center justify-between cursor-pointer text-2xl text-[#333]"
        >
          Color
          <span
            ><ChevronDownIcon v-if="openSections.color" class="size-6" />
            <ChevronUpIcon v-else class="size-6"
          /></span>
        </div>
        <div v-show="openSections.color" class="pt-10 h-auto w-full text-[#333] space-y-2">
          <div class="flex items-center mb-4 space-x-2" v-for="color in colors" :key="color.name">
            <input type="checkbox" class="size-4" />
            <label>{{ color.name }} ({{ color.count }})</label>
          </div>
        </div>
      </li>

      <!-- Size Section -->
      <li class="">
        <div
          @click="toggleSection('size')"
          class="flex items-center justify-between cursor-pointer text-2xl text-[#333]"
        >
          Size
          <span
            ><ChevronDownIcon v-if="openSections.size" class="size-6" />
            <ChevronUpIcon v-else class="size-6"
          /></span>
        </div>
        <div v-show="openSections.size" class="pt-10 h-auto w-full text-[#333] space-y-2">
          <div class="flex items-center mb-4 space-x-2" v-for="size in sizes" :key="size.name">
            <input type="checkbox" class="size-4" />
            <label>{{ size.name }} ({{ size.count }})</label>
          </div>
        </div>
      </li>

      <!-- Product Type section -->

      <li class="">
        <div
          @click="toggleSection('productType')"
          class="flex items-center justify-between cursor-pointer text-2xl text-[#333]"
        >
          Product Type
          <span
            ><ChevronDownIcon v-if="openSections.productType" class="size-6" />
            <ChevronUpIcon v-else class="size-6"
          /></span>
        </div>
        <div v-show="openSections.productType" class="pt-10 h-auto w-full text-[#333] space-y-2">
          <div
            class="flex items-center mb-4 space-x-2"
            v-for="type in productTypes"
            :key="type.name"
          >
            <input type="checkbox" class="size-4" />
            <label>{{ type.name }} ({{ type.count }})</label>
          </div>
        </div>
      </li>

      <!-- Brand Section -->
      <li class="">
        <div
          @click="toggleSection('brand')"
          class="flex items-center justify-between cursor-pointer text-2xl text-[#333]"
        >
          Brand
          <span
            ><ChevronDownIcon v-if="openSections.brand" class="size-6" />
            <ChevronUpIcon v-else class="size-6"
          /></span>
        </div>
        <div v-show="openSections.brand" class="pt-10 h-auto w-full text-[#333] space-y-2">
          <div class="flex items-center mb-4 space-x-2" v-for="brand in brands" :key="brand.name">
            <input type="checkbox" class="size-4" />
            <label>{{ brand.name }} ({{ brand.count }})</label>
          </div>
        </div>
      </li>

      <!-- Material Section -->
         <li class="">
        <div
          @click="toggleSection('material')"
          class="flex items-center justify-between cursor-pointer text-2xl text-[#333]"
        >
          Material
          <span
            ><ChevronDownIcon v-if="openSections.material" class="size-6" />
            <ChevronUpIcon v-else class="size-6"
          /></span>
        </div>
        <div v-show="openSections.material" class="pt-10 h-auto w-full text-[#333] space-y-2">
          <div class="flex items-center mb-4 space-x-2" v-for="material in materials" :key="material.name">
            <input type="checkbox" class="size-4" />
            <label>{{ material.name }} ({{ material.count }})</label>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ChevronDownIcon, ChevronUpIcon, PlusIcon } from '@heroicons/vue/24/solid'
import CustomButton from '@/components/CustomButton.vue'
import { reactive } from 'vue'

const toggleSection = (section) => {
  openSections[section] = !openSections[section]
}

const openSections = reactive({
  customMenu: true,
  availability: true,
  price: true,
  color: true,
  size: false,
  productType: false,
  brand: false,
  material: false,
})
const colors = [
  { name: 'black', count: 10 },
  { name: 'blue', count: 16 },
  { name: 'dark wood', count: 1 },
  { name: 'darkred', count: 1 },
  { name: 'gold', count: 5 },
  { name: 'gray', count: 5 },
  { name: 'green', count: 9 },
  { name: 'grey', count: 1 },
  { name: 'honeydew', count: 0 },
  { name: 'ivory', count: 0 },
  { name: 'light wood', count: 1 },
  { name: 'magenta', count: 5 },
  { name: 'maroon', count: 5 },
  { name: 'navy', count: 5 },
  { name: 'orange', count: 3 },
  { name: 'pink', count: 5 },
  { name: 'purple', count: 5 },
  { name: 'red', count: 15 },
  { name: 'violet', count: 5 },
  { name: 'white', count: 13 },
  { name: 'yellow', count: 10 },
]

const sizes = [
  { name: 's', count: 6 },
  { name: 'm', count: 6 },
  { name: 'l', count: 4 },
  { name: 'xl', count: 5 },
  { name: 'xxl', count: 2 },
  { name: 'xxxl', count: 2 },
  { name: 'x', count: 3 },
]

const productTypes = [
  { name: 'Type 1', count: 5 },
  { name: 'Type 2', count: 3 },
  { name: 'Type 3', count: 5 },
  { name: 'Type 4', count: 6 },
  { name: 'Type 5', count: 5 },
  { name: 'Type 6', count: 6 },
  { name: 'Type 7', count: 5 },
  { name: 'Type 8', count: 9 },
  { name: 'Type 9', count: 2 },
  { name: 'Type 10', count: 3 },
  { name: 'Type 11', count: 4 },
]
const brands = [
  { name: 'Lezada - Multipurpose eCommerce Shopify Theme', count: 1 },
  { name: 'Vendor 1', count: 5 },
  { name: 'Vendor 2', count: 3 },
  { name: 'Vendor 3', count: 5 },
  { name: 'Vendor 4', count: 6 },
  { name: 'Vendor 5', count: 5 },
  { name: 'Vendor 6', count: 6 },
  { name: 'Vendor 7', count: 5 },
  { name: 'Vendor 8', count: 9 },
  { name: 'Vendor 9', count: 2 },
  { name: 'Vendor 10', count: 3 },
  { name: 'Vendor 11', count: 4 },
]

const materials = [
  { name: 'fiber', count: 3 },
  { name: 'leather', count: 3 },
  { name: 'metal', count: 3 },
  { name: 'resin', count: 3 },
  { name: 'slag', count: 3 },
]
</script>
<style lang=""></style>
