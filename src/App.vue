<template>
    <Header />
    <Main />
</template>

<script>
import Header from "@/components/blocks/header_block/Header.vue";
import Main from "@/components/pages/main/Main-page.vue";

export default {
    name: "App",
    components: {
        Header,
        Main,
    },
};
</script>
