<template>
  <div class="list_main">{{ list }}</div>
  <div>hello world</div>
  <div>hello world</div>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

interface IList {
  key: string;
  title: string;
}

interface IProps {
  list: IList[];
}

export default defineComponent({
  components: {
    RouterView,
  },
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
