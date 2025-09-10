<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { CONTACT_PAGE, SITE_INFO } from '../constants/text'

onMounted(() => {
  // Scroll to top when component mounts
  window.scrollTo({ top: 0, behavior: 'instant' })
})
</script>

<template>
  <div class="page">
    <div class="contact">
      <!-- Contact Section -->
      <section class="contact-section section">
        <div class="container">
          <div class="contact-wrapper">
            <div class="contact-content">
              <h1 class="contact-title">{{ CONTACT_PAGE.TITLE }}</h1>
              <p class="contact-intro">{{ CONTACT_PAGE.INTRO }}</p>
              
              <div class="contact-methods">
                <div class="contact-method">
                  <span class="contact-label">{{ CONTACT_PAGE.EMAIL.LABEL }}</span>
                  <a 
                    :href="`mailto:${CONTACT_PAGE.EMAIL.ADDRESS}`" 
                    class="contact-link"
                  >
                    {{ CONTACT_PAGE.EMAIL.ADDRESS }}
                  </a>
                </div>
                
                <div class="contact-method">
                  <span class="contact-label">{{ CONTACT_PAGE.INSTAGRAM.LABEL }}</span>
                  <a 
                    :href="CONTACT_PAGE.INSTAGRAM.URL" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="contact-link"
                  >
                    @{{ CONTACT_PAGE.INSTAGRAM.HANDLE }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p>{{ SITE_INFO.COPYRIGHT }}</p>
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

.contact {
  flex: 1;
}

.contact, .contact-section.section, .container {
  padding-top: 0 !important;
  margin-top: 0 !important;
}

/* Contact Section */
.contact-section {
  background: var(--color-background-primary);
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: var(--spacing-4xl) 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.contact-wrapper {
  background: rgba(42, 31, 45, 0.4);
  backdrop-filter: blur(15px);
  border-radius: var(--radius-xl);
  padding: var(--spacing-4xl);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

.contact-title {
  color: var(--color-text-white);
  font-size: var(--font-size-4xl);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 0 0 var(--spacing-lg) 0;
  text-align: center;
}

.contact-intro {
  color: var(--color-text-white);
  font-size: var(--font-size-xl);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: var(--spacing-2xl);
  text-align: center;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  align-items: center;
}

.contact-method {
  background: rgba(42, 31, 45, 0.7);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  min-width: 300px;
  text-align: center;
  transition: all var(--transition-normal);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-method:hover {
  transform: translateY(-2px);
  background: rgba(42, 31, 45, 0.9);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.contact-label {
  color: var(--color-text-white);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  display: block;
  margin-bottom: var(--spacing-sm);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.contact-link {
  color: var(--color-text-white);
  font-size: var(--font-size-base);
  text-decoration: none;
  transition: color var(--transition-normal);
  display: block;
  word-break: break-word;
}

.contact-link:hover {
  color: #B19CD9;
  text-decoration: underline;
}

/* Footer */
.footer {
  padding: 2rem 0;
  background: var(--color-footer);
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
  .contact-wrapper {
    padding: var(--spacing-2xl);
    margin: 0 1rem;
  }
  
  .contact-title {
    font-size: var(--font-size-3xl);
  }
  
  .contact-intro {
    font-size: var(--font-size-lg);
  }
  
  .contact-method {
    min-width: 250px;
    padding: var(--spacing-md);
  }
  
  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .contact-wrapper {
    padding: var(--spacing-xl);
    margin: 0 0.5rem;
  }
  
  .contact-title {
    font-size: var(--font-size-2xl);
  }
  
  .contact-intro {
    font-size: var(--font-size-base);
  }
  
  .contact-method {
    min-width: 200px;
  }
  
  .contact-label {
    font-size: var(--font-size-base);
  }
  
  .contact-link {
    font-size: var(--font-size-sm);
  }
}
</style>
