import React from 'react'
import 'twin.macro'
import { BattlepassProps } from './types'

const BattlepassCard: React.FC<BattlepassProps> = ({
  rarity = 'rare',
  tier = 12,
  free = false,
  freeText = 'Free!',
  image = 'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png',
  onClick,
}) => {
  return (
    <div className="group" tw="transform -skew-x-6 w-32" onClick={onClick}>
      {free && (
        <span tw="uppercase block italic bg-white text-2xl text-black text-center pt-1 font-burbank border-2 border-b-0 border-gray-200 overflow-hidden">
          {freeText}
        </span>
      )}
      <div
        className={`rarity-${rarity}`}
        tw="bg-gradient-to-t from-bgDefaultBottom to-bgDefaultTop grid relative cursor-pointer justify-center m-auto overflow-hidden w-32"
      >
        <img
          tw="transition ease-in-out duration-500 transform skew-x-6 h-40 max-w-max group-hover:scale-110"
          src={image}
          alt={image}
        />
        <div
          className={`linearRarity-${rarity}`}
          tw="absolute h-11 w-full border-t-8 border-opacity-100 opacity-80 transform -rotate-6 scale-105 -bottom-5 z-10 background[#02e7fc] border-color[#02ffff]"
        />
      </div>
      <span tw="block italic mt-2 bg-blue-800 text-2xl text-blue-500 text-center pt-1 font-burbank border-4 border-blue-600 overflow-hidden">
        {tier}
      </span>
    </div>
  )
}

export default BattlepassCard
