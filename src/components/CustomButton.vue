<template lang="">
  <button
    class="cursor-pointer px-6 py-2 border text-[#333]"
    
    :class="$attrs.class"
  >
    <slot name="button-name"></slot>
  </button>
</template>
<script setup>
defineOptions({
  inheritAttrs: true
})
</script>
<style lang=""></style>
