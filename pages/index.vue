<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-wrapper pt-24 pb-16 px-4 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">

          <!-- Left Content -->
          <div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Grow Smarter with <span class="text-emerald-600">AI Plant</span> Intelligence
            </h1>
            <p class="text-lg text-gray-600 mb-8 max-w-lg">
              Never lose a plant again. Control your garden every step, get personalized crop planning and advice, and
              stay on top of your plant's health with AI.
            </p>

            <!-- Buttons -->
            <div class="flex flex-wrap gap-4 mb-6">
              <nuxt-link to="/register" class="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                Start Growing Free
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </nuxt-link>
              <button class="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-6 py-3 rounded-lg transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Demo
              </button>
            </div>

            <!-- Avatars + Ratings -->
            <div class="flex items-center gap-2">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 rounded-full bg-emerald-200 border-2 border-white flex items-center justify-center text-xs font-medium text-emerald-700">J</div>
                <div class="w-8 h-8 rounded-full bg-blue-200 border-2 border-white flex items-center justify-center text-xs font-medium text-blue-700">M</div>
                <div class="w-8 h-8 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center text-xs font-medium text-purple-700">S</div>
                <div class="w-8 h-8 rounded-full bg-amber-200 border-2 border-white flex items-center justify-center text-xs font-medium text-amber-700">K</div>
              </div>

              <div class="flex items-center gap-1">
                <span v-for="i in 5" :key="i">
                  <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </span>
                <span class="text-sm text-gray-600 ml-2">4.9/5 from 2,000+ gardeners</span>
              </div>
            </div>
          </div>

          <!-- Right Image -->
          <div class="relative">
            <div class="bg-emerald-600 rounded-3xl p-8 relative overflow-hidden">

              <!-- Gradient Background -->
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700"></div>

              <!-- Main Image -->
              <div class="relative z-10 ">
                <img 
                  src="~/assets/images/hero-garde.jpg"
                  alt="Garden plants" 
                  class="rounded-2xl shadow-2xl w-full" />
              </div>

              <!-- Floating Card 1 -->
              <div class="absolute -right-4 top-2/4 bg-white rounded-xl shadow-xl p-4 z-20 animate-up-down-slow">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900">AI Scan Complete</p>
                    <p class="text-xs text-gray-500">Plant is healthy!</p>
                  </div>
                </div>
              </div>

              <!-- Floating Card 2 -->
              <div class="absolute left-4 bottom-8 bg-white rounded-xl shadow-xl p-4 z-20 animate-zoom-in-out">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900">Weather Alert</p>
                    <p class="text-xs text-gray-500">Rain expected tomorrow</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-wrapper py-20 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span
            class="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-1 rounded-full mb-4">FEATURES</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Grow <span class="text-emerald-600">Successfully</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful AI tools and smart features designed to make gardening easier, smarter, and more rewarding for you.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(feature, index) in features" :key="index"
            class="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-emerald-100 transition-all">
            <div class="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
              <!-- Preserve original different icons by index -->
              <svg v-if="index === 0" class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <svg v-else-if="index === 1" class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <svg v-else-if="index === 2" class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <svg v-else-if="index === 3" class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <svg v-else-if="index === 4" class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <svg v-else-if="index === 5" class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <svg v-else-if="index === 6" class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <svg v-else class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="how-it-work-wrapper py-20 px-4 bg-gradient-to-br from-emerald-600 to-emerald-700">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <div class="bg-white/10 backdrop-blur rounded-3xl p-4">
              <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=600&fit=crop"
                alt="App preview" class="rounded-2xl w-full max-w-sm mx-auto" />
            </div>
          </div>

          <div class="order-1 lg:order-2 text-white">
            <span class="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full mb-4">HOW IT
              WORKS</span>
            <h2 class="text-3xl md:text-4xl font-bold mb-8">
              Start Growing in <span class="text-emerald-200">4 Simple Steps</span>
            </h2>
            <p class="text-emerald-100 mb-8">
              Getting started with PlantIQ takes just a few minutes. Whether you're a beginner or experienced gardener,
              we make it easy.
            </p>

            <div class="space-y-6">
              <div v-for="(step, index) in steps" :key="index" class="flex gap-4">
                <div class="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-lg mb-1">{{ step.title }}</h3>
                  <p class="text-emerald-100 text-sm">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="pricing-wrapper py-20 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Growing Plan
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free and upgrade anytime. Every premium plan comes with a 14-day trial with confidence, so you can try
            before you commit.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div v-for="(plan, index) in pricingPlans" :key="index"
            :class="['relative bg-white rounded-2xl p-8', plan.popular ? 'ring-2 ring-emerald-500 shadow-xl' : 'border border-gray-200']">
            <div v-if="plan.popular"
              class="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-sm font-medium px-4 py-1 rounded-full">
              Most Popular
            </div>

            <div class="mb-6">
              <h3 class="text-xl font-bold text-gray-900 mb-2">{{ plan.name }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ plan.description }}</p>
              <div class="flex items-baseline gap-1">
                <span class="text-4xl font-bold text-gray-900">{{ plan.price }}</span>
                <span class="text-gray-500">{{ plan.period }}</span>
              </div>
            </div>

            <ul class="space-y-3 mb-8">
              <li v-for="(feature, fIdx) in plan.features" :key="fIdx"
                class="flex items-center gap-3 text-sm text-gray-600">
                <svg class="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ feature }}
              </li>
            </ul>

            <nuxt-link to="/register" :class="[
              'block w-full text-center py-3 rounded-lg font-medium transition-colors',
              plan.popular ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'border border-gray-300 hover:border-gray-400 text-gray-700'
            ]">
              {{ plan.cta }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 px-4 bg-white testimonials-wrapper">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by Gardeners <span class="text-emerald-600">Everywhere</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy gardeners who've transformed their growing experience with PlantIQ.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-gray-50 rounded-2xl p-6">
            <div class="flex gap-1 mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-emerald-500 fill-current" viewBox="0 0 24 24">
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <p class="text-gray-700 mb-6">“{{ testimonial.content }}”</p>
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-medium">
                {{ testimonial.avatar }}
              </div>
              <div>
                <p class="font-medium text-gray-900">{{ testimonial.name }}</p>
                <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="(stat, index) in stats" :key="index">
            <p class="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">{{ stat.value }}</p>
            <p class="text-gray-600">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-20 px-4 bg-gray-50 faq-wrapper">
      <div class="max-w-3xl mx-auto">
        <div class="text-center mb-12">
          <span
            class="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-4 py-1 rounded-full mb-4">FAQ</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-gray-600">
            Everything you need to know about PlantIQ. Can't find an answer? Chat with our support team!
          </p>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index"
            class="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <button @click="openFaq = openFaq === index ? null : index"
              class="w-full flex items-center justify-between p-5 text-left">
              <span class="font-medium text-gray-900">{{ faq.question }}</span>
              <svg :class="['w-5 h-5 text-gray-500 transition-transform', openFaq === index ? 'rotate-180' : '']"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-if="openFaq === index" class="px-5 pb-5 text-gray-600">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 bg-emerald-600 cta-wrapper">
      <div class="max-w-4xl mx-auto text-center text-white">
        <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Garden?
        </h2>
        <p class="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
          Join 10,000+ gardeners already growing smarter with AI. Start your free 14-day trial today - no credit card
          required.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <nuxt-link to="/register"
            class="inline-flex items-center gap-2 bg-white text-emerald-600 font-medium px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors">
            Start Growing Free
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </nuxt-link>
          <!-- <button
            class="inline-flex items-center gap-2 border-2 border-white/50 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
            Schedule a Demo
          </button> -->
        </div>
        <p class="text-emerald-200 text-sm mt-6">
          ✓ No credit card required 
          <!-- &nbsp;&nbsp; ✓ Cancel anytime -->
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      openFaq: null,
      features: [
        { title: 'Smart Crop Planning', description: 'AI-powered recommendations based on your location, soil type, and climate conditions.' },
        { title: 'AI Plant Health Detection', description: 'Use your camera to instantly identify plant diseases and get treatment recommendations.' },
        { title: 'Growth Tracking', description: 'Photo-based logging with automatic growth stage detection using computer vision.' },
        { title: 'Weather Integration', description: 'Real-time weather alerts, frost warnings, and optimal planting windows.' },
        { title: 'Task Management', description: 'Smart scheduling with automated reminders for watering, pruning, and harvesting.' },
        { title: 'AI Gardening Assistant', description: "Get personalized advice and answers to all your gardening questions 24/7." },
        { title: 'Community Marketplace', description: 'Connect with other gardeners, share tips, and trade seeds locally.' },
        { title: 'Smart Notifications', description: 'Never miss important gardening tasks with intelligent push notifications.' },
      ],
      steps: [
        { number: '1', title: 'Download the App', description: 'Get our iOS or Android app. Or use the web app on your computer for full desktop experience.' },
        { number: '2', title: 'Scan Your Plants', description: 'Use your camera to identify plants and get instant care instructions tailored to your garden.' },
        { number: '3', title: 'Get AI Insights', description: 'Receive personalized recommendations, pest alerts, and optimal planting schedules.' },
        { number: '4', title: 'Watch Them Grow', description: "Track progress with photo logs and celebrate your garden's growth journey." },
      ],
      pricingPlans: [
        { name: 'Free', description: 'For hobby gardeners just getting started', price: '$0', period: '/ Month', features: ['Track 5 plants', 'Basic watering reminders', 'Community forum access', 'Weather alerts'], cta: 'Get Started', popular: false },
        { name: 'Pro Garden+', description: 'For passionate gardeners who want more', price: '$9.99', period: '/ Month', features: ['Unlimited plants','AI plant health detection','Advanced growth analytics','Priority support','Custom reminders','Export garden data'], cta: 'Start 14-day Trial', popular: true },
        { name: 'School Garden', description: 'For schools and community gardens', price: '$100.00', period: '/ Month', features: ['Multiple garden plots','Student accounts','Lesson plan integration','Admin dashboard','Dedicated support','Custom branding'], cta: 'Contact Sales', popular: false },
      ],
      testimonials: [
        { name: 'Sarah Johnson', role: 'Home Gardener', content: 'PlantIQ transformed my whole garden. The 3-day forecast is amazingly accurate and the plant identification is spot on!', avatar: 'S' },
        { name: 'Michael Chen', role: 'Urban Farmer', content: "Best app for Tracking! It identified a pest problem before I even noticed. The alerts saved my tomato crop this summer.", avatar: 'M' },
        { name: 'Emily Davis', role: 'School Teacher', content: 'PlantIQ has been fantastic for our school garden. The students love tracking their plants and the AI assistant helps them learn.', avatar: 'E' },
      ],
      faqs: [
        { question: 'How accurate is the plant health detection?', answer: 'Our AI achieves 95%+ accuracy in identifying common plant diseases and pests, trained on millions of plant images.' },
        { question: 'Does PlantIQ work offline?', answer: 'Basic features like task reminders work offline. Plant identification and AI features require an internet connection.' },
        { question: 'What plants and crops are supported?', answer: 'We support thousands of plants including vegetables, fruits, flowers, herbs, and houseplants worldwide.' },
        { question: 'Can I use PlantIQ for my school or community garden?', answer: 'Yes! Our School Garden plan is designed for educational institutions and community gardens with multiple users.' },
        { question: 'Is there a free trial for Pro plan?', answer: 'Yes, all new users get a 14-day free trial of Pro Garden+ features with no credit card required.' },
        { question: 'How does the weather integration work?', answer: 'We integrate with local weather services to provide 7-day forecasts, frost alerts, and optimal planting recommendations.' },
      ],
      stats: [
        { value: '10K+', label: 'Active Gardeners' },
        { value: '500K+', label: 'Plants Tracked' },
        { value: '98%', label: 'Satisfaction Rate' },
        { value: '4.9', label: 'App Store Rating' },
      ]
    }
  }
})
</script>
