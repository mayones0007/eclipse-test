<template>
  <div class="nav">
    <router-link to="/">Список валют</router-link>
    <router-link to="/converter">Конвертер валют</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCurrencyStore } from '../src/stores/currency'
const store = useCurrencyStore()

onMounted(() => {
  store.getСurrencyRates()
})
</script>

<style>
#app {
  padding: 40px;
}
.nav {
  display: flex;
  gap: 20px;
  height: 40px;
}
</style>
