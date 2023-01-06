<template>
    <Register v-if="getRegisterStatus" />
    <Autorization v-if="getAutoriseStatus" />
    <Header v-if="!getAutoriseStatus && !getRegisterStatus" />
    <Main v-if="!getAutoriseStatus && !getRegisterStatus" />
</template>

<script>
import Header from "@/components/blocks/header_block/Header-block.vue";
import Main from "@/components/pages/main/Main-page.vue";
import Autorization from "@/components/pages/autorization/Autorization-page.vue";
import Register from "@/components/pages/register/Register-page.vue";

export default {
    name: "App",
    components: {
        Header,
        Main,
        Autorization,
        Register,
    },

    computed: {
        getAutoriseStatus() {
            return this.$store.getters.getAutoriseStatus;
        },
        getRegisterStatus() {
            return this.$store.getters.getRegisterStatus;
        },
    },
};
</script>
