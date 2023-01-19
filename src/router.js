import { createRouter, createWebHistory } from "vue-router"
import CurrencyRates from './pages/CurrencyRates.vue'
import CurrencyConverter from './pages/CurrencyConverter.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: CurrencyRates },
    { path: '/converter', component: CurrencyConverter }
  ]
})
