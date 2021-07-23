<template>
  <section class="list_main">
    <div
      v-for="(item, index) in list"
      :key="item.key"
      :class="'list_column ' + (index === current ? 'current_column' : '')"
      @click="$emit('submit', { item, index })"
    >
      <p>{{ item.title }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export interface IList {
  key: string;
  title: string;
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
  width: 30%;
  height: 100%;
  overflow-y: scroll;
}
.list_main::-webkit-scrollbar {
  width: 0 !important;
}
.list_column {
  text-align: center;
  padding: 15px 0;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  transition: all 0.5s ease;
}
.list_column:hover {
  background: #fff;
}
.current_column {
  background: #fff;
}
</style>
