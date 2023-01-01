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
                <p class="user__name">User Name</p>

                <img
                    src="../../../assets/images/user-icon.svg"
                    alt="icon"
                    class="user__icon"
                />
            </router-link>
        </section>
    </header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "header-component",

    computed: {
        isMenuOpen() {
            return this.$store.getters.isMenuOpen;
        },
    },

    methods: {
        ...mapMutations(["setMenuOpen"]),

        openMenu() {
            this.setMenuOpen(!this.isMenuOpen);
        },
    },
};
</script>
