import { Action } from 'redux-actions'
import { ContestTypes } from 'redux/action-types'

const INITIAL_STATE = Object.freeze({
  isLoading: false,
  user: [],
  groups: [
    {
      group_id: 1,
      name: 'Mr. Advice',
      totalParticipants: '*****',
      totalAmount: '******',
      icon: 'Plane'
    },
    {
      group_id: 2,
      name: 'Encyklopedia Kryptowalut',
      totalParticipants: '*****',
      totalAmount: '******',
      icon: 'Tank'
    },
    {
      group_id: 3,
      name: 'zDEFIniowani',
      totalParticipants: '*****',
      totalAmount: '******',
      icon: 'Heli'
    },
    {
      group_id: 4,
      name: 'Scamerzy',
      totalParticipants: '*****',
      totalAmount: '******',
      icon: 'Boot'
    }
  ],
  result: {}
})

export default (state = INITIAL_STATE, action: Action<any>) => {
  switch (action.type) {
    case ContestTypes.REGISTER_CONTEST_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case ContestTypes.REGISTER_CONTEST_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      }
    case ContestTypes.REGISTER_CONTEST_FAILED:
      return {
        ...state,
        isLoading: false
      }
    case ContestTypes.GET_CONTEST_REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case ContestTypes.GET_CONTEST_REGISTRATION_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      }
    case ContestTypes.GET_CONTEST_REGISTRATION_FAILED:
      return {
        ...state,
        isLoading: false
      }
    case ContestTypes.GET_CONTEST_RESULT_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case ContestTypes.GET_CONTEST_RESULT_SUCCESS:
      return {
        ...state,
        result: action.payload,
        isLoading: false
      }
    case ContestTypes.GET_CONTEST_RESULT_FAILED:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
