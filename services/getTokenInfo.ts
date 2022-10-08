import axios from 'axios'

const getTokenInfoApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3'
})

getTokenInfoApi.interceptors.response.use((res) => {
  return res.data
})

export const getTokenInfo = (tokenId) =>
  getTokenInfoApi.get<any>('/coins/' + tokenId)

export default getTokenInfoApi
