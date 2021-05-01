import React from 'react'
import 'twin.macro'

import { EventCardProps } from './types'
import liveIcon from '../../assets/icons/live.png'
import lockIcon from '../../assets/icons/lock.png'
import '../../styles/index.css'

const EventCard: React.FC<EventCardProps> = ({
  live = false,
  lock = false,
  region = 'none',
  title = 'Title',
  line1 = 'Text',
  line2 = 'Text 2',
  schedule = '',
  posterFront = 'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-front-2-750x1080-319776257.jpg',
  posterBack = 'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-back-750x1080-319770605.jpg',
  description = '',
  dates = [
    {
      start: '2021-03-11T01:30:00+00:00',
      end: '2021-03-11T04:30:00+00:00'
    },
    {
      start: '2021-03-18T00:30:00+00:00',
      end: '2021-03-18T03:30:00+00:00'
    }
  ],
  format = 'Tournament',
  datesColor = '#000',
  onClick
}) => {
  return (
    <div
      className='group'
      tw='cursor-pointer relative max-width[312px]'
      onClick={onClick}
    >
      {live && (
        <img
          tw='absolute z-10 h-24 -right-6 -top-4 group-hover:opacity-0 transition ease-in-out duration-500'
          src={liveIcon}
          alt='live'
        />
      )}
      <div tw='transition ease-in-out duration-500 overflow-hidden opacity-100 group-hover:opacity-0'>
        {lock && (
          <img
            tw='absolute w-36 m-auto top-0 left-0 bottom-0 right-0 z-10'
            src={lockIcon}
            alt='lock'
          />
        )}
        {region !== 'none' && (
          <span tw='absolute bottom-0 left-0 font-burbank text-white text-3xl mx-2.5'>
            {region}
          </span>
        )}
        <div tw='absolute bottom-10 left-0 right-0 w-10/12 m-auto'>
          <span tw='block uppercase text-5xl font-burbank text-white text-center mt-4'>
            {line1}
          </span>
          <span tw='block uppercase text-6xl font-burbank text-white text-center'>
            {line2}
          </span>
          <span tw='block uppercase font-burbank text-white text-2xl text-center'>
            {schedule}
          </span>
        </div>
        <img tw='w-full' src={posterFront} alt={line1 + ' ' + line2} />
      </div>
      <div
        style={{
          backgroundSize: 'contain',
          backgroundImage: `url(${posterBack})`
        }}
        tw='w-full overflow-hidden h-full transition ease-in-out duration-500 absolute bottom-0 bg-gradient-to-t from-blue-500 to-blue-400 z-10 opacity-0 group-hover:opacity-100'
      >
        <div tw='ml-16 mt-8 mb-4'>
          <span tw='block uppercase text-2xl font-burbank text-white italic'>
            {line1}
          </span>
          <span tw='block uppercase text-3xl font-burbank text-white italic'>
            {line2}
          </span>
          <span tw='font-bold uppercase text-white font-burbank italic'>
            {title}
          </span>
        </div>
        <p tw='font-size[0.75rem] line-height[1rem] font-sans text-white mx-3.5'>
          {description}
        </p>
        {dates && (
          <>
            <span tw='block uppercase text-2xl font-burbank text-white text-center mt-3'>
              Event Dates
            </span>
            <div tw='text-center'>
              {dates.map((i: any) => {
                return (
                  <span
                    style={
                      new Date(i.end) < new Date()
                        ? {
                            color: datesColor,
                            textDecoration: 'line-through #fff'
                          }
                        : {}
                    }
                    tw='block font-burbank text-white text-2xl'
                  >
                    {new Date(i.start).toLocaleDateString()}{' '}
                    {new Date(i.start)
                      .toLocaleTimeString([], {
                        hour12: true
                      })
                      .replace(/:\d{2}\s/, ' ')}{' '}
                    -{' '}
                    {new Date(i.end)
                      .toLocaleTimeString([], {
                        hour12: true
                      })
                      .replace(/:\d{2}\s/, ' ')}
                  </span>
                )
              })}
            </div>
          </>
        )}
        <div tw='flex flex-col absolute m-2.5 bottom[2px] left-0 right-0 gap[3px]'>
          <span tw='line-height[1] uppercase font-burbank text-white font-size[1.5rem] text-center'>
            {format}
          </span>
          <div tw='flex justify-between m-0'>
            <span tw='text-white'>------------</span>
            <span tw='line-height[1] uppercase font-burbank text-white font-size[1.5rem] text-center'>
              {schedule}
            </span>
            <span tw='text-white'>------------</span>
          </div>
          <img tw='m-auto w-10 h-10' src={lockIcon} alt='iconPICKAXE' />
        </div>
      </div>
    </div>
  )
}

export default EventCard
