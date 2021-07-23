<template>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  name: "App",
  components: {
    RouterView,
  },
});
</script>

<style lang="scss">
@import url(./main.scss);

#app {
  width: 100%;
  height: 100%;
}
</style>
