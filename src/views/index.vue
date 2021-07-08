<!-- 展示页 -->
<template>
  <Background />
  <Container />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Background from "@/template/Background.vue";
import Container from "@/template/contailer/index.vue";

export default defineComponent({
  name: "Index",
  components: {
    Background,
    Container,
  },
});
</script>

<style scoped>
</style>
