import React from 'react'
import 'twin.macro'
import { AchievementCardProps } from './types'

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
      tw='relative flex flex-col max-width[16rem] cursor-pointer hover:mt-6 transition[300ms all ease] mb-5'
      onClick={onClick}
    >
      <div tw='absolute top-0 w-full h-10 overflow-hidden transition[300ms all ease]'>
        <div
          style={{ background: topColor }}
          tw='relative transform -rotate-1 bottom-2.5 w-80 h-6 group-hover:rotate-2 group-hover:bottom-3 group-hover:h-10 transition[300ms all ease]'
        />
      </div>
      <div tw='relative text-center my-14 bottom-6 group-hover:bottom-20 transition[300ms all ease]'>
        <img
          style={{
            background: imageColor,
            border: `6px solid ${imageColor}`
          }}
          tw='relative m-auto w-28'
          src={image}
          alt={name}
        />
        <h1 tw='italic uppercase font-burbank text-white text-center font-bold text-2xl mx-2 mt-2'>
          {name}
        </h1>
        <p tw='hidden text-center text-blue-300 group-hover:block text-lg font-semibold mx-2.5 leading-6'>
          {description}
        </p>
      </div>
      <span tw='absolute text-xl color[#3CD3FE] group-hover:text-white text-center z-10 bottom-0 left-0 right-0 font-burbank margin-bottom[3px]'>
        {time}
      </span>
      <div tw='hidden absolute bottom-0 w-full h-12 overflow-hidden group-hover:block transition[300ms all ease]'>
        <div
          style={{ background: bottomColor }}
          tw='relative transform w-64 h-12 group-hover:top[11px] group-hover:-rotate-2 transition[300ms all ease]'
        />
      </div>
      <div
        style={{ background: bottomBackground }}
        tw='absolute transform rotate-45 -bottom-3 left-0 right-0 m-auto h-10 w-10 group-hover:hidden'
      />
      <div
        style={{ background: bottomColor }}
        tw='hidden absolute transform rotate-45 -bottom-3 left-0 right-0 m-auto h-10 w-10 group-hover:block'
      />
    </div>
  )
}

export default AchievementCard
