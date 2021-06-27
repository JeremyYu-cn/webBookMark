<!-- explain -->
<template>
  <img :src="src" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: "name",
  props: {
    src: {
      type: String,
      default: "",
    }
  }
})


</script>




<style scoped>
</style>