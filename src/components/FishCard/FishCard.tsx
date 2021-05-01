import React from 'react'
import tw from 'twin.macro'

import { FishProps } from './types'
import fish from '../../assets/icons/fish.png'
import '../../styles/index.css'

const FishCard: React.FC<FishProps> = ({
  number = 0,
  stars = 1,
  image = 'https://media.fortniteapi.io/images/s16_T_Ui_Fish_Flopper_Orange_L.png',
  size = 'large',
  none = false,
  unknown = false,
  alert = false,
  featured = false,
  text = 'New Best!',
  onClick
}) => {
  return (
    <div
      className='group'
      tw='relative max-width[200px] height[250px] shadow-2xl'
      onClick={onClick}
    >
      {alert === true && none !== true && (
        <span tw='transition[100ms all ease] group-hover:opacity-0 top[-6px] right[7px] z-10 pt-1.5 font-burbankFont font-size[2rem] line-height[0.9] px-2 absolute transform -skew-x-6 background[#fcff00] text-black'>
          !
        </span>
      )}
      <div
        css={[
          tw`box-border border-0 border-solid overflow-hidden bg-white group-hover:border-2 border-white h-full max-w-full group-hover:max-width[204px] group-hover:height[254px] transition[100ms all ease]`,
          none === true &&
            tw`border-0 group-hover:border-0 border-transparent bg-transparent`
        ]}
      >
        <div
          css={[
            tw`box-border border-0 border-solid flex relative justify-center items-center h-full max-w-full background[linear-gradient(#005aa0, #005190 139px, #3ba7fc 83%)] cursor-pointer overflow-hidden group-hover:border-8 border-white transition[100ms all ease] group-hover:transform[skewY(-1.5deg)]`,
            unknown === true &&
              tw`background[linear-gradient(#000521, #00165f 181px, #001e86)]`,
            none === true && tw`background[rgba(0, 0, 0, 0.5)]`
          ]}
        >
          {none === true ? (
            <img
              tw='w-40 group-hover:w-48 transition[100ms all ease] opacity-50'
              src={fish}
              alt='Unknown Fish'
            />
          ) : (
            <img
              className='animate-fish'
              css={[
                tw`animate-fish w-40 group-hover:w-48 transition[100ms all ease] transform[scaleX(-1)]`,
                size === 'large' && tw`w-40 group-hover:w-48`,
                size === 'medium' && tw`w-32 group-hover:w-36`,
                size === 'small' && tw`w-20 group-hover:w-24`,
                unknown === true &&
                  tw`w-32 group-hover:w-36 filter[invert(50%) sepia(38%) saturate(3130%) hue-rotate(-159deg) brightness(19%) contrast(110%)]`
              ]}
              src={image}
              alt='Fish'
            />
          )}
          {unknown !== true && none !== true && (
            <div tw='flex absolute left-0 top-0 m-1'>
              <div
                css={[
                  tw`relative top-3 inline-block h-5 w-5 bg-white clip-path[polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)]`,
                  stars > 2 && tw`bg-yellow-200`
                ]}
              />
              <div
                css={[
                  tw`relative top-3 inline-block h-5 w-5 background[rgba(225, 225, 225, 0.1)] clip-path[polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)]`,
                  stars > 1 && tw`bg-white`,
                  stars > 2 && tw`bg-yellow-200`
                ]}
              />
              <div
                css={[
                  tw`relative right[1.8rem] inline-block h-5 w-5 background[rgba(225, 225, 225, 0.1)] clip-path[polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)]`,
                  stars > 2 && tw`bg-white`,
                  stars > 2 && tw`bg-yellow-200`
                ]}
              />
            </div>
          )}
          <span
            css={[
              tw`color[#0174e9] group-hover:color[#008af5] opacity-50 absolute top-0 right-0 mt-1.5 mr-4 text-5xl font-burbankFont italic transition[200ms all ease]`,
              none === true && tw`opacity-30`
            ]}
          >
            {number > 99 ? '99' : number > 0 ? number : '0'}
          </span>
          {featured === true && unknown !== true && none !== true && (
            <div tw='font-burbankFont italic transform -bottom-0.5 -skew-y-1 font-size[1.5rem] text-center line-height[1.6rem] flex items-center justify-center w-full pt-1.5 pb-0.5 px-3 uppercase absolute text-white background[#d3016a] group-hover:bg-white group-hover:text-black transition[100ms all ease]'>
              {typeof text === 'string' ? text : 'New Best!'}
            </div>
          )}
          {none !== true && (
            <>
              {unknown === true ? (
                <div tw='absolute bottom-0 width[85%] background[linear-gradient(to left, rgb(14 33 88) 16px, rgb(76 112 214), rgb(14 33 88) 158px)] h-3 transform[skew(-8deg, -1deg)] m-3 margin-bottom[9px] opacity-50' />
              ) : (
                featured !== true && (
                  <div
                    css={[
                      tw`absolute bottom-0 width[85%] background[linear-gradient(to left, rgb(30, 58, 138) 4px, rgb(76 106 191) 17px, rgb(76 106 191), rgb(30, 58, 138) 63px)] h-3 transform[skew(-8deg, -1deg)] m-3 margin-bottom[9px]`,
                      size === 'large' &&
                        tw`background[linear-gradient(to left, rgb(30, 58, 138) 4px, rgb(76 106 191) 17px, rgb(76 106 191), rgb(30, 58, 138) 63px)]`,
                      size === 'medium' &&
                        tw`background[linear-gradient(to left, rgb(30, 58, 138) 53px, rgb(76 106 191) 59px, rgb(76 106 191), rgb(30, 58, 138) 125px)]`,
                      size === 'small' &&
                        tw`background[linear-gradient(to left, rgb(30, 58, 138) 125px, rgb(76 106 191), rgb(76 106 191), rgb(30, 58, 138) 173px)]`
                    ]}
                  />
                )
              )}
              {unknown !== true && featured !== true && (
                <div
                  css={[
                    tw`flex justify-end absolute bottom[3px] width[85%] group-hover:bottom-0`,
                    size === 'large' && tw`justify-end`,
                    size === 'medium' && tw`justify-center`,
                    size === 'small' && tw`justify-start`
                  ]}
                >
                  <div tw='relative z-10 w-0 h-0 border-top[0px solid transparent] border-left[9px solid transparent] border-right[9px solid transparent] border-bottom[15px solid white]' />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default FishCard
