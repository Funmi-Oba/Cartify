<template>
  <div class="container relative w-full mx-auto bg-white">
    <!-- Left Arrow -->
    <button @click="slidePrev" class="absolute z-10 -translate-y-1/2 left-2 top-1/2">
      <ChevronLeftIcon class="w-8 h-8 md:w-12 md:h-12" />
    </button>

    <!-- Right Arrow -->
    <button @click="slideNext" class="absolute z-10 -translate-y-1/2 right-2 top-1/2">
      <ChevronRightIcon class="w-8 h-8 md:w-12 md:h-12" />
    </button>

    <!-- Swiper Carousel -->
    <Swiper
      ref="swiperRef"
      :slides-per-view="1"
      :breakpoints="{
        768: { slidesPerView: 1.3, spaceBetween: 40 }
      }"
      :centered-slides="true"
      :loop="true"
      :space-between="16"
      class="max-w-5xl mx-auto hero-swiper"
    >
      <SwiperSlide v-for="product in products" :key="product.id">
        <div class="relative h-[260px] md:h-[420px] rounded-lg overflow-hidden">
          <img :src="product.image" class="absolute inset-0 object-cover w-full h-full" alt="" />

          <!-- Overlay Content -->
          <div class="relative flex items-center h-full px-8 md:px-28">
            <div class="max-w-[180px] md:max-w-xs">
              <p
                class="mb-2 md:mb-4 text-xs md:text-base font-bold tracking-widest uppercase"
                :style="{ color: product.accessoriesColor }"
              >
                Accessories
              </p>

              <h2 class="mb-4 md:mb-8 text-xl md:text-4xl font-semibold leading-tight text-gray-800">
                {{ product.name }}
              </h2>

              <router-link :to="{ name: 'allCollections' }">
                <button class="px-6 md:px-10 py-2 md:py-4 text-xs md:text-sm tracking-widest text-white bg-[#333] hover:bg-black transition cursor-pointer">
                  SHOP NOW
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import 'swiper/css'

const swiperRef = ref(null)

const slideNext = () => swiperRef.value.swiper.slideNext()
const slidePrev = () => swiperRef.value.swiper.slidePrev()

const products = [
  {
    id: 1,
    name: 'Bottle Grinder, Small, 2-Piecehe',
    accessoriesColor: '#68aaeb',
    image: 'https://lezada-demo.myshopify.com/cdn/shop/files/banner-carousel-1_1170x.jpg?v=1613746686',
  },
  {
    id: 2,
    name: 'Bottle Grinder, Small, 2-Piecehe',
    accessoriesColor: '#c5a374',
    image: 'https://lezada-demo.myshopify.com/cdn/shop/files/banner-carousel-2_1170x.jpg?v=1613746686',
  },
  {
    id: 3,
    name: 'Bottle Grinder, Small, 2-Piecehe',
    accessoriesColor: '#7a9f63',
    image: 'https://lezada-demo.myshopify.com/cdn/shop/files/banner-carousel-3_1170x.jpg?v=1613746686',
  },
  {
    id: 4,
    name: 'Bottle Grinder, Small, 2-Piecehe',
    accessoriesColor: '#c5a374',
    image: 'https://lezada-demo.myshopify.com/cdn/shop/files/banner-carousel-4_1170x.jpg?v=1613746686',
  },
]
</script>

<style lang="css">
.hero-swiper .swiper-slide {
  opacity: 0.5;
  transform: scale(0.95);
  transition: all 0.4s ease;
}
.hero-swiper .swiper-slide-active {
  opacity: 1;
  transform: scale(1);
}
</style>