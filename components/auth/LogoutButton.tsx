import type { ReactNode } from 'react'
import { isValidElement, cloneElement } from 'react'
import { useMoralis } from 'react-moralis'
import { useDispatch } from 'react-redux'
import { setAuthenticated } from 'redux/actions'

export type LogoutButtonProps = {
  element: ReactNode
}

export function LogoutButton({ element }: LogoutButtonProps) {
  if (!isValidElement(element)) {
    throw new Error('Logout button element must be valid React element')
  }

  const dispatch = useDispatch()
  const { isAuthenticated, logout } = useMoralis()

  const handleLogout = async () => {
    await logout()
    dispatch(setAuthenticated(isAuthenticated))
  }

  return <>{cloneElement(element, { onClick: handleLogout })}</>
}
