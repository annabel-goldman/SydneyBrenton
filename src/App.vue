<script setup lang="ts">
import { ref, watch } from 'vue'
import Navigation from './components/Navigation.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import FilmStills from './views/FilmStills.vue'
import LiveMedia from './views/LiveMedia.vue'
import YouTube from './views/YouTube.vue'

const currentPage = ref('home')

const pageTitles = {
  'home': 'Sydney Brenton - Actor, Singer, Musician',
  'about': 'Resume - Sydney Brenton',
  'film-stills': 'Film Stills - Sydney Brenton',
  'live-media': 'Live Media - Sydney Brenton',
  'youtube': 'Video Content - Sydney Brenton'
}

const navigateTo = (page: string) => {
  currentPage.value = page
}

// Update document title when page changes
watch(currentPage, (newPage) => {
  document.title = pageTitles[newPage as keyof typeof pageTitles] || 'Sydney Brenton'
})
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
