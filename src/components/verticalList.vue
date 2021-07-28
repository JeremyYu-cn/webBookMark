<template>
  <section class="list_main">
    <div
      v-for="(item, index) in list"
      :key="item.key"
      class="list_column"
      @click="$emit('submit', { item, index })"
    >
      <div class="list_box">
        <div class="list_icon_box">
          <MyImage v-if="item.icon" :src="item.icon" class="list_icon" />
        </div>
        <p
          class="list_text"
          :style="{ color: index === current ? item.select_color : '' }"
        >
          {{ item.title }}
        </p>
      </div>
      <p
        class="fill_block"
        :style="{ background: index === current ? item.select_color : '' }"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyImage from "@/components/MyImage.vue";

export interface IList {
  key: string;
  title: string;
  icon?: string;
  select_color?: string;
}

type IProps = {
  /**
   * 列表
   */
  list: PubProps<ArrayConstructor, IList[]>;
  /**
   * 当前选中的
   */
  current: PubProps<NumberConstructor, number>;
};

export default defineComponent<IProps, {}, {}>({
  components: {
    MyImage,
  },
  props: {
    list: {
      type: Array,
      default: [],
    },
    current: {
      type: Number,
      default: 0,
    },
  },
  setup() {},
});
</script>


<style lang="scss" scoped>
.list_main {
  width: 250px;
  height: 100%;
  overflow-y: scroll;
  background: #fff;
}
.list_main::-webkit-scrollbar {
  width: 0 !important;
}
.list_column {
  width: 213px;
  height: 47px;
  border-radius: 10px;
  background: #fafafa;
  font-size: 14px;
  font-family: Helvetica;
  color: #8d8a8f;
  line-height: 18px;
  cursor: pointer;
  transition: all 0.5s ease;
  margin-left: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  overflow: hidden;
  & .list_box {
    width: 100%;
    padding: 0 0 0 12px;
    display: flex;
    align-items: center;
    & .list_icon_box {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      & .list_icon {
        width: 24px;
        height: 24px;
      }
    }
  }
  & .fill_block {
    width: 24px;
    height: 100%;
  }
}
.list_column:hover {
  box-shadow: 0px 5px 14px 0px rgba(0, 0, 0, 0.05),
    0px 2px 5px 0px rgba(0, 0, 0, 0.1);
  & .list_text {
    color: #333;
  }
}
</style>
