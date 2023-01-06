<template>
    <ul
        class="navigation"
        :class="{ 'navigation--active': props.is_menu_open }"
    >
        <div class="modal__close-icon" @click="closeMenu"></div>
        <MenuItem
            v-for="item in data.menuArr"
            v-bind:key="item.url"
            :item="item"
            :is_menu_open="is_menu_open"
            @close-menu="closeMenu"
        />
    </ul>
    <div
        v-if="props.is_menu_open"
        @click="closeMenu"
        class="black-layout"
    ></div>
</template>

<script setup>
import MenuItem from "@/components/blocks/menu_block/MenuItem.vue";
const props = defineProps({
    is_menu_open: Boolean,
});
const emit = defineEmits(["close-menu"]);

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

function closeMenu(value) {
    if (value) {
        emit("close-menu", value);
    }
    emit("close-menu", !props.is_menu_open);
}
</script>
