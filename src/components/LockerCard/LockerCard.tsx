import React from 'react'
import tw from 'twin.macro'

import { LockerProps } from './types'
import favoriteIcon from '../../assets/icons/favorite.png'
import variants from '../../assets/icons/styles.png'
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
import '../../styles/index.css'

const LockerCard: React.FC<LockerProps> = ({
  rarity = 'rare',
  size = 'medium',
  favorite = false,
  random = false,
  none = false,
  type = 'outfit',
  image = 'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png',
  tag = false,
  newItems = 0,
  alert = false,
  onClick
}) => {
  const NoneIcons =
    type === 'outfit'
      ? 'https://media.fortniteapi.io/images/152e76654c1692c459615bec5d257d5d/transparent.png'
      : type === 'backpack'
      ? 'https://media.fortniteapi.io/images/1e9e4228da5d341f4ce6b7d7cb0e49ca/transparent.png'
      : type === 'pickaxe'
      ? 'https://media.fortniteapi.io/images/8e6be9cac78727818c8007506b6f6e01/transparent.png'
      : type === 'glider'
      ? 'https://media.fortniteapi.io/images/bd0c3aa5268ea70f868cc23f772346f4/transparent.png'
      : type === 'contrail'
      ? 'https://media.fortniteapi.io/images/d114ffdd528988a5264be0928cc89144/transparent.png'
      : type === 'emote'
      ? 'https://media.fortniteapi.io/images/c4ce9db-b8a72a1-a3a8d78-ea263bb/transparent.png'
      : type === 'wrap'
      ? 'https://media.fortniteapi.io/images/44187a860182ed12604de0f1568a5106/transparent.png'
      : type === 'bannertoken'
      ? 'https://media.fortniteapi.io/images/1e9e4228da5d341f4ce6b7d7cb0e49ca/transparent.png'
      : type === 'music'
      ? 'https://media.fortniteapi.io/images/f5b95465b739164c9176ecfce4f9c560/transparent.png'
      : type === 'loadingscreen'
      ? 'https://media.fortniteapi.io/images/82123cc3aec9317ea1f4bd9bb16ecfc6/transparent.png'
      : ''

  const RandomIcons =
    type === 'outfit'
      ? 'https://media.fortniteapi.io/images/152e76654c1692c459615bec5d257d5d/transparent.png'
      : type === 'backpack'
      ? 'https://media.fortniteapi.io/images/1e9e4228da5d341f4ce6b7d7cb0e49ca/transparent.png'
      : type === 'pickaxe'
      ? 'https://media.fortniteapi.io/images/8e6be9cac78727818c8007506b6f6e01/transparent.png'
      : type === 'glider'
      ? 'https://media.fortniteapi.io/images/bd0c3aa5268ea70f868cc23f772346f4/transparent.png'
      : type === 'contrail'
      ? 'https://media.fortniteapi.io/images/d114ffdd528988a5264be0928cc89144/transparent.png'
      : type === 'emote'
      ? 'https://media.fortniteapi.io/images/c4ce9db-b8a72a1-a3a8d78-ea263bb/transparent.png'
      : type === 'wrap'
      ? 'https://media.fortniteapi.io/images/44187a860182ed12604de0f1568a5106/transparent.png'
      : type === 'bannertoken'
      ? 'https://media.fortniteapi.io/images/1e9e4228da5d341f4ce6b7d7cb0e49ca/transparent.png'
      : type === 'music'
      ? 'https://media.fortniteapi.io/images/f5b95465b739164c9176ecfce4f9c560/transparent.png'
      : type === 'loadingscreen'
      ? 'https://media.fortniteapi.io/images/82123cc3aec9317ea1f4bd9bb16ecfc6/transparent.png'
      : ''

  return (
    <div
      className='group'
      css={[
        tw`cursor-pointer relative box-border border-white hover:border[5px solid yellow] max-width[200px] height[250px] transition ease-in-out duration-500`,
        size === 'small' && tw`max-width[150px] height[200px]`
      ]}
      onClick={onClick}
    >
      {alert === true && random !== true && none !== true && (
        <span tw='transition[100ms all ease] group-hover:opacity-0 top[-6px] right[7px] z-10 pt-1.5 font-burbank font-size[2rem] line-height[0.9] px-2 absolute transform -skew-x-6 background[#fcff00] text-black'>
          !
        </span>
      )}
      {typeof newItems === 'number' && newItems > 0 && alert !== true && (
        <span tw='box-shadow[black 1px 2px] z-20 transition[100ms all ease] top[-6px] right-0 pt-1.5 font-burbank font-size[1.5rem] line-height[0.9] px-3.5 absolute transform[skewX(-19deg)] background[#fcff00] text-black'>
          {newItems > 99 ? '+99' : newItems}
        </span>
      )}
      {favorite === true &&
        alert !== true &&
        random !== true &&
        none !== true && (
          <img
            tw='absolute right-0 top[-0.28rem] h-12 w-12 z-10'
            src={favoriteIcon}
            alt='favorite'
          />
        )}
      {tag === true && random !== true && none !== true && (
        <img
          tw='absolute w-10 m-1.5 opacity-90 bottom-0 right-0 z-20 group-hover:margin-bottom[0.8rem] group-hover:opacity-100'
          src={variants}
          alt='tag'
        />
      )}
      <div
        style={{
          backgroundImage:
            none === true
              ? ''
              : random === true
              ? ''
              : rarity === 'starWars'
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
              : ''
        }}
        css={[
          tw`background[radial-gradient(#008acc, #006288)] h-full w-full flex relative justify-center items-center m-auto shadow-xl overflow-hidden bg-center background-size[auto 100%]`,
          none === true && tw`background[radial-gradient(#00219a, #0d0079)]`
        ]}
      >
        {none === true ? (
          <img
            css={[tw`h-52 opacity-80 max-w-none`, size === 'small' && tw`h-40`]}
            src={NoneIcons}
            alt={`${type} none`}
          />
        ) : random === true ? (
          <img
            css={[
              tw`h-52 max-w-none transform group-hover:scale-110 transition ease-in-out duration-500`,
              size === 'small' && tw`h-40`
            ]}
            src={RandomIcons}
            alt={`${type} random`}
          />
        ) : (
          <img
            tw='h-full max-w-none transform group-hover:scale-110 transition ease-in-out duration-500'
            src={
              typeof image === 'string'
                ? image
                : 'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png'
            }
            alt={`${type} image`}
          />
        )}
        {random !== true && none !== true && (
          <div
            css={[
              tw`absolute h-11 width[205px] border-t-8 border-opacity-100 opacity-90 transform[rotate(-5deg)] scale-105 -bottom-5 background[#02e7fc] border-color[#02ffff] group-hover:-bottom-6`,
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
                tw`background[#B9BBC1] border-color[#C9CFDF]`
            ]}
          />
        )}
      </div>
    </div>
  )
}

export default LockerCard
