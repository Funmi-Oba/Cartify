<template>
  <div class="">
    <!-- <div class="bg-[#f3f3f3] h-30 p-10">
      <h1 class="text-5xl text-[#333]">Products</h1>
    </div> -->

    <div class="flex items-center justify-between py-10">
      <div class="flex items-center gap-5">
        <Icon
          icon="material-symbols-light:background-grid-small-sharp"
          class="cursor-pointer size-5"
          :class="productStore.gridCols === 4 ? 'text-[#333]' : 'text-[#999]'"
          @click="productStore.setGridCols(4)"
        />
        <Icon
          icon="material-symbols:grid-on-sharp"
          class="cursor-pointer size-5"
          :class="productStore.gridCols === 3 ? 'text-[#333]' : 'text-[#999]'"
          @click="productStore.setGridCols(3)"
        />
        <Icon
          icon="material-symbols-light:grid-view"
          class="cursor-pointer size-5"
          :class="productStore.gridCols === 2 ? 'text-[#333]' : 'text-[#999]'"
          @click="productStore.setGridCols(2)"
        />
        <Icon
          icon="glyphs:grid-list-bold"
          class="cursor-pointer size-5"
          :class="productStore.gridCols === 1 ? 'text-[#333]' : 'text-[#999]'"
          @click="productStore.setGridCols(1)"
        />
      </div>

      <div class="flex items-center gap-5 text-[#666]">
        <p>
          Showing {{ productStore.getAllProducts.from }} - {{ productStore.getAllProducts.to }} of
          {{ productStore.getAllProducts.total }} results
        </p>
        <!-- <p>Showing {{ productStore.getAllProducts }} - {{ rangeEnd }} of {{ totalProducts }} results</p> -->
        <p>
          Show
          <select
            v-model="perPage"
            @change="currentPage = 1"
            class="border border-[#333] p-1 focus:outline-none text-black"
          >
            <option :value="6">6</option>
            <option :value="12">12</option>
            <option :value="18">18</option>
            <option :value="24">24</option>
            <option :value="30">30</option>
          </select>
          per page
        </p>
        <p>
          Sort by:
          <select class="border border-[#333] p-1 focus:outline-none text-black">
            <option>Featured</option>
            <option>Best Selling</option>
            <option>Alphabetically, A-Z</option>
            <option>Alphabetically, Z-A</option>
            <option>Price, Low to High</option>
            <option>Price, High to Low</option>
            <option>Date, new to old</option>
            <option>Date, old to new</option>
          </select>
        </p>
      </div>
    </div>

    <div class="w-full h-px bg-[#e0e0e0]"></div>
    <div class="container mx-auto">
      <div class="flex items-start gap-5 mt-10">
        <ShopMenu />
        <ShopAllProduct />
      </div>

      <div class="flex justify-center">
        <div class="flex gap-2">
<!-- <button
        
        :disabled="currentPage === 1"
        class="px-3 py-1  text-[#999] disabled:opacity-30 hover:text-[#333] transition-colors"
      >
        Prev
      </button> -->

        <button
          v-for="page in productStore.getAllProducts?.last_page"
          :key="page"
          @click="currentPage = page"
          :class="[
            'px-3 py-1 transition-colors',
            currentPage === page
              ? ' text-[#333] border-[#333] border-b'
              : 'text-[#999] hover:text-[#333]',
          ]"
        >
          {{ page }}
        </button>
        <!-- <a :href="productStore.getAllProducts.next_page_url"
      
       
        :disabled="currentPage === productStore.getAllProducts.last_page"
        class="px-3 py-1 text-[#999] disabled:opacity-30 hover:text-[#333] transition-colors"
      >
       Next
      </a> -->
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { Icon } from '@iconify/vue'
import ShopMenu from '@/components/ShopMenu.vue'
import ShopAllProduct from '@/components/ShopAllProduct.vue'
import { useProductStore } from '@/stores/product'
import { useBreadcrumbStore } from '@/stores/breadcrumb'

const perPage = ref(12)
const currentPage = ref(1)
// const totalProducts = ref(0)
const gridView = ref('byThree')

const breadcrumbStore = useBreadcrumbStore()
onMounted(() => {
  breadcrumbStore.setCrumbs([{ label: 'Products' }])
})

const productStore = useProductStore()

watch(
  [perPage, currentPage],
  ([newPerPage, newPage]) => {
    productStore.fetchAllProducts(newPerPage, newPage)
  },
  { immediate: true },
)

// const rangeStart = computed(() => {
//   if (totalProducts.value === 0) return 0
//   return (currentPage.value - 1) * perPage.value + 1
// })

// const rangeEnd = computed(() => Math.min(currentPage.value * perPage.value, totalProducts.value))
</script>
