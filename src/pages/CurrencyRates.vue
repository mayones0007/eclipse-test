<template>
  <CustomFilter/>
  <CustomSelect
    title="Основная валюта"
    :selected="mainCurrency"
    @update="setMainCurrency"
  />
  <CustomTable/>
</template>

<script setup>
import CustomFilter from '../components/CustomFilter.vue'
import CustomSelect from '../components/CustomSelect.vue'
import CustomTable from '../components/CustomTable.vue'
import { computed, onUnmounted } from 'vue'
import { useCurrencyStore } from '../stores/currency'
const store = useCurrencyStore()

const mainCurrency = computed(() => {
  return store.mainCurrency
})

const setMainCurrency = (code) => {
  store.setMainCurrency(code)
}

onUnmounted(() => {
  store.setFilter()
})
</script>
