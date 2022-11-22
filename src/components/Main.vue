<template>
  <main>
    <section class="container main">
      <Menu />
      <router-view/>
    </section>
  </main>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'Main-component',

  components: {
    Menu
  }
}
</script>
