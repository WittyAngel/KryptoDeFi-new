import { Action, handleActions } from 'redux-actions'
import { CoinActionTypes } from 'redux/action-types'
import * as coinStateUpdaters from './coin-state-updaters'

const actionHandler = {
  [CoinActionTypes.SET_COINS]: coinStateUpdaters.setCoinsUpdater
}

export default handleActions<CoinState, Action<any>>(
  actionHandler,
  coinStateUpdaters.INITIAL_COIN_STATE
)
