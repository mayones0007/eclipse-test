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
import { computed } from 'vue'
import { useCurrencyStore } from '../stores/currency'
const store = useCurrencyStore()

defineProps(['title', 'selected'])
defineEmits(['update'])

const currencyRates = computed(() => {
  return store.currencyRates.map(item => item.CharCode)
})
</script>
z