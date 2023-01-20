<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Введите название валюты или ее код" v-model.trim="filter">
    <button class="btn btn-outline-success" @click="setFilter">Поиск</button>
    <button class="btn btn-outline-danger" @click="resetFilter">Сбросить</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCurrencyStore } from '../stores/currency'
const store = useCurrencyStore()

const filter = ref('')
const filterFields = ['NumCode', 'Name']

const resetFilter = () => {
  filter.value = ''
  store.setFilter('')
}

const setFilter = () => {
  store.setFilter({filter: filter.value, filterFields})
}
</script>
