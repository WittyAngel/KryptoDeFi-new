import { Global } from '@emotion/react'

export function Fonts() {
  return (
    <Global
      styles={`
    @font-face {
      font-family: 'Formation Sans';
      font-style:  normal;
      font-weight: normal;
      src: url('/Formation Sans Regular.woff2') format('woff2');
    }
    
    @font-face {
      font-family: 'Lato';
      font-style:  normal;
      font-weight: normal;
      src: url('/Lato Regular.woff2') format('woff2');
    }
   
    @font-face {
      font-family: 'Lato';
      font-style:  italic;
      font-weight: normal;
      src: url('/Lato Italic.woff2') format('woff2');
    }
    
    @font-face {
      font-family: 'Lato';
      font-style:  normal;
      font-weight: bold;
      src: url('/Lato Bold.woff2') format('woff2');
    }
    
    @font-face {
      font-family: 'Lato';
      font-style:  italic;
      font-weight: bold;
      src: url('/Lato Bold Italic.woff2') format('woff2');
    }
  `}
    />
  )
}
