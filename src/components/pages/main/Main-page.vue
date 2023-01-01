<template>
    <main>
        <section class="container">
            <Menu />
            <router-view />
        </section>
    </main>
</template>

<script setup>
import Menu from "@/components/blocks/menu_block/Menu-block.vue";
</script>
