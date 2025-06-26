<script setup lang="ts">
import { ref } from 'vue'
import Navigation from './components/Navigation.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import FilmStills from './views/FilmStills.vue'
import LiveMedia from './views/LiveMedia.vue'
import YouTube from './views/YouTube.vue'

const currentPage = ref('home')

const navigateTo = (page: string) => {
  currentPage.value = page
}
</script>

<template>
  <div class="portfolio-app">
    <Navigation :current-page="currentPage" @navigate="navigateTo" />
    
    <main class="main-content">
      <Home v-if="currentPage === 'home'" />
      <About v-else-if="currentPage === 'about'" />
      <FilmStills v-else-if="currentPage === 'film-stills'" />
      <LiveMedia v-else-if="currentPage === 'live-media'" />
      <YouTube v-else-if="currentPage === 'youtube'" />
    </main>
  </div>
</template>

<style>
/* Essential layout styles only */
.portfolio-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}
</style>
