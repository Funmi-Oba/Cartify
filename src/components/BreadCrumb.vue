<template>
  <nav
    v-if="crumbs.length"
    aria-label="breadcrumb"
    class="bg-[#f6f6f6] p-10 flex flex-col justify-center -mx-10"
    :class="route.name === 'allCollections'? 'h-40' : 'h-20'"
  >
    <h1 v-if="route.name === 'allCollections'" class="text-5xl mb-5 text-[#333]">Products</h1>
    <ol class="flex items-center gap-1 text-base ">
      <li>
        <router-link to="/" class="transition-colors text-[#666]"> Home </router-link>
      </li>
      <li v-for="(crumb, index) in crumbs" :key="index" class="flex items-center gap-1">
        <span class="text-[#666]">/</span>
        <router-link v-if="crumb.name" :to="{ name: crumb.name }" class="transition-colors text-[#999]">
          {{ crumb.label }}
        </router-link>
        <span v-else class="text-[#999]">{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBreadcrumbStore } from '@/stores/breadcrumb'

const route = useRoute()
const breadcrumbStore = useBreadcrumbStore()
const crumbs = computed(() => breadcrumbStore.crumbs)


</script>
