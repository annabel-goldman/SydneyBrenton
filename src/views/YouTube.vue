<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface YouTubeVideo {
  id: string
  title: string
  description: string
  thumbnail: string
}

const videos = ref<YouTubeVideo[]>([
  {
    id: '1wj_KOc46AU',
    title: 'SMASHED',
    description: 'Starring Sydney Brenton and Diego Goldfrank',
    thumbnail: `https://img.youtube.com/vi/1wj_KOc46AU/maxresdefault.jpg`
  },
  {
    id: '_wlXH0DJRaY',
    title: 'THUNK A Capella',
    description: 'Sydney Brenton singing Creep by Radiohead',
    thumbnail: `https://img.youtube.com/vi/_wlXH0DJRaY/maxresdefault.jpg`
  },
  {
    id: 'nx7AG2c19J8',
    title: 'Will - A Short Film',
    description: 'Featuring Sydney Brenton',
    thumbnail: `https://img.youtube.com/vi/nx7AG2c19J8/maxresdefault.jpg`
  },
  {
    id: '5RM0uf7T--k',
    title: 'THUNK A Capella',
    description: 'Sydney Brenton singing Parking Lot by Genevieve Stokes',
    thumbnail: `https://img.youtube.com/vi/5RM0uf7T--k/maxresdefault.jpg`
  }
])

const selectedVideo = ref<string | null>(null)
const showTitle = ref(true)
const isDisabled = ref(true)

const playVideo = (videoId: string) => {
  if (isDisabled.value) return
  selectedVideo.value = videoId
}

const closeVideo = () => {
  selectedVideo.value = null
}

onMounted(() => {
  // Scroll to top when component mounts
  window.scrollTo({ top: 0, behavior: 'instant' })
  
  // Hide the title after 3 seconds and enable interactions
  setTimeout(() => {
    showTitle.value = false
    isDisabled.value = false
  }, 3000)
})
</script>

<template>
  <div class="page">
    <div class="youtube-content">
      <!-- Page Title -->
      <div v-if="showTitle" class="page-title">
        <h1>Video Content</h1>
      </div>
      
      <!-- Video Gallery Section -->
      <section class="gallery-section section">
        <div class="video-grid">
          <div 
            v-for="video in videos" 
            :key="video.id"
            class="video-item"
            :class="{ disabled: isDisabled }"
            @click="playVideo(video.id)"
          >
            <div class="media-container">
              <img 
                :src="video.thumbnail" 
                :alt="video.title"
                class="media-image"
              />
              <div class="play-overlay">
                <div class="play-button">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div class="title-overlay">
                <h3>{{ video.title }}</h3>
                <p>{{ video.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Video Modal -->
    <div v-if="selectedVideo" class="video-modal" @click="closeVideo">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeVideo">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        <div class="video-container">
          <iframe
            :src="`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
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

.youtube-content {
  flex: 1;
}

.youtube-content, .gallery-section.section, .container {
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

.video-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.video-item {
  position: relative;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
}

.video-item.disabled {
  cursor: default;
  pointer-events: none;
}

.video-item.disabled .media-image {
  transform: none !important;
}

.video-item.disabled .play-overlay {
  opacity: 0 !important;
}

.video-item.disabled .title-overlay {
  opacity: 0 !important;
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
  transition: transform var(--transition-normal);
}

.video-item:hover .media-image {
  transform: scale(1.05);
}

/* Play Overlay */
.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.video-item:hover .play-overlay {
  opacity: 1;
}

.play-button {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff0000;
  transition: transform var(--transition-normal);
}

.play-button:hover {
  transform: scale(1.1);
}

.play-button svg {
  width: 32px;
  height: 32px;
  margin-left: 4px;
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
  max-width: 300px;
}

.video-item:hover .title-overlay {
  opacity: 1;
}

.title-overlay h3 {
  color: var(--color-text-white);
  font-size: var(--font-size-lg);
  margin: 0 0 var(--spacing-xs) 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.title-overlay p {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  margin: 0;
  line-height: var(--line-height-normal);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Video Modal */
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  padding: 2rem;
}

.modal-content {
  position: relative;
  width: 100%;
  max-width: 1000px;
  background: var(--color-background-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}

.close-button {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  color: var(--color-text-white);
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-normal);
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.9);
}

.close-button svg {
  width: 20px;
  height: 20px;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .page-title h1 {
    font-size: var(--font-size-4xl);
  }
  
  .video-modal {
    padding: 1rem;
  }
  
  .modal-content {
    max-width: 100%;
  }
  
  .title-overlay {
    max-width: 250px;
    right: var(--spacing-sm);
    bottom: var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .page-title h1 {
    font-size: var(--font-size-3xl);
  }
  
  .play-button {
    width: 60px;
    height: 60px;
  }
  
  .play-button svg {
    width: 24px;
    height: 24px;
  }
  
  .title-overlay {
    max-width: 200px;
    padding: var(--spacing-xs) var(--spacing-sm);
  }
  
  .title-overlay h3 {
    font-size: var(--font-size-base);
  }
  
  .title-overlay p {
    font-size: var(--font-size-xs);
  }
}
</style> 