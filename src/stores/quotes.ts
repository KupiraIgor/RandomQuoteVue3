import { defineStore } from 'pinia'
import axiosInstanceQuotable from '@/api/axiosConfig.js'
import axios from 'axios'
import { ref } from 'vue'

export const useQuotes = defineStore('quotes', () => {
  const randomQuote = ref(null)
  const getQuote = async () => {
    try {
      const response = await axiosInstanceQuotable.get('quote')
      randomQuote.value = response.data
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  return { randomQuote, getQuote }
})
