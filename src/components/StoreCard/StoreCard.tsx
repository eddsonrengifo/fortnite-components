import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'

import { StoreCardProps } from './types'
import vBucks from '@assets/icons/vBucks.png'
import battlepassFree from '@assets/icons/battlepassFree.png'
import battlepassPaid from '@assets/icons/battlepassPaid.png'
import styles from '@assets/icons/styles.png'
import darkSeries from '@assets/images/CUBESeries.png'
import marvel from '@assets/images/MarvelSeries.png'
import iconSeries from '@assets/images/CreatorCollabSeries.png'
import slurpSeries from '@assets/images/SlurpSeries.png'
import shadowSeries from '@assets/images/shadowSeriesBackground.png'
import frozenSeries from '@assets/images/FrozenSeries.png'
import dc from '@assets/images/DCUSeries.png'
import lavaSeries from '@assets/images/LavaSeries.png'
import gamingSeries from '@assets/images/platformSeriesBackground.png'
import starwars from '@assets/images/starwarsBackground.png'
import '@styles/index.css'

const StoreCard: React.FC<StoreCardProps> = ({
  name,
  type,
  rarity = 'rare',
  images,
  priceType = 'vBucks',
  positionImage = 'centered',
  tag = false,
  tagText = 'Variants',
  banner = 'none',
  bannerText = 'New!',
  price = '0',
  fullPrice,
  passText = 'Chapter 1, Season 7',
  passType = 'paid',
  money = '00.00USD',
  moreText = 'More Info',
  owned = false,
  ownedText = 'Owned',
  customBackground,
  customSpotlight,
  onClick
}) => {
  const [changeVersion, setChangeVersion] = useState(0)
  const banners = () => {
    if (banner === 'v1' || banner === 'v2')
      return (
        <span
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`absolute -m-2 padding-top[4px] padding-left[7px] padding-right[12px] font-size[22px] line-height[1.6rem] font-medium font-burbankFont uppercase italic whitespace-nowrap tracking-wide top-0 left-0 transform-origin[50%] transform[perspective(245px) rotateX(-25deg)] z-10`,
            banner === 'v2'
              ? tw`text-white background[#d3016a] border[4px solid #ff2b74]`
              : tw`text-black background[#fcff00] border[4px solid #fff]`
          ]}
        >
          {bannerText}
        </span>
      )
    else return null
  }

  const iconTag = () => {
    if (tag === true)
      return (
        <div
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`flex justify-end justify-items-end overflow-hidden`
          ]}
        >
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`relative w-11 m-2 group-hover:hidden`
            ]}
            src={styles}
            alt={`icon ${tag}`}
          />
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`hidden items-center m-2 mr-2.5 pl-2 pr-3 pt-1 bg-black border-4 border-white transform -skew-x-12 -skew-y-2 group-hover:flex`
            ]}
          >
            <img
              css={[
                tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                tw`relative w-6 h-6 bottom-0.5 transform -skew-y-1 skew-x-12`
              ]}
              src={styles}
              alt={tagText}
            />
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`text-white truncate padding-right[3px] text-xl font-medium font-burbankFont italic uppercase transform skew-x-12`
              ]}
            >
              {tagText}
            </span>
          </div>
        </div>
      )
    else return null
  }

  const typePrice = () => {
    if (priceType === 'vBucks')
      return (
        <div
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`flex justify-end items-center h-6 bg-black overflow-hidden group-hover:background[#b9f8f6]`
          ]}
        >
          {fullPrice && (
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`relative padding-right[3px] ml-1 truncate text-lg text-white font-burbankFont italic line-through top-0.5 opacity-50 group-hover:color[#1d7d8b]`
              ]}
            >
              {fullPrice}
            </span>
          )}
          <span
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`relative padding-right[3px] mx-1 truncate text-white text-lg font-burbankFont italic top-0.5 opacity-70 group-hover:color[#1d7d8b]`,
              fullPrice && tw`ml-0`
            ]}
          >
            {price > '' ? price : '0'}
          </span>
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`w-7 h-7 transform rotate-12 opacity-60`
            ]}
            src={vBucks}
            alt='V-Bucks'
          />
        </div>
      )
    if (priceType === 'money')
      if (money)
        return (
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`flex justify-end items-center h-6 bg-black overflow-hidden group-hover:background[#cebb00]`
            ]}
          >
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`relative padding-right[3px] mx-1 truncate text-white text-lg font-burbankFont italic top-0.5 opacity-60 group-hover:color[#3d3000]`
              ]}
            >
              {money}
            </span>
          </div>
        )
    if (priceType === 'more')
      if (moreText)
        return (
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`flex justify-end items-center h-6 bg-black overflow-hidden`
            ]}
          >
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`relative padding-right[3px] mx-1 truncate text-white text-lg font-burbankFont italic top-0.5 opacity-60 `
              ]}
            >
              {moreText}
            </span>
          </div>
        )
    if (priceType === 'battlepass')
      return (
        <div
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`flex justify-end items-center h-6 bg-black overflow-hidden group-hover:background[#07392e]`
          ]}
        >
          <span
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`relative truncate padding-right[3px] mx-1 text-white text-lg font-burbankFont italic top-0.5 opacity-60`
            ]}
          >
            {passText}
          </span>
          {passType === 'free' ? (
            <img
              css={[
                tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                tw`h-7 transform rotate-12 opacity-60`
              ]}
              src={battlepassFree}
              alt='Battlepass Free'
            />
          ) : (
            <img
              css={[
                tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                tw`h-7 transform rotate-12 opacity-60`
              ]}
              src={battlepassPaid}
              alt='Battlepass Paid'
            />
          )}
        </div>
      )
    else return null
  }

  const ChangeImage = () => {
    let i = 1
    const allImages = images.length
    setInterval(() => {
      setChangeVersion(i)
      i = i === allImages - 1 ? 0 : i + 1
    }, 3000)
  }

  useEffect(() => {
    images !== undefined && images.length > 1 && ChangeImage()
  }, [])

  return (
    <div
      className='group'
      css={[
        tw`box-border border-0 border-solid border-white`,
        tw`relative w-full h-full m-0 cursor-pointer`
      ]}
      onClick={onClick}
    >
      {banners()}
      <div
        className={`backgroundSlider-${changeVersion}`}
        style={
          customBackground !== undefined
            ? customBackground[changeVersion]
            : {
                backgroundSize:
                  rarity === 'gamingSeries' ? 'auto 100%' : '100% 100%',
                backgroundImage:
                  rarity === 'starWars'
                    ? `url(${starwars}), radial-gradient(black, black 100%)`
                    : rarity === 'gamingSeries'
                    ? `linear-gradient(transparent 60%, #3d4a9dbd), radial-gradient(transparent, black 100%), url(${gamingSeries}), radial-gradient(#4e1750 50%, #12061a)`
                    : rarity === 'lavaSeries'
                    ? `url(${lavaSeries})`
                    : rarity === 'dc'
                    ? `url(${dc})`
                    : rarity === 'frozenSeries'
                    ? `url(${frozenSeries})`
                    : rarity === 'shadowSeries'
                    ? `url(${shadowSeries}), radial-gradient(#5755ab, #232338)`
                    : rarity === 'slurpSeries'
                    ? `url(${slurpSeries})`
                    : rarity === 'iconSeries'
                    ? `url(${iconSeries})`
                    : rarity === 'marvelSeries'
                    ? `url(${marvel})`
                    : rarity === 'darkSeries'
                    ? `url(${darkSeries})`
                    : rarity === 'exotic'
                    ? 'radial-gradient(#90d7ff 0%, #7f5399 100%)'
                    : rarity === 'unattainable'
                    ? 'linear-gradient(#e1505c 0%, #8d3039 100%)'
                    : rarity === 'mythic'
                    ? 'linear-gradient(#fce14c, #d28f27)'
                    : rarity === 'legendary'
                    ? 'linear-gradient(#ea8d23, #78371d)'
                    : rarity === 'epic'
                    ? 'linear-gradient(#c359ff, #4b2483)'
                    : rarity === 'rare'
                    ? 'linear-gradient(#2cc1ff, #143977)'
                    : rarity === 'uncommon'
                    ? 'linear-gradient(#69bb1e, #175117)'
                    : rarity === 'common'
                    ? 'linear-gradient(#bebebe, #646464)'
                    : ''
              }
        }
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`grid relative justify-center w-full h-full m-auto bg-center background[linear-gradient(#2cc1ff, #143977)] background-size[100% 100%] overflow-hidden`
        ]}
      >
        {customSpotlight && (
          <div
            style={customSpotlight[changeVersion]}
            tw='h-full w-full z-0 absolute'
          />
        )}
        <img
          className={`imageSlider-${changeVersion}`}
          css={[
            tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
            tw`h-full max-w-none min-h-full m-auto transform transition-all ease-in-out duration-500 group-hover:scale-110 group-hover:translate-y-2.5`,
            positionImage === 'centered' &&
              tw`min-height[0] height[calc(100% - 70px)] margin[0 auto] group-hover:translate-y-0`
          ]}
          src={images === undefined ? '' : images[changeVersion]}
          alt={name}
        />
      </div>
      <div
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`absolute w-full bottom-0`
        ]}
      >
        {iconTag()}
        <div
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`relative w-full h-2 top-0.5 background[#02e7fc] border-color[#02ffff]`,
            rarity === 'starWars' &&
              tw`background[#3974fe] border-color[#3974fe]`,
            rarity === 'gamingSeries' &&
              tw`background[#7b6fd9] border-color[#7c70da]`,
            rarity === 'lavaSeries' &&
              tw`background[#eaac2e] border-color[#ecad2e]`,
            rarity === 'dc' && tw`background[#04a5ff] border-color[#05beff]`,
            rarity === 'frozenSeries' &&
              tw`background[#7dcbfb] border-color[#90e9ff]`,
            rarity === 'shadowSeries' &&
              tw`background[#b4b3dc] border-color[#cfcefd]`,
            rarity === 'slurpSeries' &&
              tw`background[#26c7f1] border-color[#2ce4ff]`,
            rarity === 'iconSeries' &&
              tw`background[#77dbeb] border-color[#89fcff]`,
            rarity === 'marvelSeries' &&
              tw`background[#e6101c] border-color[#ff1220]`,
            rarity === 'darkSeries' &&
              tw`background[#f046c0] border-color[#ff50dd]`,
            rarity === 'exotic' &&
              tw`background[#90d7ff] border-color[#90d7ff]`,
            rarity === 'unattainable' &&
              tw`background[#f56773] border-color[#f56773]`,
            rarity === 'mythic' &&
              tw`background[#fce14c] border-color[#fce14c]`,
            rarity === 'legendary' &&
              tw`background[#ffd96d] border-color[#ffd96d]`,
            rarity === 'epic' && tw`background[#df3ffb] border-color[#ff48ff]`,
            rarity === 'rare' && tw`background[#02e7fc] border-color[#02ffff]`,
            rarity === 'uncommon' &&
              tw`background[#8ce90e] border-color[#a0ff10]`,
            rarity === 'common' && tw`background[#ced0cf] border-color[#edefee]`
          ]}
        />
        <div
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`background[#1c1b1a] overflow-hidden group-hover:bg-white`
          ]}
        >
          <h1
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`relative mx-auto mt-3.5 mb-1 px-3 font-size[1.5rem] text-white font-burbankFont italic line-height[1.6rem] uppercase text-center group-hover:mt-3 group-hover:mb-0 group-hover:bg-white group-hover:text-black group-hover:top-0.5`
            ]}
          >
            {name}
          </h1>
          <span
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`hidden mx-auto mt-0.5 mb-1.5 px-3 font-size[1.125rem] line-height[1.2rem] color[#a1a1a4] uppercase font-burbankFont text-center bg-white group-hover:block`
            ]}
          >
            {type}
          </span>
        </div>
        {owned === true ? (
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`flex justify-end items-center h-6 background[#126D45] overflow-hidden`
            ]}
          >
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`relative my-0 padding-right[3px] mx-1 text-white text-lg font-burbankFont italic uppercase top-0.5 opacity-60 truncate`
              ]}
            >
              {ownedText}
            </span>
          </div>
        ) : (
          typePrice()
        )}
      </div>
    </div>
  )
}

export default StoreCard
