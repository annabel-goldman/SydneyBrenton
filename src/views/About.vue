<script setup lang="ts">
import { ref } from 'vue'
import heroImage from '../assets/1709490557592.jpeg'
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
  <div class="about">
    <!-- Hero Section -->
    <section class="about-hero hero hero-sm">
      <div class="hero-image">
        <img :src="heroImage" alt="Sydney Brenton About" />
        <div class="hero-overlay">
          <div class="hero-content">
            <h1>About Sydney</h1>
            <p>Dedicated artist with a passion for storytelling and creative expression</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Content -->
    <section class="about-content section">
      <div class="container">
        <div class="about-grid">
          <div class="about-text">
            <h2>Artist Statement</h2>
            <p>
              As a theater and visual artist, I believe in the transformative power of storytelling. 
              Every performance, every brushstroke, and every creative decision is an opportunity to 
              connect with audiences on a deeply human level.
            </p>
            <p>
              My work is driven by a commitment to authenticity and emotional truth. Whether I'm 
              embodying a character on stage or creating visual art, I strive to capture the essence 
              of human experience in all its complexity and beauty.
            </p>
            <p>
              Through my diverse background in acting, stage production, and visual arts, I've developed 
              a unique perspective that allows me to approach storytelling from multiple angles. 
              This interdisciplinary approach enriches my work and enables me to create more 
              compelling and resonant artistic experiences.
            </p>
          </div>
          
          <div class="about-image">
            <img :src="headshot1" alt="Sydney Brenton Portrait" />
          </div>
        </div>
      </div>
    </section>

    <!-- Resume Section -->
    <section class="resume-section section">
      <div class="container">
        <div class="resume-header">
          <h2>Resume & Experience</h2>
          <button class="btn btn-primary" @click="downloadResume">
            Download Resume
          </button>
        </div>
        
        <div class="resume-preview">
          <div class="resume-container" :class="{ expanded: showFullResume }">
            <iframe 
              src="/src/assets/Sydney Brenton Resume.pdf"
              class="resume-iframe"
              title="Sydney Brenton Resume"
            ></iframe>
          </div>
          
          <div class="resume-overlay" v-if="!showFullResume">
            <div class="overlay-content">
              <h3>View Full Resume</h3>
              <p>Click below to expand and view the complete resume</p>
              <button class="btn btn-secondary" @click="showFullResume = true">
                Expand Resume
              </button>
            </div>
          </div>
        </div>
        
        <div class="resume-actions" v-if="showFullResume">
          <button class="btn btn-secondary" @click="showFullResume = false">
            Collapse Resume
          </button>
        </div>
      </div>
    </section>

    <!-- Skills & Expertise -->
    <section class="skills-section section">
      <div class="container">
        <h2 class="text-center">Skills & Expertise</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Performance</h3>
            <ul>
              <li>Character Development</li>
              <li>Stage Presence</li>
              <li>Voice & Movement</li>
              <li>Script Analysis</li>
              <li>Ensemble Work</li>
            </ul>
          </div>
          
          <div class="skill-category">
            <h3>Production</h3>
            <ul>
              <li>Stage Management</li>
              <li>Set Design</li>
              <li>Lighting Design</li>
              <li>Costume Coordination</li>
              <li>Technical Direction</li>
            </ul>
          </div>
          
          <div class="skill-category">
            <h3>Visual Arts</h3>
            <ul>
              <li>Painting & Drawing</li>
              <li>Digital Art</li>
              <li>Photography</li>
              <li>Mixed Media</li>
              <li>Installation Art</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
}

/* About Hero Section - using design system classes */
.about-hero {
  background: var(--color-background-primary);
}

.hero-image {
  width: 100%;
  height: 100%;
  position: relative;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 600px;
  padding: 2rem;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-content p {
  font-size: 1.3rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* About Content Section */
.about-content {
  background: var(--color-background-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  color: var(--color-text-primary);
  margin-bottom: 2rem;
}

.about-text p {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

.about-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

/* Resume Section */
.resume-section {
  background: var(--color-background-secondary);
}

.resume-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.resume-header h2 {
  color: var(--color-text-primary);
  margin: 0;
}

.resume-preview {
  position: relative;
  background: var(--color-background-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.resume-container {
  height: 600px;
  transition: height var(--transition-normal);
}

.resume-container.expanded {
  height: 800px;
}

.resume-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.resume-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(20, 49, 9, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-content {
  text-align: center;
  padding: 2rem;
}

.overlay-content h3 {
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.overlay-content p {
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
}

.resume-actions {
  text-align: center;
  margin-top: 2rem;
}

/* Skills Section */
.skills-section {
  background: var(--color-background-primary);
}

.skills-section h2 {
  text-align: center;
  color: var(--color-text-primary);
  margin-bottom: 3rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.skill-category {
  text-align: center;
  padding: 2rem;
  background: var(--color-background-secondary);
  border-radius: var(--radius-lg);
  border-top: 4px solid var(--color-primary);
}

.skill-category h3 {
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  font-size: var(--font-size-2xl);
}

.skill-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-category li {
  padding: 0.5rem 0;
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  border-bottom: 1px solid var(--color-border);
}

.skill-category li:last-child {
  border-bottom: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1.1rem;
  }
  
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .about-image img {
    height: 300px;
  }
  
  .resume-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .resume-container {
    height: 400px;
  }
  
  .resume-container.expanded {
    height: 600px;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style> 