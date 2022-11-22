<template>
  <ul class="navigation" :class="{ 'navigation--active': isMenuOpen }">
    <MenuItem v-for="item in getMenuArr" v-bind:key="item.id" :item="item" />
  </ul>
</template>

<script>
import MenuItem from "@/components/MenuItem.vue";

export default {
    name: "Menu-component",

    components: {
        MenuItem,
    },

    data() {
        return {};
    },

    computed: {
        isMenuOpen() {
            return this.$store.getters.isMenuOpen;
        },

        getMenuArr() {
            return this.$store.getters.getMenuArr;
        },
    },
};
</script>
