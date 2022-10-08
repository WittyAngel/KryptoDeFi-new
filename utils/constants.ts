import type { TradeSettings } from 'types'

export const initialTradeSettings: TradeSettings = {
  transactionSpeed: 'standard',
  txDeadlineMins: 20,
  disableMultihops: false,
  expertMode: false,
  sound: true
}

export const NOMICS_API_KEY = '2d8bb48ac4bc1c2a3bb93b5d054ec4f8';

export const DEFAULT_TOKENS: Coin[] = [
  {
    platforms: { 'binance-smart-chain': '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' },
    logoURI: 'https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png',
    symbol: 'BNB',
    name: 'binancecoin',
    id: 'binancecoin'
  },
  {
    platforms: { 'binance-smart-chain': '0x55d398326f99059ff775485246999027b3197955' },
    logoURI: 'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
    symbol: 'USDT',
    name: 'tether',
    id: 'tether'
  },
  {
    platforms: { 'binance-smart-chain': '0xe9e7cea3dedca5984780bafc599bd69add087d56' },
    logoURI: 'https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png',
    symbol: 'BUSD',
    name: 'binance-usd',
    id: 'binance-usd'
  },
  {
    platforms: { 'binance-smart-chain': '0x2170ed0880ac9a755fd29b2688956bd959f933f8' },
    logoURI: 'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
    symbol: 'ETH',
    name: 'ethereum',
    id: 'ethereum'
  },
  {
    platforms: { 'binance-smart-chain': '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3' },
    logoURI: 'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
    symbol: 'DAI',
    name: 'dai',
    id: 'dai'
  },
  {
    platforms: { 'binance-smart-chain': '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d' },
    logoURI: 'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
    symbol: 'USDC',
    name: 'usd-coin',
    id: 'usd-coin'
  }
]
