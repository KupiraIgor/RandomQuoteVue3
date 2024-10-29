import axios from 'axios'

const API_QUOTABLE_URL = 'https://quotes-api-self.vercel.app/'

const axiosInstanceQuotable = axios.create({
  baseURL: API_QUOTABLE_URL,
})

export default axiosInstanceQuotable
