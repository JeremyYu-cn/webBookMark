<!-- 展示页 -->
<template>
  <Background />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Background from '@/template/Background.vue';

export default defineComponent({
  name: "Index",
  components: {
    Background,
  },
})


</script>

<style scoped>
</style>
