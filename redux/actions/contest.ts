import { ContestTypes } from 'redux/action-types'
import * as contestService from 'services/contest'

export const registerContestAction =
  (params = {}) =>
  async (dispatch) => {
    dispatch({
      type: ContestTypes.REGISTER_CONTEST_REQUEST
    })

    try {
      const response = await contestService.registerContest(params)

      dispatch({
        type: ContestTypes.REGISTER_CONTEST_SUCCESS,
        payload: response.data.data
      })

      return response
    } catch (e) {
      dispatch({
        type: ContestTypes.REGISTER_CONTEST_FAILED
      })
      throw e
    }
  }

export const getContestRegistrationAction = (userId) => async (dispatch) => {
  dispatch({
    type: ContestTypes.GET_CONTEST_REGISTRATION_REQUEST
  })

  try {
    const response = await contestService.getContestRegistration(userId)

    dispatch({
      type: ContestTypes.GET_CONTEST_REGISTRATION_SUCCESS,
      payload: response.data.data
    })

    return response
  } catch (e) {
    dispatch({
      type: ContestTypes.GET_CONTEST_REGISTRATION_FAILED
    })
    throw e
  }
}

export const getContestResultAction = () => async (dispatch) => {
  dispatch({
    type: ContestTypes.GET_CONTEST_REGISTRATION_REQUEST
  })

  try {
    const response = await contestService.getContestResult()

    dispatch({
      type: ContestTypes.GET_CONTEST_REGISTRATION_SUCCESS,
      payload: response.data.data
    })

    return response
  } catch (e) {
    dispatch({
      type: ContestTypes.GET_CONTEST_REGISTRATION_FAILED
    })
    throw e
  }
}
