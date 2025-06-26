<script setup lang="ts">
import { ref } from 'vue'
import headshot1 from '../assets/headshots/headshot1.jpeg'

const showFullResume = ref(false)

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/src/assets/Sydney Brenton Resume.pdf'
  link.download = 'Sydney Brenton Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <div class="page">
    <div class="about">
      <!-- Resume Section Only -->
      <section class="resume-section section">
        <div class="container">
          <div class="resume-preview">
            <div class="resume-image-wrapper">
              <img src="/src/assets/Resume.png" alt="Sydney Brenton Resume" class="resume-image" />
              <button class="btn btn-primary resume-download-btn" @click="downloadResume">
                Download Resume
              </button>
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
.about, .resume-section.section, .container {
  padding-top: 0 !important;
  margin-top: 0 !important;
}

.about {
  flex: 1;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Resume Section */
.resume-section {
  background: transparent;
}

.resume-preview {
  position: relative;
  background: transparent;
  border-radius: 0;
  overflow: visible;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.resume-image {
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 0 auto;
  box-shadow: none;
  border-radius: 0;
}

.resume-image-wrapper {
  position: relative;
  display: inline-block;
  margin: 0 auto;
}

.resume-download-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  z-index: 2;
  font-family: var(--font-family-primary) !important;
}

.resume-image-wrapper:hover .resume-download-btn {
  opacity: 1;
  pointer-events: auto;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
</style> 