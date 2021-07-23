<template>
  <section class="container_main">
    <section class="container_box">
      <VerticalList
        :list="list"
        :current="listIndex"
        @submit="handleListClick"
      />
      <RouterView />
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import { RouterView } from "vue-router";
import VerticalList, { IList } from "@/components/verticalList.vue";

const tmpList: IList[] = [
  {
    key: "main",
    title: "学习",
  },
  {
    key: "private",
    title: "其他",
  },
];

interface IListClickParam {
  item: IList;
  index: number;
}

function handleListClick<T extends IListClickParam>(
  { index }: T,
  listIndex: Ref<number>
) {
  if (listIndex.value === index) return;
  listIndex.value = index;
}

export default defineComponent<{}, {}, {}>({
  components: {
    VerticalList,
    RouterView,
  },
  props: {},
  setup() {
    const listIndex = ref(0);
    return {
      listIndex,
      list: tmpList,
      handleListClick: (e: IListClickParam) => handleListClick(e, listIndex),
    };
  },
});
</script>

<style lang="scss" scoped>
$box_bg: rgba(255, 255, 255, 0.85);
.container_main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container_box {
  width: 95%;
  height: 90%;
  background: $box_bg;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
}
</style>
