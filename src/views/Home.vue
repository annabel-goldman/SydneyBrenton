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
            <p>Sydney Brenton is an actor, singer, and musician currently based in Los Angeles. As a New Jersey native, she is often home to visit her parents, sister and dog (mostly her dog) and to get a New Jersey bagel. Sydney recently graduate Northwestern University with a Bachelor of Arts in Theatre (concentration in Acting) and Mathematics with an Integrated Marketing Communications certificate. She has also studied at Prague Film School in Film Acting and with the Prague Shakespeare Company, additionally performing with them in their summer season. In her spare time, Sydney loves to read, do yoga and pilates, and play piano. At Northwestern, she was the Music Director of THUNK A Cappella, arranged music for them, and sung with a band as well. </p>
          </div>
          <div class="hero-carousel">
            <div class="carousel-container">
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
                <button class="carousel-btn prev" @click="prevHeadshot">
                  <span>&lt;</span>
                </button>
                <button class="carousel-btn next" @click="nextHeadshot">
                  <span>&gt;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
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
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Hero Section - using design system classes */
.hero {
  height: 90vh;
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  flex-shrink: 0;
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
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 4rem 4rem 4rem;
}

.hero-content {
  text-align: left;
  color: var(--color-text-white);
  max-width: 670px;
  padding: 1.5rem 0rem;
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
  font-size: var(--font-size-md);
  line-height: var(--line-height-relaxed);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.hero-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 90vh;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 40%;
}

.carousel-container {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
}

.carousel {
  flex: 1;
  overflow: hidden;
  border-radius: 0;
  box-shadow: var(--shadow-lg);
  height: 100%;
  position: relative;
  width: 100%;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
}

.carousel-slide {
  min-width: 100%;
  height: 90vh;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
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
  transition: all var(--transition-normal);
  opacity: 0;
  z-index: 10;
}

.carousel-btn.prev {
  left: 20px;
}

.carousel-btn.next {
  right: 20px;
}

.carousel:hover .carousel-btn {
  opacity: 1;
}

.carousel-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

/* Footer */
.footer {
  padding: 2rem 0;
  background: #0f2a0a;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-content p {
  color: var(--color-text-white);
  font-size: var(--font-size-md);
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    min-height: unset;
    height: auto;
  }
  .hero-overlay {
    position: static;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  .hero-content {
    max-width: 100%;
    padding: 1rem 0;
    text-align: center;
  }
  .hero-carousel,
  .carousel-container,
  .carousel {
    position: static;
    width: 100%;
    height: auto;
    margin-top: 1.5rem;
  }
  .carousel-track {
    height: auto;
  }
  .carousel-slide {
    height: auto;
    min-height: 100px;
  }
  .hero-content h1 {
    font-size: var(--font-size-4xl);
  }
  .hero-content h2 {
    font-size: var(--font-size-2xl);
  }
  .hero-content p {
    font-size: var(--font-size-md);
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

@media (max-width: 1240px) {
  .hero-content {
    max-width: 500px;
  }
}

@media (max-width: 955px) {
  .hero-content {
    max-width: 400px;
    font-size: 15px;

  }
}
</style> 