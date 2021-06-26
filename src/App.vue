<template>
  <Background />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Background from '@/components/background.vue';

export default defineComponent({
  name: 'App',
  components: {
    Background,
  }
})
</script>

<style lang="scss" scoped>
</style>
