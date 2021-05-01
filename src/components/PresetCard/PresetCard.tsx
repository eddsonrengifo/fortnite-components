import React from 'react'
import tw from 'twin.macro'

import preset from '../../assets/icons/preset.png'
import presetPlus from '../../assets/icons/presetPlus.png'
import { PresetProps } from './types'
import '../../styles/index.css'

const PresetCard: React.FC<PresetProps> = ({
  name = 'Load Preset',
  outfit = 'active',
  outfitImage = 'https://media.fortniteapi.io/images/6af5fb0c4127ab98be084d6ec5ed499c/transparent.png',
  backpack = 'active',
  backpackImage = 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_BID_487_WinterHunterFemale/MI_BID_487_WinterHunterFemale.png',
  pickaxe = 'active',
  pickaxeImage = 'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Pickaxe_ID_367_WinterHunter/MI_Pickaxe_ID_367_WinterHunter.png',
  glider = 'active',
  gliderImage = 'https://media.fortniteapi.io/images/75010f50c172d14ed551a2c5ddc03c3d/transparent.png',
  wrap = 'active',
  wrapImage = 'https://media.fortniteapi.io/images/c255a91527ff4e6fc45ec88ca6d293a5/transparent.png',
  none = false,
  add = false,
  onClick
}) => {
  return (
    <div className='group' tw='w-64'>
      <span
        css={[
          tw`flex justify-center p-1.5 pt-2 font-burbank italic text-white text-2xl tracking-wide`,
          add === true && tw`opacity-0`,
          none === true && tw`opacity-0`
        ]}
      >
        {name}
      </span>
      <div tw='w-full border[2px solid #0095ff] background[#0095ff] group-hover:background[yellow] group-hover:border[4px solid yellow]'>
        {none === true ? (
          <div
            tw='box-border flex cursor-pointer w-full height[32rem] border[4px solid #0095ff] group-hover:border[4px solid yellow] background[radial-gradient(#007be2, #002b6b)] transform skew-y-1'
            onClick={onClick}
          >
            <img tw='m-auto w-60' src={preset} alt='preset icon' />
          </div>
        ) : add === true ? (
          <div
            tw='box-border flex cursor-pointer w-full height[32rem] border[4px solid #0095ff] group-hover:border[4px solid yellow] background[radial-gradient(#3ca6ff, #0041a2)] transform skew-y-1'
            onClick={onClick}
          >
            <img tw='m-auto w-48' src={presetPlus} alt='add icon' />
          </div>
        ) : (
          <div
            tw='cursor-pointer w-full height[32rem] transform skew-y-1'
            onClick={onClick}
          >
            <div tw='box-border group-hover:border-top-color[yellow] group-hover:border-left-color[yellow] group-hover:border-right-color[yellow] border[4px solid #0095ff] h-64 w-full background[radial-gradient(#3ca6ff, #0041a2)] overflow-hidden'>
              <img
                tw='h-full transform group-hover:scale-110 transition ease-in-out duration-500'
                src={
                  outfit === 'none'
                    ? 'https://media.fortniteapi.io/images/152e76654c1692c459615bec5d257d5d/transparent.png'
                    : outfit === 'random'
                    ? 'https://media.fortniteapi.io/images/152e76654c1692c459615bec5d257d5d/transparent.png'
                    : outfitImage
                }
                alt='outfit'
              />
            </div>
            <div tw='h-64 w-full grid grid-template-columns[repeat(2,1fr)]'>
              <img
                tw='box-border group-hover:border-left-color[yellow] border[3px solid #0095ff] h-32 w-32 background[radial-gradient(#3ca6ff, #0041a2)]'
                src={
                  backpack === 'none'
                    ? 'https://media.fortniteapi.io/images/1e9e4228da5d341f4ce6b7d7cb0e49ca/transparent.png'
                    : backpack === 'random'
                    ? 'https://media.fortniteapi.io/images/1e9e4228da5d341f4ce6b7d7cb0e49ca/transparent.png'
                    : backpackImage
                }
                alt='backpack'
              />
              <img
                tw='box-border group-hover:border-right-color[yellow] border[3px solid #0095ff] h-32 w-32 background[radial-gradient(#3ca6ff, #0041a2)]'
                src={
                  pickaxe === 'none'
                    ? 'https://media.fortniteapi.io/images/8e6be9cac78727818c8007506b6f6e01/transparent.png'
                    : pickaxe === 'random'
                    ? 'https://media.fortniteapi.io/images/8e6be9cac78727818c8007506b6f6e01/transparent.png'
                    : pickaxeImage
                }
                alt='pickaxe'
              />
              <img
                tw='box-border group-hover:border-left-color[yellow] group-hover:border-bottom-color[yellow] border[3px solid #0095ff] h-32 w-32 background[radial-gradient(#3ca6ff, #0041a2)]'
                src={
                  glider === 'none'
                    ? 'https://media.fortniteapi.io/images/bd0c3aa5268ea70f868cc23f772346f4/transparent.png'
                    : glider === 'random'
                    ? 'https://media.fortniteapi.io/images/bd0c3aa5268ea70f868cc23f772346f4/transparent.png'
                    : gliderImage
                }
                alt='glider'
              />
              <img
                tw='box-border group-hover:border-right-color[yellow] group-hover:border-bottom-color[yellow] border[3px solid #0095ff] h-32 w-32 background[radial-gradient(#3ca6ff, #0041a2)]'
                src={
                  wrap === 'none'
                    ? 'https://media.fortniteapi.io/images/44187a860182ed12604de0f1568a5106/transparent.png'
                    : wrap === 'random'
                    ? 'https://media.fortniteapi.io/images/44187a860182ed12604de0f1568a5106/transparent.png'
                    : wrapImage
                }
                alt='wrap'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PresetCard
