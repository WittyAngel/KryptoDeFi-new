import { Action, handleActions } from 'redux-actions'
import { AuthActionTypes } from 'redux/action-types'
import * as authStateUpdaters from './auth-state-updaters'

const actionHandler = {
  [AuthActionTypes.SET_AUTHENTICATED]: authStateUpdaters.setAuthenticatedUpdater
}

export default handleActions<AuthState, Action<any>>(
  actionHandler,
  authStateUpdaters.INITIAL_AUTH_STATE
)
