<template>
  <div class="container">
    <div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="mainCurrency">Первая Валюта</label>
        <select class="form-select" id="mainCurrency" @change="setMainCurrency">
          <option v-for="rate of filteredRates" :key="rate.ID" :selected="rate.CharCode === mainCurrency">
            {{rate.CharCode}}
          </option>
        </select>
      </div>
      <input type="number" class="form-control" v-model="count1" @change="calculate">
    </div>
    <img src="icons/arrows.svg" class="swicher" @click="reverse">
    <div>
      <div class="input-group mb-3">
        <label class="input-group-text" for="mainCurrency">Вторая Валюта</label>
        <select class="form-select" id="mainCurrency" v-model="currency2" @change="calculate">
          <option v-for="rate of filteredRates" :key="rate.ID" :selected="rate.CharCode === currency2">
            {{rate.CharCode}}
          </option>
        </select>
      </div>
      <input type="number" class="form-control" v-model="count2" disabled>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCurrencyStore } from '../stores/currency'
const store = useCurrencyStore()

const filteredRates = computed(() => {
  return store.filteredRates
})

const currency2 = ref(store.mainCurrency)
const count1 = ref(1)
const count2 = ref(1)

const mainCurrency = computed(() => {
  return store.mainCurrency
})

const setMainCurrency = (e) => {
  store.setMainCurrency(e.target.value)
  calculate()
}

const calculate = () => {
  const currency = filteredRates.value.find(currency => currency.CharCode === currency2.value)
  count2.value = (count1.value / currency.Value * currency.Nominal).toFixed(4)
}

const reverse = () => {
  const n = mainCurrency.value
  store.setMainCurrency(currency2.value)
  currency2.value = n
  calculate()
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 30px 1fr;
  align-items: center;
  gap: 20px;
}
.swicher {
  cursor: pointer;
}
</style>
