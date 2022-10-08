import { combineReducers } from 'redux'
import authReducer from './auth-state'
import coinReducer from './coin-state'
import referralReducer from './referral'
import contestReducer from './contest'

const reducers = combineReducers({
  auth: authReducer,
  coin: coinReducer,
  referral: referralReducer,
  contest: contestReducer
})

export type RootState = ReturnType<typeof reducers>

export default reducers
