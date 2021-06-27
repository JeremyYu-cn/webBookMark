<!-- explain -->
<template>
  <div>
    <MyImage v-if="src" class="background" :src="src" />
    <div v-else class="background_color" :style="{ background: bgColor }" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MyImage from '@/components/MyImage.vue';

export default defineComponent({
  name: "Background",
  props: {
    src: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      default: 'purple',
    }
  },
  components: {
    MyImage,
  }
})

</script>

<style lang="scss" scoped>
.background,
.background_color {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}
</style>