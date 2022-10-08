import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducers'
import { generateReferralCodeAction, getReferredUsersAction } from 'redux/actions/referral'

export const useReferralLoading = () =>
  useSelector(({ referral: { isLoading } }: RootState) => isLoading)

export const useGenerateReferralCode = () => {
  const dispatch = useDispatch()
  return (data) => dispatch(generateReferralCodeAction(data))
}

export const useGetReferredUsers = (userId) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (userId) {
      dispatch(getReferredUsersAction(userId))
    }
  }, [userId])
  return useSelector(({ referral: { referredUsers } }: RootState) => referredUsers)
}
