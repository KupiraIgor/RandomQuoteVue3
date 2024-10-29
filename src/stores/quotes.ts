import { defineStore } from 'pinia'
import axiosInstanceQuotable from '@/api/axiosConfig.js'
import { ref } from 'vue'
import axios from 'axios'

export const useQuotes = defineStore('quotes', () => {
  const randomQuote = ref(null)
  const errorRandomQuote = ref(null)

  const getQuote = async () => {
    try {
      const response = await axiosInstanceQuotable.get('quote')
      randomQuote.value = response.data
    } catch (error) {
      console.error(error)
      errorRandomQuote.value = error
      throw error
    }
  }
  return { randomQuote, errorRandomQuote, getQuote }
})
