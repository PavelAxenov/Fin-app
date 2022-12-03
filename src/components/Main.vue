<template>
  <main>
    <section class="container">
      <Menu />
      <router-view />
    </section>
  </main>
</template>

<script>
import Menu from "@/components/menu/Menu.vue";

export default {
  name: "Main-component",

  components: {
    Menu,
  },
};
</script>
