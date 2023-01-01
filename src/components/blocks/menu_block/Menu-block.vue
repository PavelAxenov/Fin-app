<template>
    <ul class="navigation" :class="{ 'navigation--active': isMenuOpen }">
        <MenuItem
            v-for="item in data.menuArr"
            v-bind:key="item.url"
            :item="item"
        />
    </ul>
</template>

<script setup>
import MenuItem from "@/components/blocks/menu_block/MenuItem.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const data = {
    menuArr: [
        {
            url: "/",
            name: "Dashboard",
            img_name: "dashboard",
            exact: true,
        },
        {
            url: "/wallet",
            name: "Wallets",
            img_name: "wallet",
        },
        {
            url: "/reports",
            name: "Reports",
            img_name: "chart",
        },
        {
            url: "/settings",
            name: "Settings",
            img_name: "settings",
        },
    ],
};

const isMenuOpen = computed(() => {
    return store.getters.isMenuOpen;
});
</script>
