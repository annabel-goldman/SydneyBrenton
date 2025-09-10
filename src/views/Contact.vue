<script setup lang="ts">
import { onMounted } from 'vue'
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
          <div class="contact-content">
            <div class="contact-card">
              <h1 class="contact-title">{{ CONTACT_PAGE.TITLE }}</h1>
              <p class="contact-intro">{{ CONTACT_PAGE.INTRO }}</p>
              
              <div class="contact-methods">
                <div class="contact-method">
                  <span class="contact-label">{{ CONTACT_PAGE.EMAIL.LABEL }}</span>
                  <a 
                    :href="`mailto:${CONTACT_PAGE.EMAIL.ADDRESS}`" 
                    class="contact-link email-link"
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
                    class="contact-link instagram-link"
                  >
                    {{ CONTACT_PAGE.INSTAGRAM.HANDLE }}
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

/* Contact Card */
.contact-card {
  background: rgba(125, 131, 138, 0.9);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  box-shadow: 0 25px 50px -12px rgba(42, 31, 45, 0.5), 0 0 0 1px rgba(42, 31, 45, 0.1);
  border: 1px solid rgba(125, 131, 138, 0.4);
}

/* Contact Title */
.contact-title {
  color: var(--color-text-white);
  font-size: var(--font-size-4xl);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 0 0 var(--spacing-md) 0;
  text-align: center;
}

/* Contact Intro */
.contact-intro {
  color: var(--color-text-white);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-lg);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  text-align: center;
  opacity: 0.9;
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

.contact-content {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  align-items: center;
}

.contact-method {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
}

.contact-label {
  color: var(--color-text-white);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.contact-link {
  color: var(--color-text-white);
  font-size: var(--font-size-xl);
  text-decoration: none;
  transition: all var(--transition-normal);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.contact-link:hover {
  color: var(--color-primary);
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.email-link:hover {
  text-decoration: underline;
}

.instagram-link:hover {
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
  .contact-card {
    padding: var(--spacing-xl);
    margin: 0 1rem;
  }
  
  .contact-title {
    font-size: var(--font-size-3xl);
  }
  
  .contact-intro {
    font-size: var(--font-size-base);
  }
  
  .contact-label,
  .contact-link {
    font-size: var(--font-size-lg);
  }
  
  .contact-methods {
    gap: var(--spacing-sm);
  }
  
  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .contact-card {
    padding: var(--spacing-lg);
    margin: 0 0.5rem;
  }
  
  .contact-title {
    font-size: var(--font-size-2xl);
  }
  
  .contact-intro {
    font-size: var(--font-size-sm);
  }
  
  .contact-label,
  .contact-link {
    font-size: var(--font-size-base);
  }
}
</style>
