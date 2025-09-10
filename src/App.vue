<script setup lang="ts">
import { ref, watch } from 'vue'
import Navigation from './components/Navigation.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import FilmStills from './views/FilmStills.vue'
import LiveMedia from './views/LiveMedia.vue'
import YouTube from './views/YouTube.vue'
import Contact from './views/Contact.vue'
import { PAGE_TITLE_MAP, DEFAULT_TITLE } from './constants/text'

const currentPage = ref('home')

const navigateTo = (page: string) => {
  currentPage.value = page
}

// Update document title when page changes
watch(currentPage, (newPage) => {
  document.title = PAGE_TITLE_MAP[newPage as keyof typeof PAGE_TITLE_MAP] || DEFAULT_TITLE
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
      <Contact v-else-if="currentPage === 'contact'" />
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
