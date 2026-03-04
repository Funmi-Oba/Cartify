<template lang="">
    <div>
        <HeroSection/>  
<ProductTab/>
    </div>
</template>
<script setup>
import HeroSection from '@/components/HeroSection.vue';
import ProductTab from '@/components/ProductTab.vue';
import { onMounted } from 'vue'
import { useBreadcrumbStore } from '@/stores/breadcrumb'

const breadcrumbStore = useBreadcrumbStore()

onMounted(() => {
  breadcrumbStore.setCrumbs([])
})
</script>
<style lang="">
    
</style>