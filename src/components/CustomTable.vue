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
        <td>{{rate.Nominal}} {{rate.CharCode}} - {{(rate.Value).toFixed(4)}} {{mainCurrency}}</td>
        <td class="table__cell">
          <div class="rate-green" :class="{'rate-red': (rate.Previous - rate.Value) < 0}">{{(rate.Previous - rate.Value).toFixed(4)}}</div>
          <img class="icon__caret"
            :class="{'icon__caret-reverse': (rate.Previous - rate.Value) < 0}"
            src="icons/caret.svg"
          >
        </td>
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
</script>

<style scoped>
.table__cell {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
.column__name-last {
  text-align: end;
}
.icon__caret {
  transform: rotate(180deg);
}
.icon__caret-reverse {
  filter:hue-rotate(270deg);
  transform: rotate(0deg);
}
.rate-green {
  color: green;
}
.rate-red {
  color: red;
}
</style>
