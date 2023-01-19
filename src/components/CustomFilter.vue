<template>
  <div class="input-group mb-3 search">
    <input type="text" class="form-control" placeholder="Введите название валюты или ее код" v-model.trim="filter">
    <div class="input-group-append">
      <button class="btn btn-outline-success" @click="setFilter">Поиск</button>
      <button class="btn btn-outline-danger" @click="resetFilter">Сбросить</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCurrencyStore } from '../stores/currency'
const store = useCurrencyStore()

const filter = ref(store.filter)
const filterFields = ['NumCode', 'Name']

const resetFilter = () => {
  filter.value = ''
  store.setFilter('')
}

const setFilter = () => {
  store.setFilter({filter: filter.value, filterFields})
}
</script>
