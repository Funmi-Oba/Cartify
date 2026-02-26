<template>
  <div class="flex flex-col w-1/4">
    <h2 class="mb-4 text-xl font-bold">Account page</h2>
    <button @click="logout" class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">Logout</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { useRoute } from 'vue-router'
import { useBreadcrumbStore } from '@/stores/breadcrumb'
import { onMounted } from 'vue'

const breadcrumbStore = useBreadcrumbStore()
onMounted(() => {
  breadcrumbStore.setCrumbs([{ label: 'Account' }])
})
const authStore = useAuthStore()
const route = useRoute()

console.log(route)
const logout = async () => {
  await authStore.logout()
  // Full page navigation (not SPA routing)
  window.location.href = '/'
}
</script>

<style lang="scss" scoped></style>
