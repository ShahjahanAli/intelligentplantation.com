<template>
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <!-- Scroll Progress Bar -->
      <div class="h-1 bg-emerald-600" :style="{ width: scrollProgress + '%' }"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">

          <!-- Logo -->
          <nuxt-link to="/" class="flex items-center gap-2">
            <div class="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <span class="font-bold text-xl text-gray-900">PlantIQ</span>
          </nuxt-link>

          <!-- Menu Links -->
          <div class="nab-nuxt-link-wrap hidden md:flex items-center gap-8">
            <nuxt-link
              to="#features"
              :class="{ 'active': activeSection === 'features' }"
              class="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Features
            </nuxt-link>

            <nuxt-link
              to="#how-it-works"
              :class="{ active: activeSection === 'how-it-works' }"
              class="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              How It Works
            </nuxt-link>

            <nuxt-link
              to="#pricing"
              :class="{ active: activeSection === 'pricing' }"
              class="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Pricing
            </nuxt-link>

            <nuxt-link
              to="#faq"
              :class="{ active: activeSection === 'faq' }"
              class="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              FAQ
            </nuxt-link>
          </div>


          <!-- Action Buttons -->
          <div class="flex items-center gap-3">
            <nuxt-link to="/login" class="text-gray-600 hover:text-emerald-900 text-sm font-medium px-4 py-2 transition-colors">Log in</nuxt-link>
            <nuxt-link to="/register" class="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">Start Free</nuxt-link>
          </div>

        </div>
      </div>
    </nav>
</template>


<script>
export default {
  data() {
    return {
      activeSection: '',
      scrollProgress: 0
    }
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleScroll) // recalc on resize
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // Active section
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.scrollY + 120
      sections.forEach(section => {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
          this.activeSection = section.id
        }
      })

      // Scroll progress
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      this.scrollProgress = Math.min((scrollTop / docHeight) * 100, 100)
    }
  }
}
</script>


<style>
html {
  scroll-behavior: smooth;
}


</style>