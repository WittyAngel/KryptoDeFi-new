import { Action } from 'redux-actions'
import { ReferralTypes } from 'redux/action-types'

const INITIAL_STATE = Object.freeze({
  isLoading: false,
  referredUsers: [],
  referralCode: ''
})

export default (state = INITIAL_STATE, action: Action<any>) => {
  switch (action.type) {
    case ReferralTypes.GENERATE_REFERRAL_CODE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case ReferralTypes.GENERATE_REFERRAL_CODE_SUCCESS:
      return {
        ...state,
        referralCode: action.payload,
        isLoading: false
      }
    case ReferralTypes.GENERATE_REFERRAL_CODE_FAILED:
      return {
        ...state,
        isLoading: false
      }
    case ReferralTypes.GET_REFERRED_USERS_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case ReferralTypes.GET_REFERRED_USERS_BY_ID_SUCCESS:
      return {
        ...state,
        referredUsers: action.payload,
        isLoading: false
      }
    case ReferralTypes.GET_REFERRED_USERS_BY_ID_FAILED:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
