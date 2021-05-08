import React from 'react'
import { Global, css } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  @import url(//db.onlinewebfonts.com/c/cdc8c3de1e6bd5a9a67c6a001f9fedd0?family=Burbank+Big+Condensed);
`

const GlobalStyles = () => (
  <>
    <Global styles={customStyles} />
    <BaseStyles />
  </>
)

export default GlobalStyles
