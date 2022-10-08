import type { RequireExactlyOne, ValueOf } from 'type-fest'

const english = require('../public/locales/english.json')

type I18nKey = ValueOf<typeof english>

export type NavigationItem = RequireExactlyOne<
  {
    label: string
    i18nKey: I18nKey
    destination: string
  },
  'label' | 'i18nKey'
>

export type TradeFormCoin = {
  ticker: string
  value: number
  address: string
  decimal: number
}

export type BuyCryptoValues = {
  buy: {
    value: number
    ticker: string
    decimal: number
  }
  pay: {
    value: number
    currency: string
    decimal: number
  }
}

export type TradeFormValues = {
  slippage: number
  from: TradeFormCoin
  to: TradeFormCoin
  decimal: number
}

export type TradeTickerProps = {
  from: string
  to: string
}

// TODO: Is `type` property valid? There's only 'buy' type in design
export type TokenTXFeedProps = {
  items: Array<{
    type: 'buy' | 'sell'
    tokens: number
    txPrice: {
      dollar: number
      bnb: number
    }
    dollarPrice: number
    tokenName: string
    time: string
    txTracker: string
  }>
}

export type TradeSettings = {
  transactionSpeed: 'standard' | 'fast' | 'instant'
  txDeadlineMins: number
  expertMode: boolean
  disableMultihops: boolean
  sound: boolean
}

declare module 'axios' {
  export interface AxiosInstance {
    request<T = any>(config: AxiosRequestConfig): Promise<T>
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  }
}
