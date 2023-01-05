<template>
    <header>
        <section class="container header">
            <div class="logo">
                <img
                    src="../../../assets/images/burger-menu.svg"
                    alt="logo"
                    class="logo__menu"
                    v-on:click="openMenu"
                />
                <img
                    src="../../../assets/images/logo.svg"
                    alt="logo"
                    class="logo__fin"
                />
            </div>

            <router-link to="/settings" class="user">
                <p class="user__name">{{ getUserInfo.name }}</p>

                <img
                    src="../../../assets/images/user-icon.svg"
                    alt="icon"
                    class="user__icon"
                />
            </router-link>
        </section>
    </header>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const isMenuOpen = computed(() => {
    return store.getters.isMenuOpen;
});

const getUserInfo = computed(() => {
    return store.getters.getUserInfo;
});

function openMenu() {
    store.commit("setMenuOpen", !isMenuOpen.value);
}
</script>
