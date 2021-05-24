import React from 'react'
import tw from 'twin.macro'

import { CharacterCardProps } from './types'
import characterIcon from '../../assets/icons/character.png'
import starIcon from '../../assets/icons/star.png'
import '../../styles/index.css'

const CharacterCard: React.FC<CharacterCardProps> = ({
  number = 0,
  image = 'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png',
  star = true,
  alert = false,
  none = false,
  featured = false,
  text = 'Complete!',
  onClick
}) => {
  return (
    <div
      className='group'
      css={[
        tw`box-border border-0 border-solid border-white`,
        tw`relative w-full h-full shadow-2xl`
      ]}
      onClick={onClick}
    >
      {alert === true && none === false && (
        <div
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`absolute text-black pt-1.5 px-2 font-size[2rem] line-height[0.9] font-burbankFont -top-1.5 right[7px] transform -skew-x-6 background[#fcff00] z-20 transition-all ease-in-out duration-100 group-hover:opacity-0`
          ]}
        >
          !
        </div>
      )}
      <div
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`h-full max-w-full bg-white border-white overflow-hidden transition-all ease-in-out duration-100 group-hover:border-2`,
          none === true &&
            tw`border-transparent bg-transparent border-0 group-hover:border-0`
        ]}
      >
        <div
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`flex relative justify-center items-center h-full max-w-full background[radial-gradient(#00acff, #008abf)] border-white cursor-pointer overflow-hidden transition-all ease-in-out duration-100 group-hover:border-8 group-hover:transform[skewY(-1.5deg)]`,
            none === true && tw`background[rgba(0, 0, 0, 0.5)]`
          ]}
        >
          {none !== true && star === true && (
            <img
              css={[
                tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                tw`flex absolute w-9 my-1 left-0 top-0`
              ]}
              src={starIcon}
              alt='Star Icon Character'
            />
          )}
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`absolute color[#00b2d0] text-5xl font-burbankFont italic mt-1.5 mr-4 top-0 right-0 opacity-50 transition-all ease-in-out duration-200`,
              none === true && tw`color[#005cd0] opacity-30`
            ]}
          >
            {number > 99 ? '99' : number > 0 ? number : '0'}
          </div>
          {none !== true ? (
            <>
              <img
                css={[
                  tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                  tw`h-full max-w-none z-10 transition-all ease-in-out duration-100 group-hover:transform[scale(1.1)]`
                ]}
                src={image}
                alt='Character'
              />
              <div
                css={[
                  tw`box-border border-0 border-solid border-white`,
                  tw`absolute w-full h-full background[linear-gradient(transparent 75%, #024eff)] opacity-50 z-10`
                ]}
              />
            </>
          ) : (
            <img
              css={[
                tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                tw`h-3/5 max-w-max transform[scaleX(-1)] transition-all ease-in-out duration-100 group-hover:h-3/4`
              ]}
              src={characterIcon}
              alt='Unknown Character'
            />
          )}
          {featured === true && none !== true && text > '0' && (
            <div
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`flex absolute items-center justify-center w-full pt-1.5 pb-0.5 px-3 text-black font-size[1.5rem] text-center line-height[1.6rem] font-burbankFont uppercase italic -bottom-0.5 transform -skew-y-1 background[#fcff00] z-20 transition-all ease-in-out duration-100 group-hover:bg-white`
              ]}
            >
              {text}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
