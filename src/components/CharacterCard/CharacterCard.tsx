import React from 'react'
import tw from 'twin.macro'
import { CharacterProps } from './types'
import character from '../../assets/icons/character.png'
import star from '../../assets/icons/star.png'

const CharacterCard: React.FC<CharacterProps> = ({
  number = 0,
  image = 'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png',
  alert = false,
  none = false,
  featured = false,
  text = 'Complete!',
  onClick
}) => {
  return (
    <div
      className='group'
      tw='relative max-width[200px] height[250px] shadow-2xl'
      onClick={onClick}
    >
      {alert === true && none === false && (
        <span tw='z-20 transition[100ms all ease] group-hover:opacity-0 top[-6px] right[7px] pt-1.5 font-burbank font-size[2rem] line-height[0.9] px-2 absolute transform -skew-x-6 background[#fcff00] text-black'>
          !
        </span>
      )}
      <div
        css={[
          tw`overflow-hidden bg-white group-hover:border-2 border-white h-full max-w-full group-hover:max-width[204px] group-hover:height[254px] transition[100ms all ease]`,
          none === true &&
            tw`border-0 group-hover:border-0 border-transparent bg-transparent`
        ]}
      >
        <div
          css={[
            tw`flex relative justify-center items-center h-full max-w-full background[radial-gradient(#00acff, #008abf)] cursor-pointer overflow-hidden group-hover:border-8 border-white transition[100ms all ease] group-hover:transform[skewY(-1.5deg)]`,
            none === true && tw`background[rgba(0, 0, 0, 0.5)]`
          ]}
        >
          {none !== true ? (
            <img
              tw='h-full max-w-max transition[100ms all ease] group-hover:transform[scale(1.1)] z-10'
              src={image}
              alt='Character'
            />
          ) : (
            <img
              tw='w-36 group-hover:w-40 transition[100ms all ease] transform[scaleX(-1)]'
              src={character}
              alt='Character'
            />
          )}
          {none !== true && (
            <img
              tw='flex absolute left-0 top-0 w-9 my-1'
              src={star}
              alt='star'
            />
          )}
          <span
            css={[
              tw`color[#00b2d0] opacity-50 absolute top-0 right-0 mt-1.5 mr-4 text-5xl font-burbank italic transition[200ms all ease]`,
              none === true && tw`color[#005cd0] opacity-30`
            ]}
          >
            {number > 99 ? '99' : number > 0 ? number : '0'}
          </span>
          {featured === true && none !== true && (
            <div tw='z-20 font-burbank italic transform -bottom-0.5 -skew-y-1 font-size[1.5rem] text-center line-height[1.6rem] flex items-center justify-center w-full pt-1.5 pb-0.5 px-3 uppercase absolute background[#fcff00] text-black group-hover:bg-white transition[100ms all ease]'>
              {text}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
