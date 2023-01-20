import { defineStore } from 'pinia'
import axios from 'axios'

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    mainCurrency: 'RUB',
    currencyRates: [],
    countedRates: [],
    filteredRates: [],
    filters: {},
  }),
  actions: {
    async getСurrencyRates() {
      const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
      this.currencyRates = [...Object.values(response.data.Valute), {
        "ID": "R00001",
        "NumCode": "643",
        "CharCode": "RUB",
        "Nominal": 1,
        "Name": "Российский рубль",
        "Value": 1,
        "Previous": 1
      }]
      this.countedRates = this.currencyRates
      this.setFilter()
    },
    setFilter(params) {
      this.filters = params
      this.filteredRates = this.filters?.filter ? 
      this.countedRates.filter(currencyRate => 
        this.filters.filterFields.some(field => 
          currencyRate[field].toLowerCase().includes(this.filters.filter.toLowerCase()))) : 
      this.countedRates
    },
    setMainCurrency(CharCode) {
      this.mainCurrency = CharCode
      const currencyRate = this.currencyRates.find(currency => currency.CharCode === CharCode)
      this.countedRates = this.currencyRates.map(currency => ({
        ...currency,
        Value: currency.Value / currencyRate.Value * currencyRate.Nominal,
        Previous: currency.Previous / currencyRate.Previous * currencyRate.Nominal
      }))
      this.setFilter(this.filters)
    }
  },
})