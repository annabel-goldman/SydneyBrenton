<script setup lang="ts">
import { ref, onMounted } from 'vue'
// Once project images
import once062 from '../assets/projects/once/once-062.jpeg'
import once081 from '../assets/projects/once/once-081.jpeg'
import once039 from '../assets/projects/once/once-039.jpeg'
import once044 from '../assets/projects/once/once-044.jpeg'
import once070 from '../assets/projects/once/once-070.jpeg'
import once092 from '../assets/projects/once/once-092.jpeg'
// THUNK A Cappella project images
import thunkACappella001 from '../assets/projects/thunk-a-cappella/thunk-a-cappella-001.jpeg'
// Inez, No Exit project images
import inezNoExit001 from '../assets/projects/inez-no-exit/inez-no-exit-001.jpeg'
import inezNoExit002 from '../assets/projects/inez-no-exit/inez-no-exit-002.jpeg'
import inezNoExit003 from '../assets/projects/inez-no-exit/inez-no-exit-003.jpeg'
// Walter project images
import walter001 from '../assets/projects/walter/walter-001.jpeg'
import walter002 from '../assets/projects/walter/walter-002.jpeg'

interface MediaItem {
  src: string
  type: 'image' | 'video'
  title: string
  position?: string
}

const liveMediaItems: MediaItem[] = [
  {
    src: once062,
    type: 'image',
    title: 'Once',
    position: 'center'
  },
  {
    src: thunkACappella001,
    type: 'image',
    title: 'THUNK A Cappella',
    position: 'center'
  },
  {
    src:  once044,
    type: 'image',
    title: 'Once',
    position: 'top'
  },
  {
    src: inezNoExit001,
    type: 'image',
    title: 'Inez, No Exit',
    position: 'center'
  },
  {
    src: once039,
    type: 'image',
    title: 'Once',
    position: 'top'
  },
  {
    src:  walter001,
    type: 'image',
    title: 'Lead Vocals, Walter',
    position: 'center'
  },
  {
    src: inezNoExit002,
    type: 'image',
    title: 'Inez, No Exit',
    position: 'center'
  },
  {
    src: once081,
    type: 'image',
    title: 'Once',
    position: 'top'
  },
  {
    src: inezNoExit003,
    type: 'image',
    title: 'Inez, No Exit',
    position: 'center'
  },
  {
    src:  once092,
    type: 'image',
    title: 'Once',
    position: 'center'
  },
  {
    src: walter002,
    type: 'image',
    title: 'Lead Vocals, Walter',
    position: 'center'
  },
  {
    src: once070,
    type: 'image',
    title: 'Once',
    position: 'center'
  },
]

const showTitle = ref(true)

onMounted(() => {
  // Scroll to top when component mounts
  window.scrollTo({ top: 0, behavior: 'instant' })
  
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
  background: #2A1F2D;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 0;
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