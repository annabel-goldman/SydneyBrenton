<script setup lang="ts">
import { ref, onMounted } from 'vue'
import img1G8A0510 from '../assets/liveMedia/1G8A0510.jpeg'
import edit081 from '../assets/liveMedia/EDIT053024_Once-081_Original.jpeg'
import edit092 from '../assets/liveMedia/EDIT053024_Once-092_Original.jpeg'
import edit039 from '../assets/liveMedia/EDIT053024_Once-039_Original.jpeg'
import edit044 from '../assets/liveMedia/EDIT053024_Once-044_Original.jpeg'
import edit062 from '../assets/liveMedia/EDIT053024_Once-062_Original.jpeg'
import edit070 from '../assets/liveMedia/EDIT053024_Once-070_Original.jpeg'

interface MediaItem {
  src: string
  type: 'image' | 'video'
  title: string
  position?: string
}

const liveMediaItems: MediaItem[] = [
  {
    src: img1G8A0510,
    type: 'image',
    title: 'Live Performance 1',
    position: 'center'
  },
  {
    src: edit081,
    type: 'image',
    title: 'Live Performance 2',
    position: 'top'
  },
  {
    src: edit092,
    type: 'image',
    title: 'Live Performance 3',
    position: 'center'
  },
  {
    src: edit039,
    type: 'image',
    title: 'Live Performance 4',
    position: 'top'
  },
  {
    src: edit044,
    type: 'image',
    title: 'Live Performance 5',
    position: 'center'
  },
  {
    src: edit062,
    type: 'image',
    title: 'Live Performance 6',
    position: 'top'
  },
  {
    src: edit070,
    type: 'image',
    title: 'Live Performance 7',
    position: 'center'
  },
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
    <div class="live-media">
      <!-- Page Title -->
      <div v-if="showTitle" class="page-title">
        <h1>Live Media</h1>
      </div>
      
      <!-- Gallery Section -->
      <section class="gallery-section section">
        <div class="gallery-grid">
          <div 
            v-for="(item, index) in liveMediaItems" 
            :key="index"
            class="gallery-item"
          >
            <div class="media-container">
              <img 
                v-if="item.type === 'image'" 
                :src="item.src" 
                :alt="item.title"
                :class="`media-image ${item.position ? `pos-${item.position}` : ''}`"
              />
              <video 
                v-else 
                :src="item.src" 
                :alt="item.title"
                muted
                preload="metadata"
                :class="`media-video ${item.position ? `pos-${item.position}` : ''}`"
              />
              <div class="title-overlay">
                <h3>{{ item.title }}</h3>
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
.live-media {
  flex: 1;
}

.live-media, .gallery-section.section, .container {
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

.media-image,
.media-video {
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
}
</style> 