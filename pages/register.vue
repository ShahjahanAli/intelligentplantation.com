<template>
  <div class="min-h-screen flex">
    <!-- Left Side - Form -->
    <div class="flex-1 flex items-center justify-center p-8 bg-white">
      <div class="w-full max-w-md">
        <!-- Logo -->
        <div class="flex items-center gap-2 mb-8">
          <div class="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <span class="font-bold text-xl text-gray-900">PlantIQ</span>
        </div>

        <!-- Header -->
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Start Your Free Trial</h1>
        <p class="text-gray-500 mb-8">
          14 days of Pro Garden+ features. No credit card required.
        </p>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-5">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              v-model="name"
              required
              class="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              v-model="email"
              required
              class="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-900 mb-2">Password</label>
            <div class="relative">
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Create a strong password"
                v-model="password"
                required
                class="w-full h-12 px-4 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              />
              <button
                type="button"
                @click="togglePassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>

          <button
            type="submit"
            class="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2"
          >
            Start Free Trial
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </form>

        <p class="text-center text-sm text-gray-500 mt-6">
          By signing up, you agree to our
          <a href="#" class="text-emerald-600 hover:underline font-medium"> Terms of Service</a> and
          <a href="#" class="text-emerald-600 hover:underline font-medium"> Privacy Policy</a>
        </p>

        <p class="text-center text-sm text-gray-600 mt-6">
          Already have an account?
          <nuxt-link to="/login" class="text-emerald-600 hover:underline font-semibold">Log in</nuxt-link>
        </p>
      </div>
    </div>

    <!-- Right Side - Promo -->
    <div
      class="hidden lg:flex flex-1 bg-gradient-to-br from-emerald-500 to-emerald-700 p-12 items-center justify-center relative overflow-hidden"
    >
      <div class="absolute top-20 right-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-48 h-48 bg-emerald-600/30 rounded-full blur-2xl"></div>

      <div class="relative z-10 text-white max-w-md">
        <h2 class="text-3xl font-bold mb-4">Grow Smarter with AI-Powered Insights</h2>
        <p class="text-emerald-100 text-lg mb-8">
          Join thousands of gardeners who have transformed their growing experience with PlantIQ.
        </p>

        <div class="space-y-4 mb-12">
          <div v-for="(feature, index) in features" :key="index" class="flex items-center gap-3">
            <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span>{{ feature }}</span>
          </div>
        </div>

        <div class="border-t border-emerald-400/30 pt-8">
          <div class="flex items-center gap-4">
            <div class="flex -space-x-2">
              <div class="w-10 h-10 rounded-full bg-emerald-300 border-2 border-white flex items-center justify-center text-sm font-medium text-emerald-800">A</div>
              <div class="w-10 h-10 rounded-full bg-emerald-200 border-2 border-white flex items-center justify-center text-sm font-medium text-emerald-800">B</div>
              <div class="w-10 h-10 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center text-sm font-medium text-emerald-800">C</div>
              <div class="w-10 h-10 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-sm font-medium text-white">D</div>
            </div>
            <div>
              <p class="font-semibold text-white">10,000+ gardeners</p>
              <p class="text-emerald-200 text-sm">already growing smarter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      showPassword: false,
      features: [
        "AI-powered crop planning",
        "Plant health detection",
        "Unlimited plants tracking",
        "Smart notifications",
      ]
    }
  },
  methods: {
    handleSubmit() {
      // redirect to welcome page
      this.$router.push('welcome')
    },
    togglePassword() {
      this.showPassword = !this.showPassword
    }
  }
}
</script>
