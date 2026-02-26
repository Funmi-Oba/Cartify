<template lang="">
  <Swiper :slides-per-view="1" :loop="true" class="w-full">
    <SwiperSlide v-for="product in products" :key="product.name">
      <div class="w-full ">
        <div class="relative">
          <img :src="product.image" class="object-cover w-full h-auto" alt="" />
          <button class="absolute left-0 p-1 -translate-y-1/2 bg-white shadow top-1/2">
            <ChevronLeftIcon class="w-6 h-6 text-[#333]" />
          </button>
          <button class="absolute right-0 p-1 -translate-y-1/2 bg-white shadow top-1/2">
            <ChevronRightIcon class="w-6 h-6 text-[#333]" />
          </button>
        </div>
        <div class="mt-4">
          <p class="font-bold">{{ product.name }}</p>
          <div class="flex items-center gap-2">
            <span class="font-bold text-[#333]">{{ product.price }}</span>
            <span class="font-bold line-through ">{{ product.oldPrice }}</span>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const products = [
  {
    name: 'Coco Rose Body',
    price: '$55.00',
    oldPrice: '$75.00',
    image: 'https://lezada-demo.myshopify.com/cdn/shop/products/per5_360x.jpg?v=1551249634',
  },
  {
    name: 'Organic Moon Fruit',
    price: '$39.00',
    oldPrice: '$60.00',
    image: 'https://lezada-demo.myshopify.com/cdn/shop/products/per1_360x.jpg?v=1551249474',
  },
]
</script>
<style lang=""></style>
