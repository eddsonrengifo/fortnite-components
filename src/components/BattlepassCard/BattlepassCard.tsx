import React from 'react'
import tw from 'twin.macro'

import { BattlepassProps } from './types'
import '../../styles/index.css'

const BattlepassCard: React.FC<BattlepassProps> = ({
  rarity = 'rare',
  tier = 12,
  free = false,
  freeText = 'Free!',
  image = 'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png',
  onClick
}) => {
  return (
    <div className='group' tw='transform -skew-x-6 w-32' onClick={onClick}>
      {free === true && (
        <span tw='uppercase block italic bg-white text-2xl text-black text-center pt-1 font-burbank border-2 border-b-0 border-gray-200 overflow-hidden'>
          {freeText}
        </span>
      )}
      <div tw='bg-gradient-to-t from-bgDefaultBottom to-bgDefaultTop grid relative cursor-pointer justify-center m-auto overflow-hidden w-32'>
        <img
          tw='transition ease-in-out duration-500 transform skew-x-6 h-40 max-w-max group-hover:scale-110'
          src={image}
          alt={image}
        />
        <div
          css={[
            tw`absolute h-11 w-full border-t-8 border-opacity-100 opacity-80 transform -rotate-6 scale-105 -bottom-5 z-10 background[#02e7fc] border-color[#02ffff]`,
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
      </div>
      <span tw='block italic mt-2 bg-blue-800 text-2xl text-blue-500 text-center pt-1 font-burbank border-4 border-blue-600 overflow-hidden'>
        {tier}
      </span>
    </div>
  )
}

export default BattlepassCard
