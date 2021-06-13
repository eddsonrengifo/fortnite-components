import React from 'react'
import tw from 'twin.macro'

import { AchievementCardProps } from './types'
import '@styles/index.css'

const AchievementCard: React.FC<AchievementCardProps> = ({
  name = 'Achievement',
  image = 'https://media.fortniteapi.io/images/feats/s16_T_Ui_Explore_Comical.png',
  description = '',
  time = '',
  topColor = '#F6A300',
  bottomColor = '#4F8EFF',
  imageColor = '#F6A300',
  topBackground = '#326DD7',
  bottomBackground = '#3A39D0',
  onClick
}) => {
  return (
    <div
      className='group'
      style={{
        background: `linear-gradient(0, ${bottomBackground},  ${topBackground})`
      }}
      css={[
        tw`box-border border-0 border-solid border-white`,
        tw`flex relative flex-col w-full mb-5 cursor-pointer transition-all ease-in-out duration-300 hover:mt-6`
      ]}
      onClick={onClick}
    >
      <div
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`absolute w-full h-10 top-0 overflow-hidden transition-all ease-in-out duration-300`
        ]}
      >
        <div
          style={{ background: topColor }}
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`relative w-full h-6 bottom-2.5 transform -rotate-1 transition-all ease-in-out duration-300 group-hover:rotate-2 group-hover:bottom-3 group-hover:h-10`
          ]}
        />
      </div>
      <div
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`relative text-center my-14 bottom-6 transition-all ease-in-out duration-300 group-hover:bottom-20`
        ]}
      >
        <img
          style={{
            background: imageColor,
            border: `6px solid ${imageColor}`
          }}
          css={[
            tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
            tw`relative w-28 m-auto`
          ]}
          src={image}
          alt={name}
        />
        <h1
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`mx-2 mt-2 mb-0 text-2xl text-white font-burbankFont text-center font-bold italic uppercase`
          ]}
        >
          {name}
        </h1>
        <p
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`hidden mx-2.5 my-0 text-lg text-blue-300 font-sans text-center font-semibold leading-6 group-hover:block`
          ]}
        >
          {description}
        </p>
      </div>
      <span
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`absolute margin-bottom[3px] text-xl color[#3CD3FE] text-center bottom-0 left-0 right-0 font-burbankFont z-10 group-hover:text-white`
        ]}
      >
        {time}
      </span>
      <div
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`hidden absolute w-full h-12 bottom-0 overflow-hidden transition-all ease-in-out duration-300 group-hover:block`
        ]}
      >
        <div
          style={{ background: bottomColor }}
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`relative w-full h-12 transform transition-all ease-in-out duration-300 group-hover:top[11px] group-hover:-rotate-2`
          ]}
        />
      </div>
      <div
        style={{ background: bottomBackground }}
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`absolute w-10 h-10 m-auto -bottom-3 left-0 right-0 transform rotate-45 group-hover:hidden`
        ]}
      />
      <div
        style={{ background: bottomColor }}
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`hidden absolute w-10 h-10 m-auto -bottom-3 left-0 right-0 transform rotate-45 group-hover:block`
        ]}
      />
    </div>
  )
}

export default AchievementCard
