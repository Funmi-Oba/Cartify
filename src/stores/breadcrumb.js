import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBreadcrumbStore = defineStore('breadcrumb', () => {
  const crumbs = ref([])

  const setCrumbs = (newCrumbs) => {
    crumbs.value = newCrumbs
  }

  return { crumbs, setCrumbs }
})