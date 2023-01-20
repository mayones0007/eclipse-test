<template>
  <div class="input-group mb-3">
    <label class="input-group-text" for="select">{{title}}</label>
    <select class="form-select" id="select" @change="$emit('update', $event.target.value)">
      <option v-for="item of currencyRates" :key="item" :selected="item === selected">
        {{item}}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
defineProps(['title', 'selected'])
defineEmits(['update'])

import { useCurrencyStore } from '../stores/currency'
const store = useCurrencyStore()

const currencyRates = computed(() => {
  return store.currencyRates.map(item => item.CharCode)
})
</script>
