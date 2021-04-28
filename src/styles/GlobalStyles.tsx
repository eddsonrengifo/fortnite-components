import React from 'react'
import { Global, css } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import burbank from './../assets/fonts/BurbankBigCondensed-Black.ttf'

const customStyles = css`
  @font-face {
    font-family: 'Burbank Big Condensed black';
    src: url(${burbank});
  }
`

const GlobalStyles = () => (
  <>
    <Global styles={customStyles} />
    <BaseStyles />
  </>
)

export default GlobalStyles
