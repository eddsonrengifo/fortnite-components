import React from 'react'
import 'twin.macro'
import { EventCardProps } from './types'
import liveIcon from '../assets/icons/live.png'
import lockIcon from '../assets/icons/lock.png'

const EventCard: React.FC<EventCardProps> = ({
  live = false,
  lock = false,
  region = 'none',
  topText = 'Text',
  bottomText = 'Text 2',
  schedule = 'Schedule',
  posterFront = 'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-front-2-750x1080-319776257.jpg',
  posterBack = 'https://cdn2.unrealengine.com/13br-competitive-in-game-dreamhackopen-poster-back-750x1080-319770605.jpg',
  shortDescription = '',
  dates = [
    {
      start: '2021-03-11T01:30:00+00:00',
      end: '2021-03-11T04:30:00+00:00'
    },
    {
      start: '2021-03-18T00:30:00+00:00',
      end: '2021-03-18T03:30:00+00:00'
    },
    {
      start: '2021-03-25T00:30:00+00:00',
      end: '2021-03-25T03:30:00+00:00'
    },
    {
      start: '2021-04-01T00:30:00+00:00',
      end: '2021-04-01T03:30:00+00:00'
    },
    {
      start: '2021-04-15T00:30:00+00:00',
      end: '2021-04-15T03:30:00+00:00'
    }
  ],
  onClick
}) => {
  return (
    <div
      className='group'
      tw='cursor-pointer relative max-width[312px] height[450px]'
      onClick={onClick}
    >
      {live && (
        <img
          tw='absolute z-10 h-24 -right-6 -top-4 group-hover:opacity-0 transition ease-in-out duration-500'
          src={liveIcon}
          alt='live'
        />
      )}
      <div tw='overflow-hidden'>
        {lock && (
          <img
            tw='absolute w-36 m-auto top-0 left-0 bottom-0 right-0 z-20'
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
            {topText}
          </span>
          <span tw='block uppercase text-6xl font-burbank text-white text-center'>
            {bottomText}
          </span>
          <span tw='block uppercase font-burbank text-white text-2xl text-center'>
            {schedule}
          </span>
        </div>
        <img src={posterFront} alt={topText + ' ' + bottomText} />
      </div>
      <div
        style={{
          backgroundSize: 'contain',
          backgroundImage: `url(${posterBack})`
        }}
        tw='w-full overflow-hidden h-full transition ease-in-out duration-500 absolute bottom-0 bg-gradient-to-t from-blue-500 to-blue-400 z-20 opacity-0 group-hover:opacity-100'
      >
        <span tw='block uppercase text-2xl font-burbank text-white text-center mt-4'>
          {topText}
        </span>
        <span tw='block uppercase text-3xl font-burbank text-white text-center'>
          {bottomText}
        </span>
        <p tw='text-lg font-sans text-white mx-4 leading-5'>
          {shortDescription}
        </p>
        {dates && (
          <>
            <span tw='block uppercase text-xl font-burbank text-white text-center mt-3'>
              Event Dates
            </span>
            <div tw='text-center'>
              {dates.map((i: any) => {
                return (
                  <span
                    style={
                      new Date(i.end) < new Date()
                        ? {
                            color: 'black',
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
        <span tw='block uppercase font-burbank text-white text-2xl text-center'>
          {schedule}
        </span>
      </div>
    </div>
  )
}

export default EventCard
