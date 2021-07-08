<template>
  <VerticalList :list="11" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VerticalList from "@/components/verticalList.vue";

export default defineComponent({
  components: {
    VerticalList,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
</style>
