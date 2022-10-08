import { createAction } from 'redux-actions'
import { AuthActionTypes } from 'redux/action-types'

export const setAuthenticated = createAction<boolean, boolean>(
  AuthActionTypes.SET_AUTHENTICATED,
  (payload) => payload
)
