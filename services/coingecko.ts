import axios from 'axios'

const coingeckoApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3'
})

coingeckoApi.interceptors.response.use((res) => {
  return res.data
})

export const fetchCoinsList = (include_platform = true) =>
  coingeckoApi.get<Coin[]>('/coins/list', { params: { include_platform } })

export default coingeckoApi
