import React from 'react'
import tw from 'twin.macro'

import { LockerCardProps } from './types'
import outfit from '../../assets/icons/T_Ui_Outfit_256.png'
import backpack from '../../assets/icons/T_Ui_BackBling_256.png'
import pickaxe from '../../assets/icons/T_Ui_HarvestingTool_256.png'
import glider from '../../assets/icons/T_Ui_Glider_256.png'
import contrail from '../../assets/icons/T_Ui_Trail_256.png'
import emote from '../../assets/icons/T_Ui_Dance_256.png'
import wrap from '../../assets/icons/T_Ui_Wrap_256.png'
import music from '../../assets/icons/T_Ui_Music_256.png'
import bgLocker from '../../assets/backgrounds/bgLocker.png'
import loadingscreen from '../../assets/icons/T_Ui_LoadingScreen_256.png'
import favoriteIcon from '../../assets/icons/favorite.png'
import conflictIcon from '../../assets/icons/conflict.png'
import variants from '../../assets/icons/styles.png'
import darkSeriesSmoke from '../../assets/backgrounds/DarkSeriesSmoke.png'
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

const LockerCard: React.FC<LockerCardProps> = ({
  rarity = 'rare',
  favorite = false,
  random = false,
  none = false,
  type = 'outfit',
  image = 'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png',
  tag = false,
  items = 0,
  alert = false,
  conflict = false,
  animation = true,
  onClick
}) => {
  const NoneIcons =
    type === 'outfit'
      ? outfit
      : type === 'backpack'
      ? backpack
      : type === 'pickaxe'
      ? pickaxe
      : type === 'glider'
      ? glider
      : type === 'contrail'
      ? contrail
      : type === 'emote'
      ? emote
      : type === 'wrap'
      ? wrap
      : type === 'music'
      ? music
      : type === 'loadingscreen'
      ? loadingscreen
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
      : type === 'music'
      ? 'https://media.fortniteapi.io/images/f5b95465b739164c9176ecfce4f9c560/transparent.png'
      : type === 'loadingscreen'
      ? 'https://media.fortniteapi.io/images/82123cc3aec9317ea1f4bd9bb16ecfc6/transparent.png'
      : ''

  return (
    <div
      className='group'
      css={[
        tw`box-border border-0 border-solid border-white`,
        tw`relative w-full h-full cursor-pointer outline-width[0] outline-color[#fdea36] outline-style[solid] hover:outline-width[5px]`
      ]}
      onClick={onClick}
    >
      {alert === true && random !== true && none !== true && (
        <div
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`absolute px-2 pt-1.5 font-size[2rem] line-height[0.9] text-black font-burbankFont background[#fcff00] -top-1.5 right[7px] z-30 transform -skew-x-6 transition-all ease-in-out duration-100 group-hover:opacity-0`
          ]}
        >
          !
        </div>
      )}
      {none !== true && random !== true && alert === true
        ? []
        : typeof items === 'number' &&
          items > 0 && (
            <div
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`absolute pt-1.5 px-3.5 font-size[1.5rem] font-burbankFont text-black line-height[0.9] -top-1.5 right-0 background[#fcff00] transform[skewX(-19deg)] box-shadow[black 1px 2px] z-30 transition-all ease-in-out duration-100`
              ]}
            >
              {items > 99 ? '+99' : items}
            </div>
          )}
      {favorite === true &&
        alert !== true &&
        random !== true &&
        none !== true && (
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`absolute w-12 h-12 right-0 top[-0.28rem] z-10`
            ]}
            src={favoriteIcon}
            alt='favorite'
          />
        )}
      {tag === true && random !== true && none !== true && (
        <img
          css={[
            tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
            tw`absolute w-10 m-1.5 bottom-0 right-0 opacity-90 z-20 group-hover:margin-bottom[0.8rem] group-hover:opacity-100`
          ]}
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
              ? `url(${bgLocker}), radial-gradient(transparent, black 500%), radial-gradient(#31aaff, #006288)`
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
              ? `url(${darkSeriesSmoke}), url(${darkSeries}), radial-gradient(#16042a, #16042a)`
              : `url(${bgLocker}), radial-gradient(transparent, black 500%), radial-gradient(#31aaff, #006288)`
        }}
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`flex relative justify-center items-center h-full w-full m-auto bg-center background-size[auto 100%] shadow-lg overflow-hidden`,
          none === true && tw`background[radial-gradient(#00219a, #0d0079)]`
        ]}
      >
        {animation === true &&
          conflict === true &&
          none !== true &&
          random !== true && (
            <div
              className='animate-conflict'
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`absolute width[100px] height[100px] margin-bottom[25px] z-30`
              ]}
            >
              <div
                css={[
                  tw`box-border border-0 border-solid border-white`,
                  tw`inline-flex relative w-0 h-0 border-bottom[100px solid #f4e933] border-right[50px solid transparent] border-top[0 solid transparent] border-left[50px solid transparent] right-1 bottom[5px] transform -rotate-6 z-30`
                ]}
              />
              <div
                css={[
                  tw`box-border border-0 border-solid border-white`,
                  tw`inline-flex absolute w-0 h-0 border-bottom[90px solid black] border-right[45px solid transparent] border-top[0 solid transparent] border-left[45px solid transparent] right[9px] bottom-2 transform -rotate-6 z-30`
                ]}
              />
            </div>
          )}
        {conflict === true && none !== true && random !== true && (
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`absolute w-36 z-30`
            ]}
            src={conflictIcon}
            alt='Conflict'
          />
        )}
        {conflict === true && none !== true && random !== true && (
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`absolute w-full h-full bg-black opacity-50 z-20`
            ]}
          />
        )}
        {none === true ? (
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`h-2/3 max-w-none opacity-50`
            ]}
            src={NoneIcons}
            alt={`${type} none`}
          />
        ) : random === true ? (
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`h-3/4 max-w-none transform transition-all ease-in-out duration-500 group-hover:scale-110`
            ]}
            src={RandomIcons}
            alt={`${type} random`}
          />
        ) : (
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`h-full max-w-none transform transition-all ease-in-out duration-500 group-hover:scale-110`
            ]}
            src={image}
            alt={`${type} image`}
          />
        )}
        {random !== true && none !== true && (
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`absolute w-full h-full background[linear-gradient(transparent 75%, #024eff)] opacity-50`,
              rarity === 'starWars' &&
                tw`background[linear-gradient(transparent 75%, #3e76fb)]`,
              rarity === 'gamingSeries' &&
                tw`background[linear-gradient(transparent 75%, #7c70da)]`,
              rarity === 'lavaSeries' &&
                tw`background[linear-gradient(transparent 75%, #ecad2e)]`,
              rarity === 'dc' &&
                tw`background[linear-gradient(transparent 75%, #036dda)]`,
              rarity === 'frozenSeries' &&
                tw`background[linear-gradient(transparent 75%, #90e9ff)]`,
              rarity === 'shadowSeries' &&
                tw`background[linear-gradient(transparent 75%, #cfcefd)]`,
              rarity === 'slurpSeries' &&
                tw`background[linear-gradient(transparent 75%, #2ce4ff)]`,
              rarity === 'iconSeries' &&
                tw`background[linear-gradient(transparent 75%, #89fcff)]`,
              rarity === 'marvelSeries' &&
                tw`background[linear-gradient(transparent 75%, #e23b34)]`,
              rarity === 'darkSeries' &&
                tw`background[linear-gradient(transparent 75%, #ff50dd)]`
            ]}
          />
        )}
        {random !== true && none !== true && (
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`absolute width[103%] h-11 background[#02e7fcf2] border-t-8 border-color[#02ffff] -bottom-5 transform[rotate(-4deg)] scale-105 group-hover:-bottom-6`,
              rarity === 'starWars' &&
                tw`background[#3976fbf2] border-color[#3e76fb]`,
              rarity === 'gamingSeries' &&
                tw`background[#7b6fd9f2] border-color[#7c70da]`,
              rarity === 'lavaSeries' &&
                tw`background[#eaac2ef2] border-color[#ecad2e]`,
              rarity === 'dc' &&
                tw`background[#0992fbf2] border-color[#04a6fa]`,
              rarity === 'frozenSeries' &&
                tw`background[#7dcbfbf2] border-color[#90e9ff]`,
              rarity === 'shadowSeries' &&
                tw`background[#b4b3dcf2] border-color[#cfcefd]`,
              rarity === 'slurpSeries' &&
                tw`background[#26c7f1f2] border-color[#2ce4ff]`,
              rarity === 'iconSeries' &&
                tw`background[#6bd4ebf2] border-color[#78daea]`,
              rarity === 'marvelSeries' &&
                tw`background[#f9423af2] border-color[#e23b34]`,
              rarity === 'darkSeries' &&
                tw`background[#f046c0f2] border-color[#ff50dd]`,
              rarity === 'legendary' &&
                tw`background[#fc9c46f2] border-color[#f8b154]`,
              rarity === 'epic' &&
                tw`background[#eb82fdf2] border-color[#e381fd]`,
              rarity === 'rare' &&
                tw`background[#02e7fcf2] border-color[#02ffff]`,
              rarity === 'uncommon' &&
                tw`background[#84e40bf2] border-color[#88e41c]`,
              rarity === 'common' &&
                tw`background[#bebfc3f2] border-color[#C9CFDF]`
            ]}
          />
        )}
      </div>
    </div>
  )
}

export default LockerCard
