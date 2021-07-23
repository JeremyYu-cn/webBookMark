<!-- explain -->
<template>
  <div class="bg_main">
    <MyImage
      v-if="src"
      class="background"
      :src="src"
      :style="{ ...otherStyle }"
    />
    <div
      v-else
      class="background_color"
      :style="{ background: bgColor, ...otherStyle }"
    />
    <Setting />
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MyImage from "@/components/MyImage.vue";
import Setting from "@/components/setting.vue";

export default defineComponent({
  name: "Background",
  props: {
    src: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "rgba(255, 255, 255, 0.2)",
    },
    otherStyle: {
      type: Object,
      default: { filter: "blur(3px)" },
    },
  },
  components: {
    MyImage,
    Setting,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.bg_main {
  position: relative;
  height: 100%;
}
.background,
.background_color {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>