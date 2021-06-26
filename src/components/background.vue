<template>
  <div>111</div>
</template>

<script lang="ts">
import { defineComponent, ref, } from 'vue';
export default defineComponent({
  name: 'Background',
  setup() {
    return {
      color: ref('red'),
    }
  }
})
</script>

<style>
</style>