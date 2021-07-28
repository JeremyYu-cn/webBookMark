<template>
  <section class="card_main">
    <div class="card_img_box">
      <MyImage class="card_image" :src="image" />
    </div>
    <div class="card_content">
      <h4 class="card_title">{{ title }}</h4>
      <p class="card_desc">{{ description }}</p>
      <div class="card_more">
        <slot />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyImage from "./MyImage.vue";

export type CardProps = {
  image: PubProps<StringConstructor, string>;
  title: PubProps<StringConstructor, string>;
  description: PubProps<StringConstructor, string>;
  icon?: PubProps<StringConstructor, string>;
};

export default defineComponent<CardProps, {}, {}>({
  components: {
    MyImage,
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.card_main {
  width: 200px;
  height: 244px;
  border-radius: 7px;
  & .card_content {
    padding: 11px;
    & .card_title {
      color: #383838;
      font-size: 15px;
      font-family: Helvetica;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    & .card_desc {
      font-size: 14px;
      font-family: Helvetica;
      color: #383838;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  & .card_img_box {
    text-align: center;
    height: 111px;
    & .card_image {
      max-width: 200px;
      height: 111px;
    }
  }
}
</style>
