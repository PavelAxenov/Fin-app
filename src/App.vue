<template>
  <Header />
  <Main />
</template>

<script>
import Header from "@/components/header/Header.vue";
import Main from "@/components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
};
</script>
