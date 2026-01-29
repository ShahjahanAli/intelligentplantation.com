<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200">
      <div class="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <span class="font-bold text-lg text-gray-900">PlantIQ</span>
        </div>
        <span class="text-sm text-gray-500">Step {{ step }} of {{ totalSteps }}</span>
      </div>
      <div class="h-1 bg-gray-200">
        <div class="h-full bg-emerald-500 transition-all duration-300" :style="{ width: progress + '%' }"></div>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-1 flex items-center justify-center p-8">
      <div class="text-center max-w-xl w-full">
        <!-- Step 1: Welcome -->
        <div v-if="step === 1">
          <h1 class="text-3xl font-bold text-gray-900 mb-3">Welcome to PlantIQ!</h1>
          <p class="text-emerald-600 font-medium mb-4">Your 14-day Pro trial has started</p>
          <p class="text-gray-500 mb-8">Let's get you set up in just a few steps. We'll personalize your experience based on your gardening goals.</p>
        </div>

        <!-- Step 2: Question -->
        <div v-if="step === 2">
          <h1 class="text-2xl font-bold text-gray-900 mb-2">What describes you best?</h1>
          <p class="text-gray-500 mb-6">Help us personalize your experience</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <button
              v-for="option in questionOptions"
              :key="option.value"
              @click="selectOption(option.value)"
              :class="['border rounded-lg p-4 text-left transition-all', selectedOption === option.value ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-emerald-400']"
            >
              <p class="font-semibold">{{ option.label }}</p>
              <p class="text-sm text-gray-500">{{ option.description }}</p>
            </button>
          </div>
        </div>

        <!-- Step 3: Completion -->
        <div v-if="step === 3">
          <h1 class="text-3xl font-bold text-gray-900 mb-3">You’re all set!</h1>
          <p class="text-emerald-600 font-medium mb-4">Ready to grow 🌱</p>
          <p class="text-gray-500 mb-8">Let’s jump into your dashboard.</p>
        </div>

        <!-- Navigation buttons -->
        <div class="flex justify-center items-center gap-4">
          <button
            v-if="step > 1"
            @click="prevStep"
            class="border border-emerald-500 text-emerald-500 px-6 py-2 rounded-lg hover:bg-emerald-50 transition"
          >
            Back
          </button>

          <button
            @click="nextStep"
            class="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition"
          >
            {{ step === totalSteps ? 'Go to Dashboard →' : 'Continue →' }}
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      step: 1,
      totalSteps: 3,
      selectedOption: null,
      questionOptions: [
        { label: 'Hobby Gardener', description: 'Growing for fun and personal use', value: 'hobby' },
        { label: 'Serious Gardener', description: 'Dedicated to optimizing my garden', value: 'serious' },
        { label: 'Commercial Grower', description: 'Growing for business purposes', value: 'commercial' },
        { label: 'Educator', description: 'Teaching gardening to others', value: 'educator' },
      ],
    }
  },
  computed: {
    progress() {
      return (this.step / this.totalSteps) * 100
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option
    },
    nextStep() {
      if (this.step === 2 && !this.selectedOption) {
        alert('Please select an option to continue')
        return
      }
      if (this.step < this.totalSteps) {
        this.step++
      } else {
        this.$router.push('Admin/dashboard')
      }
    },
    prevStep() {
      if (this.step > 1) this.step--
    }
  }
}
</script>
