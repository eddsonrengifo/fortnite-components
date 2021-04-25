import React from 'react'
import tw from 'twin.macro'
import { StoreProps } from './types'
import vBucks from '../../assets/icons/vBucks.png'
import battlepassFree from '../../assets/icons/battlepassFree.png'
import battlepassPaid from '../../assets/icons/battlepassPaid.png'
import styles from '../../assets/icons/styles.png'

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
  price = 1200,
  fullPrice = 1200,
  passText = 'Chapter 1, Season 7',
  passType = 'paid',
  money = '20.00',
  moreText = 'More Info',
  onClick
}) => {
  const banners = () => {
    if (banner !== 'none')
      return (
        <span
          tw='text-black background-color[#fcff00] absolute z-10 -m-2 top-0 left-0 uppercase italic whitespace-nowrap tracking-wide font-medium border[4px solid white] font-burbank font-size[22px] line-height[1.6rem] padding-top[4px] padding-left[7px] padding-right[12px] transform-origin[50%] transform[perspective(245px) rotateX(-25deg)]'
          className={`banner banner-${banner}`}
        >
          {bannerText}
        </span>
      )
    else return null
  }

  const iconTag = () => {
    if (tag !== 'none')
      return (
        <div tw='grid justify-end'>
          <img
            tw='relative w-11 m-2 group-hover:hidden'
            src={styles}
            alt='icon'
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
      if (price > 0)
        return (
          <div tw='flex bg-black overflow-hidden h-6 items-center justify-end group-hover:background[#b9f8f6]'>
            {price >= fullPrice ? (
              <span tw='relative line-through font-burbank italic text-lg opacity-50 top-0.5 text-white group-hover:color[#1d7d8b]' />
            ) : (
              <span tw='relative line-through font-burbank italic text-lg opacity-50 top-0.5 text-white group-hover:color[#1d7d8b]'>
                {fullPrice.toLocaleString()}
              </span>
            )}
            <span tw='relative font-burbank italic text-white text-lg opacity-70 mx-1 top-0.5 group-hover:color[#1d7d8b]'>
              {price.toLocaleString()}
            </span>
            <img
              tw='w-7 h-7 opacity-60 transform rotate-12'
              src={vBucks}
              alt='vBucks'
            />
          </div>
        )
    if (priceType === 'money')
      return (
        <div tw='flex bg-black overflow-hidden h-7 items-center justify-end group-hover:background[#cebb00]'>
          <span tw='relative font-burbank italic text-white text-lg opacity-60 mx-2 top-0.5 group-hover:color[#3d3000]'>
            {money}USD
          </span>
        </div>
      )
    if (priceType === 'more')
      return (
        <div tw='flex bg-black overflow-hidden h-7 justify-end'>
          <span tw='relative font-burbank italic text-white text-lg opacity-60 my-0 mx-2 top-0.5'>
            {moreText}
          </span>
        </div>
      )
    if (priceType === 'battlepass')
      return (
        <div tw='flex bg-black overflow-hidden h-6 items-center justify-end group-hover:background[#07392e]'>
          <span tw='relative font-burbank italic text-white text-lg opacity-60 mx-1.5 top-0.5'>
            {passText}
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
        className={`rarity-${rarity}`}
        css={[
          tw`bg-gradient-to-t from-bgDefaultBottom to-bgDefaultTop grid relative justify-center m-auto overflow-hidden`,
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
        {shopVersion && size === 'extraLarge' ? (
          []
        ) : (
          <div
            className={`linearRarity-${rarity}`}
            css={[
              tw`relative h-2 w-full top-0.5 background[#02e7fc] border-color[#02ffff] transform`,
              size === 'extraLarge' &&
                tw`rotate[-0.3deg] extra:rotate[-0.4deg] large:rotate[-1deg]`,
              size === 'large' && tw`rotate[-0.4deg] large:rotate[-1deg]`,
              size === 'medium' && tw`rotate[-1deg]`,
              size === 'small' && shopVersion
                ? tw`rotate[-0.9deg]`
                : tw`rotate[-0.9deg]`
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
        {priceType !== 'none' && typePrice()}
      </div>
    </div>
  )
}

export default StoreCard
