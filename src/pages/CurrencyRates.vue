<template>
  <CustomFilter/>
  <CustomSelect/>
  <CustomTable/>
</template>

<script setup>
import { onUnmounted } from 'vue'
import { useCurrencyStore } from '../stores/currency'
const store = useCurrencyStore()

import CustomFilter from '../components/CustomFilter.vue'
import CustomSelect from '../components/CustomSelect.vue'
import CustomTable from '../components/CustomTable.vue'

onUnmounted(() => {
  store.setFilter()
})
</script>
