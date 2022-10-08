import { ReferralTypes } from 'redux/action-types'
import * as referralService from 'services/referral'

export const getReferredUsersAction = (userId) => async (dispatch) => {
  dispatch({
    type: ReferralTypes.GET_REFERRED_USERS_BY_ID_REQUEST
  })

  try {
    const response = await referralService.getReferredUsersById(userId)

    dispatch({
      type: ReferralTypes.GET_REFERRED_USERS_BY_ID_SUCCESS,
      payload: response.data
    })

    return response.data
  } catch (e) {
    dispatch({
      type: ReferralTypes.GET_REFERRED_USERS_BY_ID_FAILED
    })
    throw e
  }
}

export const generateReferralCodeAction =
  (params = {}) =>
  async (dispatch) => {
    dispatch({
      type: ReferralTypes.GENERATE_REFERRAL_CODE_REQUEST
    })

    try {
      const response = await referralService.generateReferralCode(params)

      dispatch({
        type: ReferralTypes.GENERATE_REFERRAL_CODE_SUCCESS,
        payload: response.data.data?.referral_code
      })

      return response.data
    } catch (e) {
      dispatch({
        type: ReferralTypes.GENERATE_REFERRAL_CODE_FAILED
      })
      throw e
    }
  }
