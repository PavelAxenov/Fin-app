<template>
    <router-link :to="createRoute" @click="closeMenu">
        <li class="navigation__item">
            <img
                :src="require(`../../../assets/images/menu/${getImgName}.svg`)"
                :alt="item.img_name"
                class="mr-10"
            />
            <p v-text="item.name" class="navigation__item_text"></p>
        </li>
    </router-link>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    item: Object,
    is_menu_open: Boolean,
});
const emit = defineEmits(["close-menu"]);
const getImgName = computed(() => {
    return props.item.img_name;
});

const createRoute = computed(() => {
    return props.item.url;
});

function closeMenu() {
    emit("close-menu", !props.is_menu_open);
}
</script>
