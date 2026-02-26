<template lang="">
  <div
    class="absolute w-screen px-10 py-10 mt-6 -translate-x-1/2 bg-white shadow-xl max-w-5xl left-1/2 top-full"
  >
    <div class="absolute inset-x-0 h-6 -top-6"></div>
    <div class="grid grid-cols-4 gap-10">
      <!-- Column 1 -->
      <div class="space-y-4">
        <h4 class="mb-5 font-bold">Popular</h4>
        <p class="hover:text-[#333] hover:underline cursor-pointer">Causal</p>
        <p class="hover:text-[#333] hover:underline cursor-pointer">Exclusive</p>
        <p class="hover:text-[#333] hover:underline cursor-pointer">Aligori</p>
        <p class="hover:text-[#333] hover:underline cursor-pointer">Churidar</p>
        <p class="hover:text-[#333] hover:underline cursor-pointer">Shalwar</p>
        <p class="hover:text-[#333] hover:underline cursor-pointer">Jeans</p>
        <p class="hover:text-[#333] hover:underline cursor-pointer">Dress</p>
      </div>
      
        <!-- Column 2 -->
        <div class="pl-10 space-y-4 border-[#7e7e7e]/30 border-l">
            <h4 class="mb-5 font-bold">Best Selling</h4>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Sandals</p>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Bast shoe</p>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Blucher shoe</p>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Boat shoe</p>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Brogan</p>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Chelsea boot</p>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Brothel creeper</p>
        </div>

        <!-- Column 3 -->
        <div class="space-y-4 border-[#7e7e7e]/30 border-l pl-10">
            <h4 class="mb-5 font-bold">New Product</h4>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Belt</p>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Wallets</p>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Card Holders</p>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Bags</p>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Executive bag</p>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Cufflinks</p>
            <p class="hover:text-[#333] hover:underline cursor-pointer">Cap</p>
        </div>
        
        <!-- Column 4 -->
         <div class="space-y-4 border-[#7e7e7e]/30 border-l pl-10">
            <CatalogMenuCarousel />
         </div>
    </div>
  </div>
</template>
<script setup>
    import CatalogMenuCarousel from './CatalogMenuCarousel.vue';
</script>
<style lang=""></style>
