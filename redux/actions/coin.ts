import { Action, createAction } from 'redux-actions'
import { ThunkAction } from 'redux-thunk'
import { CoinActionTypes } from 'redux/action-types'
import { fetchCoinsList } from 'services/coingecko'

export const setCoins = createAction<Coin[], Coin[]>(
  CoinActionTypes.SET_COINS,
  (payload) => payload
)

export const getCoins = (refresh = false): ThunkAction<void, RootState, unknown, Action<any>> => {
  return async (dispatch, getState) => {
    const { coins } = getState().coin

    if (coins.length && !refresh) {
      return false
    }

    fetchCoinsList(true)
      .then((coins) =>
        dispatch(
          setCoins(
            coins
              .filter((c) => c.platforms?.['binance-smart-chain'])
              .map((c) => ({ ...c, address: c.platforms['binance-smart-chain'] }))
          )
        )
      )
      .catch((err) => console.log(err))
  }
}
