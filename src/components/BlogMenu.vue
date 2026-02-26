<template lang="">
  <div class="absolute px-10 py-10 mt-6 bg-white shadow-xl w-80 top-full">
    <div class="absolute inset-x-0 h-6 -top-6"></div>
    <ul class="space-y-4">
      <li class="relative flex items-center justify-between cursor-pointer group">
        <div class="hover:text-[#333] hover:underline cursor-pointer">Standard Layout</div>
        <span><ChevronRightIcon class="w-4 h-4" /></span>
        <ul
          class="absolute top-0 hidden p-10 mr-2 space-y-4 bg-white shadow-xl w-80 right-full group-hover:block"
        >
          <li class="hover:text-[#333] hover:underline cursor-pointer">Left Sidebar</li>
          <li class="hover:text-[#333] hover:underline cursor-pointer">Right Sidebar</li>
          <li class="hover:text-[#333] hover:underline cursor-pointer">Full Width</li>
        </ul>
      </li>

      <li class="relative flex items-center justify-between cursor-pointer group">
        <div class="hover:text-[#333] hover:underline cursor-pointer">Grid Layout</div>
        <span><ChevronRightIcon class="w-4 h-4" /></span>
        <ul
          class="absolute top-0 hidden p-10 space-y-4 bg-white shadow-xl w-80 right-full group-hover:block"
        >
          <li class="hover:text-[#333] hover:underline cursor-pointer">Left Sidebar</li>
          <li class="hover:text-[#333] hover:underline cursor-pointer">Right Sidebar</li>
          <li class="hover:text-[#333] hover:underline cursor-pointer">Full Width</li>
        </ul>
      </li>

      <li class="relative flex items-center justify-between cursor-pointer group">
        <div class="hover:text-[#333] hover:underline cursor-pointer">List Layout</div>
        <span><ChevronRightIcon class="w-4 h-4" /></span>
        <ul
          class="absolute top-0 hidden p-10 space-y-4 bg-white shadow-xl w-80 right-full group-hover:block"
        >
          <li class="hover:text-[#333] hover:underline cursor-pointer">Left Sidebar</li>
          <li class="hover:text-[#333] hover:underline cursor-pointer">Right Sidebar</li>
          <li class="hover:text-[#333] hover:underline cursor-pointer">Full Width</li>
        </ul>
      </li>

      <li class="relative flex items-center justify-between cursor-pointer group">
        <div class="hover:text-[#333] hover:underline cursor-pointer">Masonry Layout</div>
        <span><ChevronRightIcon class="w-4 h-4" /></span>
        <ul
          class="absolute top-0 hidden p-10 space-y-4 bg-white shadow-xl w-80 right-full group-hover:block"
        >
          <li class="hover:text-[#333] hover:underline cursor-pointer">Left Sidebar</li>
          <li class="hover:text-[#333] hover:underline cursor-pointer">Right Sidebar</li>
          <li class="hover:text-[#333] hover:underline cursor-pointer">Full Width</li>
        </ul>
      </li>

      <li class="relative flex items-center justify-between cursor-pointer group">
        <div class="hover:text-[#333] hover:underline cursor-pointer">Single Post Layout</div>
        <span><ChevronRightIcon class="w-4 h-4" /></span>
        <ul
          class="absolute top-0 hidden p-10 space-y-4 bg-white shadow-xl w-80 right-full group-hover:block"
        >
          <li class="hover:text-[#333] hover:underline cursor-pointer">Left Sidebar</li>
          <li class="hover:text-[#333] hover:underline cursor-pointer">Right Sidebar</li>
          <li class="hover:text-[#333] hover:underline cursor-pointer">Full Width</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
</script>
<style lang=""></style>
