import axios from 'axios'
import Web3 from 'web3'

const zrxBaseUrl = 'api.0x.org'

declare let window: any

export const getQuoteZrx = async (sellToken: any, butToken: any, sellAmount: any) => {
  let quote: any = {}
  try {
    const response = await axios.get(`https://bsc.${zrxBaseUrl}/swap/v1/quote`, {
      params: {
        buyToken: butToken,
        sellToken: sellToken,
        sellAmount: sellAmount
      }
    })
    if (response.status === 200) {
      quote = response.data
    }
  } catch (err) {
    console.error(err)
  }
  return quote
}

export const getSwapZrx = async (
  sellToken: any,
  buyToken: any,
  sellAmount: any,
  takerAddress: any,
  slippagePercentage: any
) => {
  let swapData: any = {}
  try {
    const response = await axios.get(`https://bsc.${zrxBaseUrl}/swap/v1/quote`, {
      params: {
        buyToken: buyToken,
        sellToken: sellToken,
        sellAmount: sellAmount,
        takerAddress: takerAddress,
        slippagePercentage: slippagePercentage,
        feeRecipient: '0xF4b7B3cA0b67D47fB2f172085E034b8f83cE451b',
        buyTokenPercentageFee: 0.15,
      }
    })

    swapData = response.data
    console.log(swapData)
  } catch (err) {
    console.error(err)
  }
  return swapData
}

export const getSwapAllowance = async (
  sellToken: any,
  buyToken: any,
  sellAmount: any,
  slippagePercentage: any
) => {
  let swapData: any = {}
  try {
    const response = await axios.get(`https://bsc.${zrxBaseUrl}/swap/v1/quote`, {
      params: {
        buyToken: buyToken,
        sellToken: sellToken,
        sellAmount: sellAmount,
        slippagePercentage: slippagePercentage,
        feeRecipient: '0xF4b7B3cA0b67D47fB2f172085E034b8f83cE451b',
        buyTokenPercentageFee: 0.15
      }
    })
    const quote = response.data
    console.log(quote)
    swapData = quote
  } catch (err) {
    console.error(err)
  }
  return swapData
}

export const getTokenListZrx = async () => {
  let tokenList: any = []
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/list?include_platform=true'
    )
    if (response.status === 200) {
      tokenList = response.data
    }
  } catch (err) {
    console.error(err)
  }
  return tokenList
}
