<!-- explain -->
<template>
  <div>
    <MyImage v-if="src" class="background" :src="src" />
    <div
      v-else
      class="background_color"
      :style="{ background: bgColor, ...BgStyle }"
    />
    <Setting />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MyImage from "@/components/MyImage.vue";
import Setting from "@/components/setting.vue";

const BgStyle = {
  filter: "blur(2px)",
};

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
  },
  components: {
    MyImage,
    Setting,
  },
  setup() {
    return {
      BgStyle,
    };
  },
});
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