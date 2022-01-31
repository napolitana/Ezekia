<script setup>
  import Header from './layout/Header.vue'
  import Footer from './layout/Footer.vue'
  import SpacePage from './components/SpacePage.vue'
  import DinosaursPage from './components/DinosaursPage.vue'
  import WildlifePage from './components/WildlifePage.vue'
  import OceanPage from './components/OceanPage.vue'

  import { ref } from 'vue'

  const pages = ref(['Space', 'Dinosaurs', 'Wildlife', 'Ocean'])
  const active = ref('Space')

  const setActivePage = (page) => {
    active.value = page
  }
</script>

<template>
  <Header :pages="pages" :active="active" @setActivePage="setActivePage" />
  <keep-alive>
    <main>
      <SpacePage v-if="active.toLowerCase() === 'space'" />
      <DinosaursPage v-else-if="active.toLowerCase() === 'dinosaurs'" />
      <WildlifePage v-else-if="active.toLowerCase() === 'wildlife'" />
      <OceanPage v-else />
    </main>
  </keep-alive>
  <Footer :pages="pages" @setActivePage="setActivePage" />
</template>

<style lang="scss" module></style>
