<!-- explain -->
<template>
  <img :src="src" :style="style" alt />
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: "name",
  props: {
    src: {
      type: String,
      default: "",
    },
    style: {
      type: Object,
      default: {},
    }
  }
})


</script>




<style scoped>
</style>