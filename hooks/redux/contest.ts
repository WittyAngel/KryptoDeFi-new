import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducers'
import {
  registerContestAction,
  getContestRegistrationAction,
  getContestResultAction
} from 'redux/actions/contest'

export const useContest = () =>
  useSelector(({ contest }: RootState) => contest)

export const useRegisterContest = () => {
  const dispatch = useDispatch()
  return (data) => dispatch(registerContestAction(data))
}

export const useGetContestRegistration = (userId) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (userId) {
      dispatch(getContestRegistrationAction(userId))
    }
  }, [userId])
  return useSelector(({ contest: { user } }: RootState) => user)
}

export const useContestResult = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getContestResultAction())
  }, [])
  return useSelector(({ contest: { result } }: RootState) => result)
}
