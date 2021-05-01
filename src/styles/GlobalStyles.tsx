import React from 'react'
import { Global, css } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  @font-face {
    font-family: 'Burbank Big Condensed black';
    src: url('http://db.onlinewebfonts.com/t/cdc8c3de1e6bd5a9a67c6a001f9fedd0.eot'); /* IE9*/
    src: url('http://db.onlinewebfonts.com/t/cdc8c3de1e6bd5a9a67c6a001f9fedd0.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */
        url('http://db.onlinewebfonts.com/t/cdc8c3de1e6bd5a9a67c6a001f9fedd0.woff2')
        format('woff2'),
      /* chrome firefox */
        url('http://db.onlinewebfonts.com/t/cdc8c3de1e6bd5a9a67c6a001f9fedd0.woff')
        format('woff'),
      /* chrome firefox */
        url('http://db.onlinewebfonts.com/t/cdc8c3de1e6bd5a9a67c6a001f9fedd0.ttf')
        format('truetype'),
      /* chrome firefox opera Safari, Android, iOS 4.2+*/
        url('http://db.onlinewebfonts.com/t/cdc8c3de1e6bd5a9a67c6a001f9fedd0.svg#Burbank Big Condensed')
        format('svg'); /* iOS 4.1- */
  }
`

const GlobalStyles = () => (
  <>
    <Global styles={customStyles} />
    <BaseStyles />
  </>
)

export default GlobalStyles
