<template lang="">
  <div class="sticky top-0 z-50 flex items-center justify-between py-7 bg-white">
    <div>
      <h1 class="text-3xl font-semibold leading-3 tracking-widest text-center text-[#3d3d3d]">
        CARTIFY
      </h1>
    </div>
    <nav class="hidden md:block">
      <ul class="space-x-8 text-[#7e7e7e] text-base hidden md:flex">
        <li class="hover:text-[#333] hover:underline">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="hover:text-[#333] hover:underline">  <router-link :to="{ name: 'allCollections' }">Shop</router-link></li>
        <li class="relative" @mouseenter="openCatalog = true" @mouseleave="openCatalog = false">
          <router-link to="#" class="flex items-center hover:text-[#333] hover:underline"
            >Catalog
            <ChevronDownIcon class="size-3 ml-1" />
          </router-link>
          <CatalogMenu v-if="openCatalog" />
        </li>
        <li class="relative" @mouseenter="openBlog = true" @mouseleave="openBlog = false">
          <router-link to="#" class="flex items-center hover:text-[#333] hover:underline"
            >Blog <ChevronDownIcon class="size-3 ml-1"
          /></router-link>
          <BlogMenu v-if="openBlog" />
        </li>
        <li class="relative" @mouseenter="openPages = true" @mouseleave="openPages = false">
          <router-link to="#" class="flex items-center hover:text-[#333] hover:underline"
            >Pages <ChevronDownIcon class="size-3 ml-1"
          /></router-link>
          <PagesMenu v-if="openPages" />
        </li>
      </ul>
    </nav>
    <div>
      <IconArea class="" />
    </div>
    <div class="block md:hidden">
      <Bars3Icon class="size-6" @click="isMenuOpen = !isMenuOpen" />
    </div>
  </div>
  <div v-if="isMenuOpen" class="fixed inset-0 z-50 bg-black/40" @click="isMenuOpen = false">   
    <MobileNavBarMenu/>
  </div>
  
</template>
<script setup>
import IconArea from './IconArea.vue'
import { ChevronDownIcon, Bars3Icon } from '@heroicons/vue/24/solid'
import CatalogMenu from '@/components/CatalogMenu.vue'
import MobileNavBarMenu from '@/components/MobileNavBarMenu.vue'
import BlogMenu from '@/components/BlogMenu.vue'
import PagesMenu from '@/components/PagesMenu.vue'
import { ref } from 'vue'

const openCatalog = ref(false)
const openBlog = ref(false)
const openPages = ref(false)
const isMenuOpen = ref(false)
</script>
<style lang=""></style>
