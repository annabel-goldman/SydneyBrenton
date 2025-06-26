<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  currentPage: string
}

interface Emits {
  (e: 'navigate', page: string): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const navigateTo = (page: string) => {
  emit('navigate', page)
  isMenuOpen.value = false
}

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Resume' },
  { id: 'film-stills', label: 'Film Stills' },
  { id: 'live-media', label: 'Live Media' },
  { id: 'youtube', label: 'YouTube' }
]
</script>

<template>
  <nav class="navigation">
    <div class="nav-container">
      <div class="nav-brand">
        <h3>Sydney Brenton</h3>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="nav-menu desktop-menu">
        <a 
          v-for="item in menuItems" 
          :key="item.id"
          :class="['nav-link', { active: currentPage === item.id }]"
          @click="navigateTo(item.id)"
        >
          {{ item.label }}
        </a>
      </div>
      
      <!-- Mobile Hamburger -->
      <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    
    <!-- Mobile Full-Screen Menu -->
    <div class="mobile-menu" :class="{ active: isMenuOpen }">
      <div class="mobile-menu-content">
        <a 
          v-for="item in menuItems" 
          :key="item.id"
          :class="['mobile-nav-link', { active: currentPage === item.id }]"
          @click="navigateTo(item.id)"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template> 