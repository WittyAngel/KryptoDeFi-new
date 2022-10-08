import { Action } from 'redux-actions'

export const INITIAL_COIN_STATE = Object.freeze({
  coins: []
})

export const setCoinsUpdater = (state: CoinState, action: Action<any>): CoinState => ({
  ...state,
  coins: action.payload
})
