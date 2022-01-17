import React from 'react'
import tw from 'twin.macro'

import liveIcon from '@assets/icons/live.png'
import lockIcon from '@assets/icons/lock.png'
import tournamentIcon from '@assets/icons/tournament.png'
import { EventCardProps } from './types'
import '@styles/index.css'

const EventCard: React.FC<EventCardProps> = ({
  details = false,
  live = false,
  lock = false,
  // region = 'none',
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
  const Front = () => {
    return (
      <div
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`cursor-pointer relative padding-right[8px] padding-bottom[8px] overflow-hidden transition-all ease-in-out duration-500 opacity-100 group-hover:opacity-0`
        ]}
        onClick={onClick}
      >
        {live && (
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`absolute width[150px] -top-8 -right-8`
            ]}
            src={liveIcon}
            alt='Live Event'
          />
        )}
        {lock && (
          <img
            css={[
              tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
              tw`absolute m-auto width[150px] height[150px] inset-0`
            ]}
            src={lockIcon}
            alt='lock'
          />
        )}
        <div
          css={[
            tw`box-border border-0 border-solid border-white`,
            tw`flex flex-col absolute bottom-0 text-center width[-webkit-fill-available] m-3 mb-10 overflow-hidden`
          ]}
        >
          <h1
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`text-shadow[0 0 3px black] relative top-1.5 whitespace-nowrap font-burbankFont text-white uppercase text-6xl`
            ]}
          >
            {line1}
          </h1>
          <h1
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`text-shadow[0 0 3px black] whitespace-nowrap font-burbankFont text-white uppercase text-6xl mb-2`
            ]}
          >
            {line2}
          </h1>
          <span
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`whitespace-nowrap font-burbankFont text-white uppercase text-2xl`
            ]}
          >
            {schedule}
          </span>
        </div>
        <img
          css={[
            tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
            tw`box-shadow[7px 7px 0px 1px #0000004d] w-full`
          ]}
          src={posterFront}
          alt={line1 + ' ' + line2}
        />
      </div>
    )
  }

  const Back = () => {
    return (
      <div
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`cursor-pointer absolute padding-right[8px] padding-bottom[8px] top-0 overflow-hidden transition-all ease-in-out duration-500 opacity-0 group-hover:opacity-100`
        ]}
      >
        <div tw='absolute w-full h-full'>
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`ml-16 mt-8 mb-4`
            ]}
          >
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`block text-2xl font-burbankFont text-white italic uppercase`
              ]}
            >
              {line1}
            </span>
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`block text-3xl font-burbankFont text-white italic uppercase`
              ]}
            >
              {line2}
            </span>
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`font-burbankFont text-white font-bold italic uppercase`
              ]}
            >
              {title}
            </span>
          </div>
          <p
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`mx-3.5 font-size[0.75rem] line-height[1rem] font-sans text-white`
            ]}
          >
            {description}
          </p>
          {dates && (
            <>
              <span
                css={[
                  tw`box-border border-0 border-solid border-white`,
                  tw`block mt-3 text-2xl font-burbankFont text-white text-center uppercase`
                ]}
              >
                Event Dates
              </span>
              <div
                css={[
                  tw`box-border border-0 border-solid border-white`,
                  tw`text-center`
                ]}
              >
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
                      css={[
                        tw`box-border border-0 border-solid border-white`,
                        tw`block text-2xl font-burbankFont text-white`
                      ]}
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
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`flex absolute flex-col m-2.5 gap[3px] bottom-0.5 left-0 right-0`
            ]}
          >
            <span
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`font-burbankFont text-white font-size[1.5rem] line-height[1] text-center uppercase`
              ]}
            >
              {format}
            </span>
            <div
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`flex justify-between m-0`
              ]}
            >
              <span
                css={[
                  tw`box-border border-0 border-solid border-white`,
                  tw`text-white`
                ]}
              >
                ------------
              </span>
              <span
                css={[
                  tw`box-border border-0 border-solid border-white`,
                  tw`font-size[1.5rem] font-burbankFont text-white line-height[1] text-center uppercase`
                ]}
              >
                {schedule}
              </span>
              <span
                css={[
                  tw`box-border border-0 border-solid border-white`,
                  tw`text-white`
                ]}
              >
                ------------
              </span>
            </div>
            <img
              css={[
                tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                tw`w-10 h-10 m-auto`
              ]}
              src={tournamentIcon}
              alt='tournamentIcon'
            />
          </div>
        </div>
        <img
          css={[
            tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
            tw`box-shadow[7px 7px 0px 1px #0000004d] w-full`
          ]}
          src={posterBack}
          alt={line1 + ' ' + line2}
        />
      </div>
    )
  }

  if (!details) return Front()

  return (
    <div
      className='group'
      css={[
        tw`box-border border-0 border-solid border-white`,
        tw`relative w-full cursor-pointer`
      ]}
    >
      {Front()}
      {Back()}
    </div>
  )
}

export default EventCard
