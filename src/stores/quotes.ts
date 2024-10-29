import { defineStore } from 'pinia'
import axiosInstanceQuotable from '@/api/axiosConfig.js'
import { ref } from 'vue'

export const useQuotes = defineStore('quotes', () => {
  const randomQuote = ref(null)
  const errorRandomQuote = ref(null)
  const quotesHistory = ref(JSON.parse(localStorage.getItem('quotes')) || [])

  const getQuote = async () => {
    try {
      const response = await axiosInstanceQuotable.get('quote')
      randomQuote.value = response.data

      quotesHistory.value.unshift(randomQuote.value)

      if (quotesHistory.value.length > 5) {
        quotesHistory.value.pop()
      }

      saveQuotesToLocalStorage()
    } catch (error) {
      console.error(error)
      errorRandomQuote.value = error
      throw error
    }
  }

  const saveQuotesToLocalStorage = () => {
    localStorage.setItem('quotes', JSON.stringify(quotesHistory.value))
  }
  return { randomQuote, errorRandomQuote, quotesHistory, getQuote }
})
