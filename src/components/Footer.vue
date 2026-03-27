<template lang="">
  <div class="bg-[#f8f8f8] py-10 md:py-20 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
    
    <!-- Left Side -->
    <div class="flex flex-col space-y-5 text-center text-[#7e7e7e]">
      <div class="flex flex-wrap justify-center gap-4 md:gap-10">
        <router-link to="#" class="hover:text-[#333]">Search</router-link>
        <router-link to="#" class="hover:text-[#333]">About Us</router-link>
        <router-link to="#" class="hover:text-[#333]">Contact</router-link>
        <router-link to="#" class="hover:text-[#333]">Policy</router-link>
        <router-link to="#" class="hover:text-[#333]">Faqs</router-link>
      </div>
      <p class="text-sm md:text-base">
        © 2018 lezada. All Rights Reserved | <b>(+00) 123 567990</b> | contact@lezada.com
      </p>
    </div>

    <!-- Right Side -->
    <div class="flex flex-col items-center md:items-end space-y-5">
      
      <!-- Social Icons -->
      <div class="flex space-x-6">
        <div class="relative group/tooltip">
          <Icon icon="bi:facebook" class="w-4 h-4 cursor-pointer" />
          <span class="text-xs absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none">
            Facebook
            <span class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"></span>
          </span>
        </div>
        <div class="relative group/tooltip">
          <Icon icon="bi:twitter" class="w-4 h-4 cursor-pointer" />
          <span class="text-xs absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none">
            Twitter
            <span class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"></span>
          </span>
        </div>
        <div class="relative group/tooltip">
          <Icon icon="bi:instagram" class="w-4 h-4 cursor-pointer" />
          <span class="text-xs absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none">
            Instagram
            <span class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"></span>
          </span>
        </div>
        <div class="relative group/tooltip">
          <Icon icon="bi:linkedin" class="w-4 h-4 cursor-pointer" />
          <span class="text-xs absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none">
            LinkedIn
            <span class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"></span>
          </span>
        </div>
        <div class="relative group/tooltip">
          <Icon icon="bi:youtube" class="w-4 h-4 cursor-pointer" />
          <span class="text-xs absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none">
            YouTube
            <span class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[#333]"></span>
          </span>
        </div>
      </div>

      <!-- Payment Icons -->
      <div class="flex flex-wrap justify-center md:justify-end gap-3 mt-2">
        <div class="relative group/tooltip">
          <Icon icon="logos:visa" class="w-8 h-8" />
          <span class="text-xs absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none">Visa</span>
        </div>
        <div class="relative group/tooltip">
          <Icon icon="logos:mastercard" class="w-8 h-8" />
          <span class="text-xs absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none">Mastercard</span>
        </div>
        <div class="relative group/tooltip">
          <Icon icon="logos:amex" class="w-8 h-8" />
          <span class="text-xs absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none">Amex</span>
        </div>
        <div class="relative group/tooltip">
          <Icon icon="logos:paypal" class="w-8 h-8" />
          <span class="text-xs absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none">PayPal</span>
        </div>
        <div class="relative group/tooltip">
          <Icon icon="logos:dinersclub" class="w-8 h-8" />
          <span class="text-xs absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none">Diners Club</span>
        </div>
        <div class="relative group/tooltip">
          <Icon icon="logos:discover" class="w-8 h-8" />
          <span class="text-xs absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity bg-[#333] text-white px-3 py-2 whitespace-nowrap pointer-events-none">Discover</span>
        </div>
      </div>

      <!-- Currency & Language Selects -->
      <div class="flex flex-wrap justify-center md:justify-end gap-4 mt-2 text-[#7e7e7e]">
        <select class="bg-transparent border border-[#7e7e7e] font-bold px-4 py-2">
          <option>USD ($)</option>
          <option>EURO (€)</option>
          <option>POUNDS (£)</option>
        </select>
        <select class="bg-transparent border border-[#7e7e7e] font-bold px-4 py-2">
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
      </div>

    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>
<style lang=""></style>