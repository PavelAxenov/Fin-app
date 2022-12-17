<template>
  <router-link :to="createRouter">
    <li class="navigation__item">
      <img :src="renderImg" :alt="item.img_name" class="navigation__item_img" />
      <p v-text="item.name" class="navigation__item_text"></p>
    </li>
  </router-link>
</template>

<script>
export default {
  name: "MenuItem-component",

  props: {
    item: {
      type: Object,
    },
  },

  computed: {
    renderImg() {
      return require(`../../assets/images/menu/${this.item.img_name}.svg`);
    },
    createRouter() {
      return `${this.item.url}`;
    },
  },
};
</script>
