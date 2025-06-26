<script setup lang="ts">
import { ref, onMounted } from 'vue'
import img2123 from '../assets/filmStills/IMG_2123.jpeg'
import img2111 from '../assets/filmStills/IMG_2111.jpeg'
import img2099 from '../assets/filmStills/IMG_2099.jpeg'
import img2093 from '../assets/filmStills/IMG_2093.jpeg'
import img2091 from '../assets/filmStills/IMG_2091.jpeg'
import img2084 from '../assets/filmStills/IMG_2084.jpeg'
import img2079 from '../assets/filmStills/IMG_2079.jpeg'
import screenshot from '../assets/filmStills/Screenshot 2023-12-06 at 13.36.03.jpeg'

interface FilmStill {
  src: string
  position?: string
  title: string
}

const filmStills: FilmStill[] = [
  { src: img2123, position: 'center', title: 'Film Still 1' },
  { src: img2111, position: 'top', title: 'Film Still 2' },
  { src: img2099, position: 'center', title: 'Film Still 3' },
  { src: img2093, position: 'bottom', title: 'Film Still 4' },
  { src: img2091, position: 'center', title: 'Film Still 5' },
  { src: img2084, position: 'top', title: 'Film Still 6' },
  { src: img2079, position: 'center', title: 'Film Still 7' },
  { src: screenshot, position: 'center', title: 'Film Still 8' }
]

const showTitle = ref(true)

onMounted(() => {
  // Hide the title after 3 seconds
  setTimeout(() => {
    showTitle.value = false
  }, 3000)
})
</script>

<template>
  <div class="page">
    <div class="film-stills">
      <!-- Page Title -->
      <div v-if="showTitle" class="page-title">
        <h1>Film Stills</h1>
      </div>
      
      <!-- Gallery Section -->
      <section class="gallery-section section">
        <div class="gallery-grid">
          <div 
            v-for="(image, index) in filmStills" 
            :key="index"
            class="gallery-item"
          >
            <div class="media-container">
              <img 
                :src="image.src" 
                :alt="`Film Still ${index + 1}`"
                :class="`media-image ${image.position ? `pos-${image.position}` : ''}`"
              />
              <div class="title-overlay">
                <h3>{{ image.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p>&copy; 2024 Sydney Brenton</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.film-stills {
  flex: 1;
}

.film-stills, .gallery-section.section, .container {
  padding-top: 0 !important;
  margin-top: 0 !important;
}

/* Page Title */
.page-title {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  text-align: center;
  animation: fadeInOut 3s ease-in-out;
}

.page-title h1 {
  color: var(--color-text-white);
  font-size: var(--font-size-6xl);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 0;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

/* Gallery Section */
.gallery-section {
  background: var(--color-background-primary);
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.gallery-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.media-container {
  position: relative;
  width: 100%;
  height: 600px;
}

.media-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Title Overlay */
.title-overlay {
  position: absolute;
  bottom: var(--spacing-md);
  right: var(--spacing-md);
  background: rgba(0, 0, 0, 0.8);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.gallery-item:hover .title-overlay {
  opacity: 1;
}

.title-overlay h3 {
  color: var(--color-text-white);
  font-size: var(--font-size-lg);
  text-align: center;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Custom positioning classes */
.pos-top {
  object-position: center top;
}

.pos-center {
  object-position: center center;
}

.pos-bottom {
  object-position: center bottom;
}

.pos-left {
  object-position: left center;
}

.pos-right {
  object-position: right center;
}

.pos-top-left {
  object-position: left top;
}

.pos-top-right {
  object-position: right top;
}

.pos-bottom-left {
  object-position: left bottom;
}

.pos-bottom-right {
  object-position: right bottom;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-title h1 {
    font-size: var(--font-size-4xl);
  }
  
  .gallery-grid {
    gap: 1rem;
    padding: 0 1rem;
  }
  
  .media-container {
    height: 400px;
  }
  
  .title-overlay h3 {
    font-size: var(--font-size-xl);
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style> 