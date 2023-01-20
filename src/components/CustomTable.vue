<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Код</th>
        <th>Название</th>
        <th>Курс</th>
        <th class="column__name-last">Изменение курса</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="rate of filteredRates" :key="rate.ID">
        <td>{{rate.NumCode}}</td>
        <td>{{rate.Name}}</td>
        <td>{{rate.Nominal}} {{rate.CharCode}} - {{rate.Value.toFixed(4)}} {{mainCurrency}}</td>
        <td v-if="getDifference(rate) > 0" class="rate">{{getDifference(rate)}} &#9650;</td>
        <td v-else class="rate rate-red">{{getDifference(rate)}} &#9660;</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { computed } from 'vue'
import { useCurrencyStore } from '../stores/currency'
const store = useCurrencyStore()

const filteredRates = computed(() => {
  return store.filteredRates.filter(item => item.CharCode !== mainCurrency.value)
})

const mainCurrency = computed(() => {
  return store.mainCurrency
})

const getDifference = (item) => {
  return (item.Previous - item.Value).toFixed(4)
}
</script>

<style scoped>
.column__name-last {
  text-align: end;
}
.rate {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  color: green !important;
}
.rate-red {
  color: red !important;
}
</style>
