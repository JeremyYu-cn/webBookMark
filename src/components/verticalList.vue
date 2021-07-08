<template>
  <div class="list_main">
    {{ list }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface IList {
  key: string;
  title: string;
}

interface IProps {
  list: IList[];
}

export default defineComponent({
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  setup() {},
});
</script>


<style lang="scss" scoped>
</style>
