import { Global } from '@emotion/react'

export function OnDemandA11Y() {
  return (
    <Global
      styles={`
        .js-focus-visible :focus:not([data-focus-visible-added]) {
          outline: none;
          box-shadow: none;
        }
      `}
    />
  )
}
