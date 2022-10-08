import { Action } from 'redux-actions'

export const INITIAL_AUTH_STATE = Object.freeze({
  authenticated: false
})

export const setAuthenticatedUpdater = (state: AuthState, action: Action<any>): AuthState => ({
  ...state,
  authenticated: action.payload
})
