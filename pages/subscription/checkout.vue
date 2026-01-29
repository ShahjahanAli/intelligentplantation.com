<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <span class="font-bold text-xl text-gray-900">PlantIQ</span>
        </NuxtLink>
        <div class="flex items-center gap-2 text-sm text-gray-500">
          <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Secure Checkout
        </div>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Progress Steps -->
      <div class="flex items-center justify-center mb-8">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-medium">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-sm font-medium text-gray-900">Sign Up</span>
          </div>
          <div class="w-12 h-0.5 bg-emerald-600"></div>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-sm font-medium">2</div>
            <span class="text-sm font-medium text-gray-900">Choose Plan</span>
          </div>
          <div class="w-12 h-0.5 bg-gray-300"></div>
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-medium">3</div>
            <span class="text-sm text-gray-500">Complete</span>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Left Side: Plan Selection & Payment -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Plan Selection -->
          <div class="bg-white rounded-xl border border-gray-200 p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>

            <!-- Plan Cards -->
            <div class="grid md:grid-cols-3 gap-4">
              <button v-for="plan in plans" :key="plan.id" @click="selectPlan(plan.id)"
                class="relative p-4 rounded-xl border-2 text-left transition-all"
                :class="selectedPlan === plan.id ? 'border-emerald-600 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'">
                <div v-if="plan.popular"
                  class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </div>
                <div class="flex items-center justify-between mb-2">
                  <span class="font-semibold text-gray-900">{{ plan.name }}</span>
                  <div class="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    :class="selectedPlan === plan.id ? 'border-emerald-600 bg-emerald-600' : 'border-gray-300'">
                    <svg v-if="selectedPlan === plan.id" class="w-3 h-3 text-white" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div class="mb-3">
                  <span class="text-2xl font-bold text-gray-900">${{ plan.monthlyPrice }}</span>
                  <span class="text-gray-500 text-sm">/mo</span>
                </div>
                <ul class="space-y-1">
                  <li v-for="(feature, idx) in plan.features.slice(0,3)" :key="idx" class="flex items-center gap-2 text-xs text-gray-600">
                    <svg class="w-3 h-3 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </button>
            </div>
          </div>

          <!-- Payment Form -->
          <form @submit.prevent="handleSubmit" class="bg-white rounded-xl border border-gray-200 p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Payment Details</h2>
            
            <!-- Card Info -->
            <div class="mb-6">
              <h3 class="text-sm font-medium text-gray-700 mb-4">Card Information</h3>
              <div class="space-y-4">
                <div>
                  <label for="cardNumber" class="block text-sm text-gray-600 mb-1">Card Number</label>
                  <input v-model="form.cardNumber" id="cardNumber" type="text" placeholder="1234 5678 9012 3456"
                    class="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" required />
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label for="expiry" class="block text-sm text-gray-600 mb-1">Expiry Date</label>
                    <input v-model="form.expiry" id="expiry" type="text" placeholder="MM/YY"
                      class="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" required />
                  </div>
                  <div>
                    <label for="cvv" class="block text-sm text-gray-600 mb-1">CVV</label>
                    <input v-model="form.cvv" id="cvv" type="text" placeholder="123"
                      class="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" required />
                  </div>
                </div>
                <div>
                  <label for="cardName" class="block text-sm text-gray-600 mb-1">Name on Card</label>
                  <input v-model="form.cardName" id="cardName" type="text" placeholder="John Doe"
                    class="w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" required />
                </div>
              </div>
            </div>

            <button type="submit"
              class="w-full h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-lg">
              Purchase plan
            </button>
          </form>
        </div>

        <!-- Right Side: Summary -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl border border-gray-200 p-6 sticky top-8">
            <h2 class="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
            <div class="space-y-4 mb-6">
              <div class="flex justify-between">
                <span class="text-gray-600">{{ selectedPlanData.name }} Plan</span>
                <span class="font-medium text-gray-900">${{ selectedPlanData.monthlyPrice }}/mo</span>
              </div>
              <!-- <div class="border-t border-gray-200 pt-4">
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">14-Day Trial</span>
                  <span class="bg-emerald-100 text-emerald-700 text-xs font-medium px-2 py-1 rounded-full">FREE</span>
                </div>
              </div> -->

                <!-- Features List -->
                <div class="space-y-2 mb-6 border-t pt-4">
                    <p class="text-sm font-medium text-gray-700">Included Features:</p>
                    <ul class="space-y-1">
                    <li v-for="(feature, index) in selectedPlanData.features" :key="index" class="flex items-center gap-2 text-sm text-gray-600">
                        <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {{ feature }}
                    </li>
                    </ul>
                </div>
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
      selectedPlan: 'pro',
      plans: [
        { id: 'starter', name: 'Starter', monthlyPrice: 29, features: ['Up to 50 plants', 'Basic AI analysis', 'Email support'] },
        { id: 'pro', name: 'Pro Garden+', monthlyPrice: 49, features: ['Unlimited plants', 'Advanced AI features', 'Priority support'], popular: true },
        { id: 'enterprise', name: 'Enterprise', monthlyPrice: 99, features: ['Everything in Pro', 'Dedicated account manager', 'API access'] },
      ],
      pricingPlans: [
        { name: 'Free', description: 'For hobby gardeners just getting started', price: '$0', period: '/ Month', features: ['Track 5 plants', 'Basic watering reminders', 'Community forum access', 'Weather alerts'], cta: 'Get Started', popular: false },
        { name: 'Pro Garden+', description: 'For passionate gardeners who want more', price: '$9.99', period: '/ Month', features: ['Unlimited plants','AI plant health detection','Advanced growth analytics','Priority support','Custom reminders','Export garden data'], cta: 'Start 14-day Trial', popular: true },
        { name: 'School Garden', description: 'For schools and community gardens', price: '$100.00', period: '/ Month', features: ['Multiple garden plots','Student accounts','Lesson plan integration','Admin dashboard','Dedicated support','Custom branding'], cta: 'Contact Sales', popular: false },
      ],
      form: {
        cardNumber: '',
        expiry: '',
        cvv: '',
        cardName: '',
        address: '',
        city: '',
        state: '',
      }
    }
  },
  computed: {
    selectedPlanData() {
      return this.plans.find(p => p.id === this.selectedPlan)
    }
  },
  methods: {
    selectPlan(planId) {
      this.selectedPlan = planId
    },
    handleSubmit() {
      this.$router.push('/welcome')
    }
  }
}
</script>
