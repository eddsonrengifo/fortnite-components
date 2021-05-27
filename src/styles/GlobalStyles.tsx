import React from 'react'
import { Global, css } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  @font-face {
    font-family: 'Burbank Big Condensed';
    src: url('//db.onlinewebfonts.com/t/cdc8c3de1e6bd5a9a67c6a001f9fedd0.eot');
    src: url('//db.onlinewebfonts.com/t/cdc8c3de1e6bd5a9a67c6a001f9fedd0.eot?#iefix')
        format('embedded-opentype'),
      url('//db.onlinewebfonts.com/t/cdc8c3de1e6bd5a9a67c6a001f9fedd0.woff2')
        format('woff2'),
      url('//db.onlinewebfonts.com/t/cdc8c3de1e6bd5a9a67c6a001f9fedd0.woff')
        format('woff'),
      url('//db.onlinewebfonts.com/t/cdc8c3de1e6bd5a9a67c6a001f9fedd0.ttf')
        format('truetype'),
      url('//db.onlinewebfonts.com/t/cdc8c3de1e6bd5a9a67c6a001f9fedd0.svg#Burbank Big Condensed')
        format('svg');
  }
`

const GlobalStyles = () => (
  <>
    <Global styles={customStyles} />
    <BaseStyles />
  </>
)

export default GlobalStyles
