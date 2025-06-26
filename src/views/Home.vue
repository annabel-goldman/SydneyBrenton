<script setup lang="ts">
import { ref, onMounted } from 'vue'
import headshot1 from '../assets/headshots/headshot1.jpeg'
import headshot2 from '../assets/headshots/headshot2.jpeg'
import headshot3 from '../assets/headshots/headshot3.jpeg'
import headshot4 from '../assets/headshots/headshot4.jpeg'

const currentHeadshotIndex = ref(0)

const headshots = [
  headshot1,
  headshot2,
  headshot3,
  headshot4
]

const nextHeadshot = () => {
  currentHeadshotIndex.value = (currentHeadshotIndex.value + 1) % headshots.length
}

const prevHeadshot = () => {
  currentHeadshotIndex.value = currentHeadshotIndex.value === 0 
    ? headshots.length - 1 
    : currentHeadshotIndex.value - 1
}

onMounted(() => {
  // Auto-advance carousel every 5 seconds
  setInterval(nextHeadshot, 5000)
})
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-image">
        <!-- Removed: <img :src="heroImage" alt="Sydney Brenton Hero" /> -->
        <div class="hero-overlay">
          <div class="hero-content">
            <h1>Sydney Brenton</h1>
            <h2>Theater & Visual Artist</h2>
            <p>Passionate about storytelling through performance and visual arts</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Headshot Carousel Section -->
    <section class="headshot-section section">
      <div class="container">
        <h2 class="text-center">Portfolio Highlights</h2>
        <div class="carousel-container">
          <button class="carousel-btn prev" @click="prevHeadshot">
            <span>&lt;</span>
          </button>
          
          <div class="carousel">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentHeadshotIndex * 100}%)` }">
              <div 
                v-for="(headshot, index) in headshots" 
                :key="index"
                class="carousel-slide"
              >
                <img :src="headshot" :alt="`Sydney Brenton Headshot ${index + 1}`" />
              </div>
            </div>
          </div>
          
          <button class="carousel-btn next" @click="nextHeadshot">
            <span>&gt;</span>
          </button>
        </div>
        
        <div class="carousel-indicators">
          <button 
            v-for="(_headshot, index) in headshots" 
            :key="index"
            :class="['indicator', { active: currentHeadshotIndex === index }]"
            @click="currentHeadshotIndex = index"
          ></button>
        </div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="intro-section section">
      <div class="container">
        <div class="intro-content">
          <h2 class="text-center">Welcome to My Portfolio</h2>
          <p>
            I am a dedicated theater and visual artist with a passion for storytelling through performance and creative expression. 
            My work spans across acting, stage production, and visual arts, creating immersive experiences that connect with audiences on a deep level.
          </p>
          <p>
            Explore my portfolio to see my latest projects, performances, and artistic endeavors. 
            From intimate character studies to large-scale productions, each piece represents my commitment to artistic excellence and authentic storytelling.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}

/* Hero Section - using design system classes */
.hero {
  height: 100vh;
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
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
  background: rgba(20, 49, 9, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: var(--color-text-white);
  max-width: 800px;
  padding: var(--spacing-xl);
}

.hero-content h1 {
  font-size: var(--font-size-6xl);
  margin-bottom: var(--spacing-md);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-content h2 {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.hero-content p {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-relaxed);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Headshot Carousel Section */
.headshot-section {
  padding: 5rem 0;
  background: var(--color-background-primary);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.headshot-section h2 {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-text-primary);
}

.carousel-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.carousel {
  flex: 1;
  overflow: hidden;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  min-width: 100%;
  height: 400px;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-btn {
  background: rgba(74, 144, 226, 0.9);
  color: var(--color-text-white);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-normal);
}

.carousel-btn:hover {
  background: rgba(74, 144, 226, 1);
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: var(--color-text-light);
  cursor: pointer;
  transition: background-color var(--transition-normal);
}

.indicator.active {
  background: var(--color-primary);
}

/* Introduction Section */
.intro-section {
  padding: 5rem 0;
  background: var(--color-background-secondary);
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.intro-content h2 {
  color: var(--color-text-primary);
  margin-bottom: 2rem;
}

.intro-content p {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: var(--font-size-4xl);
  }
  
  .hero-content h2 {
    font-size: var(--font-size-2xl);
  }
  
  .hero-content p {
    font-size: var(--font-size-lg);
  }
  
  .carousel-slide {
    height: 300px;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .container {
    padding: 0 1rem;
  }
}
</style> 