<template>
  <div class="input-group mb-3">
    <label class="input-group-text" for="mainCurrency">Основная Валюта</label>
    <select class="form-select" id="mainCurrency" @change="setMainCurrency">
      <option v-for="rate of currencyRates" :key="rate.ID" :selected="rate.CharCode === mainCurrency">
        {{rate.CharCode}}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCurrencyStore } from '../../stores/currency'
const store = useCurrencyStore()

const currencyRates = computed(() => {
  return store.currencyRates
})

const mainCurrency = computed(() => {
  return store.mainCurrency
})

const setMainCurrency = (e) => {
  store.setMainCurrency(e.target.value)
}
</script>
