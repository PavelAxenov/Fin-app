<template>
    <main>
        <section class="container">
            <Menu :is_menu_open="isMenuOpen" @close-menu="closeMenu" />
            <router-view />
        </section>
    </main>
</template>

<script setup>
import Menu from "@/components/blocks/menu_block/Menu-block.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const isMenuOpen = computed(() => {
    return store.getters.isMenuOpen;
});

function closeMenu(value) {
    store.commit("setMenuOpen", value);
}
</script>
