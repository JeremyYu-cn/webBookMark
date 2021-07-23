<template>
  <section class="bookmark_main">
    <div
      class="boolmark_column"
      v-for="item in bookmarkList"
      :key="item.key"
    ></div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import MyImage from "@/components/MyImage.vue";

export interface IBookmarkData {
  key: string;
  title: string;
  description: string;
  icon?: string;
}

const tmpBookmarkList: IBookmarkData[] = [
  {
    key: "baidu",
    title: "百度",
    icon: "baidu.svg",
    description: "测试百度",
  },
];

export default defineComponent({
  components: {
    MyImage,
  },
  setup() {
    const { key } = useRoute().params;
    const bookmarkList = ref(tmpBookmarkList);

    return {
      key,
      bookmarkList,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
