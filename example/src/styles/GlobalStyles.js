import React from 'react'
import { Global, css } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import burbankFont from '../assets/fonts/BurbankBigCondensed-Black.ttf'

const customStyles = css`
  @font-face {
    font-family: 'Burbank Big Condensed black';
    src: url(${burbankFont});
  }
  .all {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 20px;
    padding: 30px;
    color: #fff;
    background: #2d2d2d;
  }
  .item {
    width: 100%;
  }
  @media screen and (max-width: 1100px) {
    .all {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 800px) {
    .all {
      display: block;
      padding: 0;
    }
    .item {
      width: auto;
    }
  }
`

// import customStyles from 'fortnite-components/customStyles'

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
