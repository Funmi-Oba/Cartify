<template lang="">
  <div class="absolute top-0 left-0 w-3/5 h-screen p-10 bg-white shadow-lg">
    <div class="relative">
      <input
        type="text"
        name="search"
        placeholder="Search our store"
        class="w-full bg-[#f2f2f2] text-[#777] font-medium focus:outline-none px-4 py-2 mb-8"
      />

      <MagnifyingGlassIcon class="absolute w-5 h-5 text-[#777] right-4 top-2" />
    </div>

    <nav class="">
      <ul class="space-x-8 text-[#7e7e7e] text-lg flex flex-col gap-6">
        <li class="hover:text-[#333] cursor-pointer">Home</li>
        <li class="hover:text-[#333] cursor-pointer">Shop</li>
        <li class="relative">
          <router-link to="/catalog" class="flex items-center hover:text-[#333] cursor-pointer"
            >Catalog
          </router-link>
        </li>
        <li class="relative">
          <router-link to="/blog" class="flex items-center hover:text-[#333] cursor-pointer"
            >Blog
          </router-link>
        </li>
        <li class="relative">
          <router-link to="/pages" class="flex items-center hover:text-[#333] cursor-pointer"
            >Pages
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="flex items-center justify-center mt-20 space-x-6">
      <div class="relative group/tooltip">
        <Icon icon="bi:facebook" class="w-4 h-4" />
        <span
          class="text-xs absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none"
        >
          Facebook
          <span
            class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"
          ></span>
        </span>
      </div>

      <div class="relative group/tooltip">
        <Icon icon="bi:twitter" class="w-4 h-4" />
        <span
          class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 text-xs whitespace-nowrap pointer-events-none"
        >
          Twitter
          <span
            class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"
          ></span>
        </span>
      </div>
      <div class="relative group/tooltip">
        <Icon icon="bi:instagram" class="w-4 h-4" />
        <span
          class="text-xs absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none"
        >
          Instagram
          <span
            class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"
          ></span>
        </span>
      </div>
      <div class="relative group/tooltip">
        <Icon icon="bi:linkedin" class="w-4 h-4" />
        <span
          class="text-xs absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none"
        >
          LinkedIn
          <span
            class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"
          ></span>
        </span>
      </div>
      <div class="relative group/tooltip">
        <Icon icon="bi:youtube" class="w-4 h-4" />
        <span
          class="text-xs absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none"
        >
          YouTube
          <span
            class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"
          ></span>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import { Icon } from '@iconify/vue'
</script>
<style lang=""></style>
