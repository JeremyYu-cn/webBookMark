<template>
  <section class="bookmark_main">
    <div class="boolmark_column" v-for="item in bookmarkList" :key="item.key">
      <Card
        class="column_card"
        :title="item.title"
        :image="item.image"
        :description="item.description"
        @click="handleClick(item)"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import MyImage from "@/components/MyImage.vue";
import Card from "@/components/card.vue";
import { bookmarkRouteUpdate } from "@/hooks/bookmark";
import { tmpBookmarkList, IBookmarkData } from "@/assets/data/bookmark";

export default defineComponent({
  components: {
    MyImage,
    Card,
  },
  props: {},
  setup() {
    const { key } = useRoute().params;
    const bookmarkList = ref(tmpBookmarkList);

    function handleClick(item: IBookmarkData) {
      const { url } = item;
      window.open(url, "_blank");
    }

    onBeforeRouteUpdate(bookmarkRouteUpdate);
    return {
      key,
      bookmarkList,
      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.bookmark_main {
  padding: 30px;
  display: flex;
  flex-wrap: 3;
  flex: 3;
}
.column_card {
  background: #fff;
  cursor: pointer;
  box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.05),
    0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.column_card:hover {
  box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.2),
    0px 1px 4px 0px rgba(0, 0, 0, 0.3);
}
.boolmark_column {
  margin: 0 10px;
}
</style>
