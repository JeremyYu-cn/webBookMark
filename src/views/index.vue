<!-- 展示页 -->
<template>
  <section class="main">
    <IndexTemplate src="https://img.yzmblog.top/blog/blogBg.jpg">
      <Container />
    </IndexTemplate>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IndexTemplate from "@/template/indexTemplate.vue";
import Container from "@/template/contailer/index.vue";

export default defineComponent({
  name: "Index",
  components: {
    IndexTemplate,
    Container,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
</style>
