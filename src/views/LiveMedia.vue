<script setup lang="ts">
import { ref } from 'vue'
import img1G8A0510 from '../assets/liveMedia/1G8A0510.jpeg'
import edit081 from '../assets/liveMedia/EDIT053024_Once-081_Original.jpeg'
import edit092 from '../assets/liveMedia/EDIT053024_Once-092_Original.jpeg'
import edit039 from '../assets/liveMedia/EDIT053024_Once-039_Original.jpeg'
import edit044 from '../assets/liveMedia/EDIT053024_Once-044_Original.jpeg'
import edit062 from '../assets/liveMedia/EDIT053024_Once-062_Original.jpeg'
import edit070 from '../assets/liveMedia/EDIT053024_Once-070_Original.jpeg'

const selectedMedia = ref<string | null>(null)
const mediaType = ref<'image' | 'video'>('image')

interface MediaItem {
  src: string
  type: 'image' | 'video'
  title: string
}

const liveMediaItems: MediaItem[] = [
  {
    src: img1G8A0510,
    type: 'image',
    title: 'Live Performance 1'
  },
  {
    src: edit081,
    type: 'image',
    title: 'Live Performance 2'
  },
  {
    src: edit092,
    type: 'image',
    title: 'Live Performance 3'
  },
  {
    src: edit039,
    type: 'image',
    title: 'Live Performance 4'
  },
  {
    src: edit044,
    type: 'image',
    title: 'Live Performance 5'
  },
  {
    src: edit062,
    type: 'image',
    title: 'Live Performance 6'
  },
  {
    src: edit070,
    type: 'image',
    title: 'Live Performance 7'
  },
]

const openLightbox = (item: MediaItem) => {
  selectedMedia.value = item.src
  mediaType.value = item.type
}

const closeLightbox = () => {
  selectedMedia.value = null
}
</script>

<template>
  <div class="live-media">
    <!-- Hero Section -->
    <section class="gallery-hero hero hero-sm">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1>Live Media</h1>
          <p>Capturing the energy and emotion of live performances</p>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section section">
      <div class="gallery-grid">
        <div 
          v-for="(item, index) in liveMediaItems" 
          :key="index"
          class="gallery-item"
          @click="openLightbox(item)"
        >
          <div class="media-container">
            <img 
              v-if="item.type === 'image'" 
              :src="item.src" 
              :alt="item.title" 
            />
            <video 
              v-else 
              :src="item.src" 
              :alt="item.title"
              muted
              preload="metadata"
            />
            <div class="media-overlay">
              <span v-if="item.type === 'image'" class="view-icon">👁</span>
              <span v-else class="play-icon">▶</span>
              <p class="media-title">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div v-if="selectedMedia" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        <div class="lightbox-media">
          <img 
            v-if="mediaType === 'image'" 
            :src="selectedMedia" 
            alt="Live Media" 
          />
          <video 
            v-else 
            :src="selectedMedia" 
            controls
            autoplay
            alt="Live Media Video"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.live-media {
  min-height: 100vh;
}

/* Hero Section - using design system classes */
.gallery-hero {
  background: var(--color-background-primary);
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

.media-container {
  position: relative;
  width: 100%;
  height: 600px;
}

.media-container img,
.media-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.gallery-item:hover .media-container img,
.gallery-item:hover .media-container video {
  transform: scale(1.05);
}

.media-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.gallery-item:hover .media-overlay {
  opacity: 1;
}

.view-icon,
.play-icon {
  font-size: 2.5rem;
  color: var(--color-text-white);
  margin-bottom: 1rem;
}

.play-icon {
  font-size: 3rem;
}

.media-title {
  color: var(--color-text-white);
  font-size: var(--font-size-lg);
  text-align: center;
  margin: 0;
  padding: 0 1rem;
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

.lightbox-media {
  width: 100%;
  height: 100%;
}

.lightbox-media img,
.lightbox-media video {
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
  .gallery-grid {
    gap: 1rem;
    padding: 0 1rem;
  }
  
  .media-container {
    height: 400px;
  }
  
  .lightbox {
    padding: 1rem;
  }
  
  .lightbox-close {
    top: -40px;
    font-size: 2.5rem;
  }
  
  .view-icon,
  .play-icon {
    font-size: 2rem;
  }
  
  .play-icon {
    font-size: 2.5rem;
  }
}
</style> 