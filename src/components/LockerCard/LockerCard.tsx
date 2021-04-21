import React from 'react'
import tw, { styled } from 'twin.macro'
import { LockerProps } from './types'
import variants from '../assets/icons/styles.png'
import reactive from '../assets/icons/reactive.png'
import traversal from '../assets/icons/traversal.png'
import animated from '../assets/icons/animated.png'
import synced from '../assets/icons/synced.png'

const LockerCard: React.FC<LockerProps> = ({
  rarity = 'rare',
  size = 'small',
  image = 'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png',
  tag = 'none',
  banner = 'none',
  bannerText = 'New!',
  onClick,
}) => {
  const banners = () => {
    if (banner !== 'none')
      return (
        <span
          tw="text-black background-color[#fcff00] absolute z-10 -m-2 top-0 left-0 uppercase italic whitespace-nowrap tracking-wide font-medium border-4 border-white font-burbank font-size[22px] line-height[1.6rem] padding-top[4px] padding-left[7px] padding-right[12px] transform-origin[50%] transform[perspective(245px) rotateX(-25deg)]"
          className={`banner-${banner}`}
        >
          {bannerText}
        </span>
      )
    else return null
  }

  const Icon = styled.img(tw`absolute w-10 m-1.5 bottom-0 right-0 z-20`)

  const icon = () => {
    if (tag === 'variants') return <Icon src={variants} alt="Variants" />
    else if (tag === 'reactive') return <Icon src={reactive} alt="Reactive" />
    else if (tag === 'traversal')
      return <Icon src={traversal} alt="Traversal" />
    else if (tag === 'animated') return <Icon src={animated} alt="Animated" />
    else if (tag === 'synced') return <Icon src={synced} alt="Synced" />
    else return null
  }
  return (
    <div
      className="group"
      css={[
        tw`cursor-pointer relative`,
        size === 'medium' && tw`width[271px] height[470px]`,
        size === 'small' && tw`width[200px] height[250px]`,
      ]}
      onClick={onClick}
    >
      {icon()}
      {banners()}
      <div
        className={`rarity-${rarity}`}
        tw="bg-gradient-to-t from-bgDefaultBottom to-bgDefaultTop h-full w-full flex relative justify-center m-auto shadow-xl overflow-hidden"
      >
        <img
          css={[
            tw`h-full max-w-none transform group-hover:scale-110 transition ease-in-out duration-500`,
            size === 'medium' && tw`group-hover:translate-y-6 `,
          ]}
          src={image}
          alt={image}
        />
        <div
          className={`linearRarity-${rarity}`}
          tw="absolute h-11 w-full border-t-8 border-opacity-100 opacity-80 transform -rotate-6 scale-105 -bottom-5 background[#02e7fc] border-color[#02ffff]"
        />
      </div>
    </div>
  )
}

export default LockerCard
