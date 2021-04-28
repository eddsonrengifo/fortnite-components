import React from 'react'
import tw from 'twin.macro'

import { StoreProps } from './types'
import vBucks from '../../assets/icons/vBucks.png'
import battlepassFree from '../../assets/icons/battlepassFree.png'
import battlepassPaid from '../../assets/icons/battlepassPaid.png'
import styles from '../../assets/icons/styles.png'
import darkSeries from '../../assets/backgrounds/DarkSeriesBackground.png'
import marvel from '../../assets/backgrounds/marvelBackground.png'
import iconSeries from '../../assets/backgrounds/IconSeriesBackground.png'
import slurpSeries from '../../assets/backgrounds/slurpSeriesBackground.png'
import shadowSeries from '../../assets/backgrounds/shadowSeriesBackground.png'
import frozenSeries from '../../assets/backgrounds/frozenSeriesBackground.png'
import dc from '../../assets/backgrounds/dcSeriesBackground.png'
import lavaSeries from '../../assets/backgrounds/lavaSeriesBackground.png'
import gamingSeries from '../../assets/backgrounds/platformSeriesBackground.png'
import starwars from '../../assets/backgrounds/starwarsBackground.png'

const StoreCard: React.FC<StoreProps> = ({
  name = 'Name',
  type = 'Type',
  rarity = 'rare',
  size = 'medium',
  image = 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_802_f_HeartBreaker/MI_CID_802_f_HeartBreaker.png',
  shopVersion = false,
  priceType = 'vBucks',
  tag = 'none',
  banner = 'none',
  bannerText = 'New!',
  price = 0,
  fullPrice = 0,
  passText = 'Chapter 1, Season 7',
  passType = 'paid',
  money = '20.00',
  moreText = 'More Info',
  owned = false,
  ownedText = 'Owned',
  onClick
}) => {
  const banners = () => {
    if (banner === 'v1' || banner === 'v2')
      return (
        <span
          css={[
            tw`absolute z-10 -m-2 top-0 left-0 uppercase italic whitespace-nowrap tracking-wide font-medium font-burbank font-size[22px] line-height[1.6rem] padding-top[4px] padding-left[7px] padding-right[12px] transform-origin[50%] transform[perspective(245px) rotateX(-25deg)]`,
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
    if (
      tag === 'animated' ||
      tag === 'builtIn-emote' ||
      tag === 'reactive' ||
      tag === 'variants'
    )
      return (
        <div tw='grid justify-end'>
          <img
            tw='relative w-11 m-2 group-hover:hidden'
            src={styles}
            alt={`icon ${tag}`}
          />
          <div tw='hidden transform -skew-x-12 -skew-y-2 group-hover:flex bg-black border-4 border-white m-2 mr-2.5 items-center pl-2 pr-3 pt-1'>
            <img
              tw='relative transform -skew-y-1 skew-x-12 w-6 h-6 bottom-0.5'
              src={styles}
              alt={tag}
            />
            <span tw='transform skew-x-12 uppercase text-white italic text-xl font-medium font-burbank'>
              {tag}
            </span>
          </div>
        </div>
      )
    else return null
  }

  const typePrice = () => {
    if (priceType === 'vBucks')
      return (
        <div tw='flex bg-black overflow-hidden h-6 items-center justify-end group-hover:background[#b9f8f6]'>
          {fullPrice > price && typeof fullPrice === 'number' && (
            <span tw='relative line-through font-burbank italic text-lg opacity-50 top-0.5 text-white group-hover:color[#1d7d8b]'>
              {fullPrice.toLocaleString()}
            </span>
          )}
          {typeof price === 'number' ? (
            <span tw='relative font-burbank italic text-white text-lg opacity-70 mx-1 top-0.5 group-hover:color[#1d7d8b]'>
              {price.toLocaleString()}
            </span>
          ) : (
            <span tw='relative font-burbank italic text-white text-lg opacity-70 mx-1 top-0.5 group-hover:color[#1d7d8b]'>
              0
            </span>
          )}
          <img
            tw='w-7 h-7 opacity-60 transform rotate-12'
            src={vBucks}
            alt='vBucks'
          />
        </div>
      )
    if (priceType === 'money')
      return (
        <div tw='flex bg-black overflow-hidden h-6 items-center justify-end group-hover:background[#cebb00]'>
          <span tw='relative font-burbank italic text-white text-lg opacity-60 mx-2 top-0.5 group-hover:color[#3d3000]'>
            {money}USD
          </span>
        </div>
      )
    if (priceType === 'more')
      return (
        <div tw='flex bg-black overflow-hidden h-6 items-center justify-end'>
          <span tw='relative font-burbank italic text-white text-lg opacity-60 mx-2 top-0.5'>
            {typeof moreText === 'string' && moreText}
          </span>
        </div>
      )
    if (priceType === 'battlepass')
      return (
        <div tw='flex bg-black overflow-hidden h-6 items-center justify-end group-hover:background[#07392e]'>
          <span tw='relative font-burbank italic text-white text-lg opacity-60 mx-1.5 top-0.5'>
            {typeof passText === 'string' && passText}
          </span>
          {passType === 'free' ? (
            <img
              tw='h-7 opacity-60 transform rotate-12'
              src={battlepassFree}
              alt='Battlepass Free'
            />
          ) : (
            <img
              tw='h-7 opacity-60 transform rotate-12'
              src={battlepassPaid}
              alt='Battlepass Paid'
            />
          )}
        </div>
      )
    else return null
  }

  return (
    <div
      className='group'
      css={[
        tw`cursor-pointer relative m-0`,
        size === 'extraLarge' &&
          tw`width[850px] extra:width[562px] large:width[271px] medium:w-full`,
        size === 'large' && tw`width[562px] large:width[271px] medium:w-full`,
        size === 'medium' && tw`width[271px] medium:w-full`,
        size === 'small'
          ? shopVersion
            ? tw`width[271px] medium:w-full`
            : tw`width[250px] small:w-full`
          : []
      ]}
      onClick={onClick}
    >
      {banners()}
      <div
        style={{
          backgroundImage:
            rarity === 'starWars'
              ? `url(${starwars}), radial-gradient(black, black 100%)`
              : rarity === 'gamingSeries'
              ? `linear-gradient(transparent 60%, #3d4a9dbd), radial-gradient(transparent, black 100%), url(${gamingSeries}), radial-gradient(#4e1750 50%, #12061a)`
              : rarity === 'lavaSeries'
              ? `linear-gradient(transparent 55%, #e38636 100%, #fbb43e), url(${lavaSeries}), radial-gradient(#4e0c33 0%, #4e0c33 100%)`
              : rarity === 'dc'
              ? `url(${dc}), radial-gradient(#3187ff, #133d88, black)`
              : rarity === 'frozenSeries'
              ? `url(${frozenSeries}), linear-gradient(#2e87ba 0%, #8db1d0 100%)`
              : rarity === 'shadowSeries'
              ? `url(${shadowSeries}), radial-gradient(#5755ab, #232338)`
              : rarity === 'slurpSeries'
              ? `url(${slurpSeries}), radial-gradient(transparent, #45cad3 100%), radial-gradient(#0c2f52 0%, #0c2f52 100%)`
              : rarity === 'iconSeries'
              ? `url(${iconSeries}), linear-gradient(#074753 0%, #45fcfe 100%)`
              : rarity === 'marvelSeries'
              ? `url(${marvel}), radial-gradient(#ff2024 0%, #520e0e 100%)`
              : rarity === 'darkSeries'
              ? `url(${darkSeries}), url(${darkSeries}), radial-gradient(#16042a, #16042a)`
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
        }}
        css={[
          tw`bg-gradient-to-t from-bgDefaultBottom to-bgDefaultTop grid relative justify-center m-auto overflow-hidden bg-center background-size[auto 100%]`,
          size === 'extraLarge' &&
            tw`height[470px] width[850px] extra:width[562px] large:width[271px] medium:w-full`,
          size === 'large' &&
            tw`height[470px] width[562px] large:width[271px] medium:w-full`,
          size === 'medium' && tw`height[470px] width[271px] medium:w-full`,
          size === 'small'
            ? shopVersion
              ? tw`height[224px] width[271px] medium:w-full`
              : tw`height[285px] width[250px] small:w-full`
            : []
        ]}
      >
        <img
          css={[
            tw`transition[500ms all ease] max-w-none transform group-hover:scale-110`,
            size === 'extraLarge' && tw`height[470px]`,
            size === 'large' && tw`height[470px] group-hover:translate-y-5`,
            size === 'medium' && tw`height[470px] group-hover:translate-y-5`,
            size === 'small'
              ? shopVersion
                ? tw`height[175px]`
                : tw`height[250px]`
              : []
          ]}
          src={image}
          alt={name}
        />
      </div>
      <div tw='absolute w-full bottom-0'>
        {iconTag()}
        {shopVersion === true && size === 'extraLarge' ? (
          []
        ) : (
          <div
            css={[
              tw`relative h-2 w-full top-0.5 background[#02e7fc] border-color[#02ffff] transform`,
              size === 'extraLarge' &&
                tw`rotate[-0.3deg] extra:rotate[-0.4deg] large:rotate[-1deg]`,
              size === 'large' && tw`rotate[-0.4deg] large:rotate[-1deg]`,
              size === 'medium' && tw`rotate[-1deg]`,
              size === 'small' && shopVersion
                ? tw`rotate[-0.9deg]`
                : tw`rotate[-0.9deg]`,
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
              rarity === 'epic' &&
                tw`background[#df3ffb] border-color[#ff48ff]`,
              rarity === 'rare' &&
                tw`background[#02e7fc] border-color[#02ffff]`,
              rarity === 'uncommon' &&
                tw`background[#8ce90e] border-color[#a0ff10]`,
              rarity === 'common' &&
                tw`background[#ced0cf] border-color[#edefee]`
            ]}
          />
        )}
        <div tw='background[#1c1b1a] overflow-hidden group-hover:bg-white'>
          <h1 tw='relative text-white uppercase font-burbank italic px-3 text-center mx-auto mt-3.5 group-hover:mt-3 mb-1 font-size[1.6rem] group-hover:mb-0 group-hover:bg-white group-hover:text-black line-height[1.6rem] group-hover:top-0.5'>
            {name}
          </h1>
          <span tw='hidden bg-white color[#a1a1a4] uppercase font-burbank px-3 text-center mx-auto mt-0.5 mb-1.5 font-size[1.125rem] group-hover:block line-height[1.2rem]'>
            {type}
          </span>
        </div>
        {owned === true ? (
          <div tw='flex background[#126D45] overflow-hidden h-6 items-center justify-end'>
            <span tw='relative font-burbank italic text-white text-lg opacity-60 my-0 mx-2 top-0.5 uppercase'>
              {typeof ownedText === 'string' && ownedText}
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
