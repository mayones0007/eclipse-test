<template>
  <div class="container">
    <div>
      <CustomSelect title="Первая Валюта" :selected="mainCurrency" @update="setMainCurrency"/>
      <input type="number" class="form-control" v-model="count1" @change="calculate(currency2)">
    </div>
    <img src="icons/arrows.svg" class="swicher" @click="reverse">
    <div>
      <CustomSelect title="Вторая Валюта" :selected="currency2" @update="calculate"/>
      <input type="number" class="form-control" v-model="count2" disabled>
    </div>
  </div>
</template>

<script setup>
import CustomSelect from '../components/CustomSelect.vue'
import { computed, ref } from 'vue'
import { useCurrencyStore } from '../stores/currency'
const store = useCurrencyStore()

const currency2 = ref(store.mainCurrency)
const count1 = ref(1)
const count2 = ref(1)

const mainCurrency = computed(() => {
  return store.mainCurrency
})

const setMainCurrency = (code) => {
  store.setMainCurrency(code)
  calculate()
}

const calculate = (code) => {
  currency2.value = code || currency2.value
  const currency = store.filteredRates.find(currency => currency.CharCode === currency2.value)
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
