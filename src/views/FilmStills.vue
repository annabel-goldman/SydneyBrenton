<script setup lang="ts">
import { ref } from 'vue'
import img2123 from '../assets/filmStills/IMG_2123.jpeg'
import img2111 from '../assets/filmStills/IMG_2111.jpeg'
import img2099 from '../assets/filmStills/IMG_2099.jpeg'
import img2093 from '../assets/filmStills/IMG_2093.jpeg'
import img2091 from '../assets/filmStills/IMG_2091.jpeg'
import img2084 from '../assets/filmStills/IMG_2084.jpeg'
import img2079 from '../assets/filmStills/IMG_2079.jpeg'
import screenshot from '../assets/filmStills/Screenshot 2023-12-06 at 13.36.03.jpeg'

const selectedImage = ref<string | null>(null)

const filmStills = [
  img2123,
  img2111,
  img2099,
  img2093,
  img2091,
  img2084,
  img2079,
  screenshot
]

const openLightbox = (image: string) => {
  selectedImage.value = image
}

const closeLightbox = () => {
  selectedImage.value = null
}
</script>

<template>
  <div class="film-stills">
    <!-- Hero Section -->
    <section class="gallery-hero hero hero-sm">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1>Film Stills</h1>
          <p>Capturing moments of performance and storytelling through the lens</p>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section section">
      <div class="gallery-grid">
        <div 
          v-for="(image, index) in filmStills" 
          :key="index"
          class="gallery-item"
          @click="openLightbox(image)"
        >
          <img :src="image" :alt="`Film Still ${index + 1}`" />
          <div class="gallery-overlay">
            <span class="view-icon">👁</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div v-if="selectedImage" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        <img :src="selectedImage" alt="Film Still" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.film-stills {
  min-height: 100vh;
}

/* Hero Section - using design system classes */
.gallery-hero {
  background: var(--color-background-primary);
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-content p {
  font-size: 1.3rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
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
  cursor: pointer;
  transition: transform var(--transition-normal);
  width: 100%;
}

.gallery-item:hover {
  transform: scale(1.02);
}

.gallery-item img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.view-icon {
  font-size: 2rem;
  color: var(--color-text-white);
}

/* Lightbox Modal */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-content img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: var(--radius-md);
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: var(--color-text-white);
  font-size: 3rem;
  cursor: pointer;
  transition: color var(--transition-normal);
}

.lightbox-close:hover {
  color: var(--color-primary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1.1rem;
  }
  
  .gallery-grid {
    gap: 1rem;
    padding: 0 1rem;
  }
  
  .gallery-item img {
    height: 400px;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .lightbox {
    padding: 1rem;
  }
  
  .lightbox-close {
    top: -40px;
    font-size: 2.5rem;
  }
}
</style> 