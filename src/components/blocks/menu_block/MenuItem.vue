<template>
    <router-link :to="createRoute">
        <li class="navigation__item">
            <img
                :src="require(`../../../assets/images/menu/${getImgName}.svg`)"
                :alt="item.img_name"
                class="navigation__item_img"
            />
            <p v-text="item.name" class="navigation__item_text"></p>
        </li>
    </router-link>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    item: Object,
});

const getImgName = computed(() => {
    return props.item.img_name;
});

const createRoute = computed(() => {
    return props.item.url;
});
</script>
