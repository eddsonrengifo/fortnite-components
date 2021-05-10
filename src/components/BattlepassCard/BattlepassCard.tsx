import React from 'react'
import tw from 'twin.macro'

import { BattlepassProps } from './types'
import unknownIcon from '../../assets/icons/unknown.png'
import ownedIcon from '../../assets/icons/owned.png'
import blockIcon from '../../assets/icons/block.png'
import '../../styles/index.css'

const BattlepassCard: React.FC<BattlepassProps> = ({
  rarity = 'rare',
  tier = true,
  number = 1,
  free = false,
  text = 'Free!',
  size = 'small',
  owned = false,
  block = false,
  unknown = false,
  image = 'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png',
  onClick
}) => {
  return (
    <div
      className='group'
      css={[
        tw`box-border border-0 border-solid border-white`,
        tw`relative w-32 transform -skew-x-6`,
        size === 'medium' && tw`w-44`
      ]}
      onClick={onClick}
    >
      {free === true &&
        typeof text === 'string' &&
        text > '' &&
        unknown !== true && (
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`cursor-pointer uppercase italic bg-white text-2xl text-black text-center pt-1 font-burbankFont border-2 border-b-0 border-gray-200 overflow-hidden`
            ]}
          >
            {text}
          </div>
        )}
      <div
        css={[
          tw`box-border border-0 border-solid transition ease-in-out duration-200 border-transparent group-hover:border-white`,
          tw`cursor-pointer relative w-full h-40 group-hover:height[10.5rem] group-hover:border-width[3px] bg-transparent group-hover:bg-white group-hover:width[150px] group-hover:left[-8px]`,
          size === 'medium' &&
            tw`group-hover:border-width[5px] h-48 group-hover:height[12.5rem] group-hover:width[190px] group-hover:left[-5px]`
        ]}
      >
        {owned === true && unknown !== true && (
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`absolute -top-2.5 -right-2.5 z-10 w-10`
            ]}
            src={ownedIcon}
            alt='owned icon'
          />
        )}
        {((block === true && owned !== true && unknown !== true) ||
          unknown === true) && (
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`absolute -top-2.5 -right-2.5 z-10 w-10 group-hover:filter[brightness(1.5)]`
            ]}
            src={blockIcon}
            alt='block icon'
          />
        )}
        <div
          css={[
            tw`box-border border-0 border-solid transition ease-in-out duration-200 border-transparent group-hover:border-white`,
            tw`background[radial-gradient(#1e9ffa, #206ac5)] grid relative justify-center m-auto overflow-hidden w-full h-full group-hover:border-width[3px] group-hover:transform group-hover:-skew-x-2`
          ]}
        >
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`transition ease-in-out duration-200 transform skew-x-6 h-40 group-hover:height[10.5rem] max-w-max group-hover:transform[skewX(8deg)]`,
              size === 'medium' && tw`h-48 group-hover:height[12.2rem]`
            ]}
            src={unknown === true ? unknownIcon : image}
            alt={image}
          />
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`absolute h-11 w-full border-top-width[5px] transform -rotate-3 scale-105 -bottom-7 group-hover:-bottom-9 z-10 background[#23e0fae6] border-color[#27e4fa]`,
              size === 'medium' &&
                tw`border-top-width[6px] -bottom-6 group-hover:-bottom-8`,
              rarity === 'starWars' &&
                tw`background[#3974fee6] border-color[#3974fe]`,
              rarity === 'gamingSeries' &&
                tw`background[#7175f5e6] border-color[#7170ea]`,
              rarity === 'lavaSeries' &&
                tw`background[#eaac2ee6] border-color[#ecad2e]`,
              rarity === 'dc' &&
                tw`background[#0062d1e6] border-color[#036dda]`,
              rarity === 'frozenSeries' &&
                tw`background[#7dcbfbe6] border-color[#90e9ff]`,
              rarity === 'shadowSeries' &&
                tw`background[#b4b3dce6] border-color[#cfcefd]`,
              rarity === 'slurpSeries' &&
                tw`background[#26c7f1e6] border-color[#2ce4ff]`,
              rarity === 'iconSeries' &&
                tw`background[#77dbebe6] border-color[#89fcff]`,
              rarity === 'marvelSeries' &&
                tw`background[#e6101ce6] border-color[#ff1220]`,
              rarity === 'darkSeries' &&
                tw`background[#f046c0e6] border-color[#ff50dd]`,
              rarity === 'legendary' &&
                tw`background[#ffaf64e6] border-color[#fbb858]`,
              rarity === 'epic' &&
                tw`background[#df81fde6] border-color[#e280fb]`,
              rarity === 'rare' &&
                tw`background[#23e0fae6] border-color[#27e4fa]`,
              rarity === 'uncommon' &&
                tw`background[#7de407e6] border-color[#8de40f]`,
              rarity === 'common' &&
                tw`background[#ced0cfe6] border-color[#edefee]`
            ]}
          />
        </div>
      </div>
      {tier === true &&
        typeof number === 'number' &&
        number >= 0 &&
        unknown !== true && (
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`cursor-pointer italic mt-2 background[#10469b] group-hover:background[#1857bd] text-2xl color[#10b6fa] group-hover:color[#13b2fa] text-center pt-1 font-burbankFont border-4 border-color[#1853b5] group-hover:border-color[#1372f4] overflow-hidden`,
              owned === true &&
                tw`background[#4dc969] group-hover:background[#4dc969] color[#1a5533] group-hover:color[#1a5533] border-color[#53d977] group-hover:border-color[#53d977]`
            ]}
          >
            {number > 999999 ? '999999+' : number}
          </div>
        )}
    </div>
  )
}

export default BattlepassCard
