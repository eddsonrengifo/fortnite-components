import React from 'react'
import { Global, css } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'
import darkSeries from './../assets/backgrounds/DarkSeriesBackground.png'
import marvel from './../assets/backgrounds/marvelBackground.png'
import iconSeries from './../assets/backgrounds/IconSeriesBackground.png'
import slurpSeries from './../assets/backgrounds/slurpSeriesBackground.png'
import shadowSeries from './../assets/backgrounds/shadowSeriesBackground.png'
import frozenSeries from './../assets/backgrounds/frozenSeriesBackground.png'
import dc from './../assets/backgrounds/dcSeriesBackground.png'
import lavaSeries from './../assets/backgrounds/lavaSeriesBackground.png'
import gamingSeries from './../assets/backgrounds/platformSeriesBackground.png'
import starwars from './../assets/backgrounds/starwarsBackground.png'
import burbank from './../assets/fonts/BurbankBigCondensed-Black.ttf'

const customStyles = css`
  .fishAnimation {
    animation: fish 5s ease-in-out infinite;
  }

  @keyframes fish {
    0% {
      transform: translateY(10px) scaleX(-1);
    }
    50% {
      transform: translateY(-5px) scaleX(-1);
    }
    100% {
      transform: translateY(10px) scaleX(-1);
    }
  }

  @font-face {
    font-family: 'Burbank Big Condensed black';
    src: url(${burbank});
  }

  .banner-v1 {
    color: black !important;
    background-color: #fcff00 !important;
    border-color: #fff !important;
  }
  .banner-v2 {
    color: #fff !important;
    background-color: #d3016a !important;
    border-color: #ff2b74 !important;
  }

  .linearRarity-starWars {
    background: #3974fe !important;
    border-color: #3974fe !important;
  }
  .rarity-starWars {
    background: radial-gradient(black, black 100%) !important;
    background-image: url(${starwars}), radial-gradient(black, black 100%) !important;
    background-position: center !important;
    background-size: 100% 100% !important;
  }
  .linearRarity-gamingSeries {
    background: #7b6fd9 !important;
    border-color: #7c70da !important;
  }
  .rarity-gamingSeries {
    background: linear-gradient(transparent 60%, #3d4a9d),
      radial-gradient(transparent, black 100%),
      radial-gradient(#511c58 0%, #12061a 100%) !important;
    background-image: linear-gradient(transparent 60%, #3d4a9dbd),
      radial-gradient(transparent, black 100%), url(${gamingSeries}),
      radial-gradient(#4e1750 50%, #12061a) !important;
    background-position: center !important;
    background-size: auto 100% !important;
  }
  .linearRarity-lavaSeries {
    background: #eaac2e !important;
    border-color: #ecad2e !important;
  }
  .rarity-lavaSeries {
    background: linear-gradient(transparent 55%, #e38636 100%, #fbb43e),
      radial-gradient(#f49a30 0%, #570d39 100%) !important;
    background-image: linear-gradient(transparent 55%, #e38636 100%, #fbb43e),
      url(${lavaSeries}), radial-gradient(#4e0c33 0%, #4e0c33 100%) !important;
    background-position: center !important;
    background-size: auto 100% !important;
  }
  .linearRarity-dc {
    background: #04a5ff !important;
    border-color: #05beff !important;
  }
  .rarity-dc {
    background: radial-gradient(#3187ff, #133d88, black) !important;
    background-image: url(${dc}), radial-gradient(#3187ff, #133d88, black) !important;
    background-position: center !important;
    background-size: 100% 100% !important;
  }
  .linearRarity-frozenSeries {
    background: #7dcbfb !important;
    border-color: #90e9ff !important;
  }
  .rarity-frozenSeries {
    background: linear-gradient(#2e87ba 0%, #8db1d0 100%) !important;
    background-image: url(${frozenSeries}),
      linear-gradient(#2e87ba 0%, #8db1d0 100%) !important;
    background-position: center !important;
    background-size: 100% 100% !important;
  }
  .linearRarity-shadowSeries {
    background: #b4b3dc !important;
    border-color: #cfcefd !important;
  }
  .rarity-shadowSeries {
    background: radial-gradient(#5755ab, #232338) !important;
    background-image: url(${shadowSeries}), radial-gradient(#5755ab, #232338) !important;
    background-position: center !important;
    background-size: auto 100% !important;
  }
  .linearRarity-slurpSeries {
    background: #26c7f1 !important;
    border-color: #2ce4ff !important;
  }
  .rarity-slurpSeries {
    background: radial-gradient(transparent, #45cad3 100%),
      radial-gradient(#0c2f52 0%, #0c2f52 100%) !important;
    background-image: url(${slurpSeries}),
      radial-gradient(transparent, #45cad3 100%),
      radial-gradient(#0c2f52 0%, #0c2f52 100%) !important;
    background-position: center !important;
    background-size: auto 100% !important;
  }
  .linearRarity-iconSeries {
    background: #77dbeb !important;
    border-color: #89fcff !important;
  }
  .rarity-iconSeries {
    background: linear-gradient(#074753 0%, #45fcfe 100%) !important;
    background-image: url(${iconSeries}),
      linear-gradient(#074753 0%, #45fcfe 100%) !important;
    background-position: center !important;
    background-size: 100% 100% !important;
  }
  .linearRarity-marvelSeries {
    background: #e6101c !important;
    border-color: #ff1220 !important;
  }
  .rarity-marvelSeries {
    background: linear-gradient(#ff2024 0%, #520e0e 100%) !important;
    background-image: url(${marvel}), radial-gradient(#ff2024 0%, #520e0e 100%) !important;
    background-position: center !important;
    background-size: 100% 100% !important;
  }
  .linearRarity-darkSeries {
    background: #f046c0 !important;
    border-color: #ff50dd !important;
  }
  .rarity-darkSeries {
    background: radial-gradient(transparent, #38103b 100%),
      radial-gradient(#9c119b, #9c119b) !important;
    background-image: url(${darkSeries}), url(${darkSeries}),
      radial-gradient(#16042a, #16042a) !important;
    background-position: center !important;
    background-size: auto 100% !important;
  }
  .linearRarity-exotic {
    background: #90d7ff !important;
    border-color: #90d7ff !important;
  }
  .rarity-exotic {
    background: radial-gradient(#90d7ff 0%, #7f5399 100%) !important;
  }
  .linearRarity-unattainable {
    background: #f56773 !important;
    border-color: #f56773 !important;
  }
  .rarity-unattainable {
    background: linear-gradient(#e1505c 0%, #8d3039 100%) !important;
  }
  .linearRarity-mythic {
    background: #fce14c !important;
    border-color: #fce14c !important;
  }
  .rarity-mythic {
    background: linear-gradient(#fce14c, #d28f27) !important;
  }
  .linearRarity-legendary {
    background: #ffb967 !important;
    border-color: #ffd96d !important;
  }
  .rarity-legendary {
    background: linear-gradient(#ea8d23, #78371d) !important;
  }
  .linearRarity-epic {
    background: #df3ffb !important;
    border-color: #ff48ff !important;
  }
  .rarity-epic {
    background: linear-gradient(#c359ff, #4b2483) !important;
  }
  .linearRarity-rare {
    background: #02e7fc !important;
    border-color: #02ffff !important;
  }
  .rarity-rare {
    background: linear-gradient(#2cc1ff, #143977) !important;
  }
  .linearRarity-uncommon {
    background: #8ce90e !important;
    border-color: #a0ff10 !important;
  }
  .rarity-uncommon {
    background: linear-gradient(#69bb1e, #175117) !important;
  }
  .linearRarity-common {
    background: #ced0cf !important;
    border-color: #edefee !important;
  }
  .rarity-common {
    background: linear-gradient(#bebebe, #646464) !important;
  }
`

const GlobalStyles = () => (
  <>
    <Global styles={customStyles} />
    <BaseStyles />
  </>
)

export default GlobalStyles
