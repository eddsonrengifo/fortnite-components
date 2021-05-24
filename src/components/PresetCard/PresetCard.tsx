import React from 'react'
import tw from 'twin.macro'

import { PresetCardProps } from './types'
import preset from '../../assets/icons/preset.png'
import presetPlus from '../../assets/icons/presetPlus.png'
import outfitIcon from '../../assets/icons/T_Ui_Outfit_256.png'
import backpackIcon from '../../assets/icons/T_Ui_BackBling_256.png'
import pickaxeIcon from '../../assets/icons/T_Ui_HarvestingTool_256.png'
import gliderIcon from '../../assets/icons/T_Ui_Glider_256.png'
import wrapIcon from '../../assets/icons/T_Ui_Wrap_256.png'
import '../../styles/index.css'

const PresetCard: React.FC<PresetCardProps> = ({
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
    <div
      className='group'
      css={[tw`box-border border-0 border-solid border-white`, tw`w-full`]}
    >
      <span
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`flex justify-center p-1.5 pt-2 text-2xl font-burbankFont italic text-white tracking-wide`,
          add === true && tw`hidden`,
          none === true && tw`hidden`
        ]}
      >
        {name}
      </span>
      <div
        css={[
          tw`box-border border-0 border-solid border-white`,
          tw`w-full border[2px solid #0095ff] background[#0095ff] group-hover:border[4px solid yellow] group-hover:background[yellow]`
        ]}
      >
        {none === true ? (
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`flex w-full height[32rem] cursor-pointer border[4px solid #0095ff] background[radial-gradient(#007be2, #002b6b)] transform skew-y-1 group-hover:border[4px solid yellow]`
            ]}
            onClick={onClick}
          >
            <img
              css={[
                tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                tw`m-auto w-60`
              ]}
              src={preset}
              alt='preset icon'
            />
          </div>
        ) : add === true ? (
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`flex w-full height[32rem] cursor-pointer border[4px solid #0095ff] background[radial-gradient(#3ca6ff, #0041a2)] transform skew-y-1 group-hover:border[4px solid yellow]`
            ]}
            onClick={onClick}
          >
            <img
              css={[
                tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                tw`m-auto w-48`
              ]}
              src={presetPlus}
              alt='add icon'
            />
          </div>
        ) : (
          <div
            css={[
              tw`box-border border-0 border-solid border-white`,
              tw`w-full height[32rem] cursor-pointer transform skew-y-1`
            ]}
            onClick={onClick}
          >
            <div
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`w-full h-64 border[4px solid #0095ff] background[radial-gradient(#3ca6ff, #0041a2)] overflow-hidden group-hover:border-top-color[yellow] group-hover:border-left-color[yellow] group-hover:border-right-color[yellow]`
              ]}
            >
              <img
                css={[
                  tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                  tw`h-full transform transition-all ease-in-out duration-500 group-hover:scale-110`
                ]}
                src={
                  outfit === 'none'
                    ? outfitIcon
                    : outfit === 'random'
                    ? 'https://media.fortniteapi.io/images/152e76654c1692c459615bec5d257d5d/transparent.png'
                    : outfitImage
                }
                alt='outfit'
              />
            </div>
            <div
              css={[
                tw`box-border border-0 border-solid border-white`,
                tw`grid grid-template-columns[repeat(2,1fr)] w-full h-64`
              ]}
            >
              <img
                css={[
                  tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                  tw`w-32 h-32 border[3px solid #0095ff] background[radial-gradient(#3ca6ff, #0041a2)] group-hover:border-left-color[yellow]`
                ]}
                src={
                  backpack === 'none'
                    ? backpackIcon
                    : backpack === 'random'
                    ? 'https://media.fortniteapi.io/images/1e9e4228da5d341f4ce6b7d7cb0e49ca/transparent.png'
                    : backpackImage
                }
                alt='backpack'
              />
              <img
                css={[
                  tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                  tw`w-32 h-32 border[3px solid #0095ff] background[radial-gradient(#3ca6ff, #0041a2)] group-hover:border-right-color[yellow]`
                ]}
                src={
                  pickaxe === 'none'
                    ? pickaxeIcon
                    : pickaxe === 'random'
                    ? 'https://media.fortniteapi.io/images/8e6be9cac78727818c8007506b6f6e01/transparent.png'
                    : pickaxeImage
                }
                alt='pickaxe'
              />
              <img
                css={[
                  tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                  tw`w-32 h-32 border[3px solid #0095ff] background[radial-gradient(#3ca6ff, #0041a2)] group-hover:border-left-color[yellow] group-hover:border-bottom-color[yellow]`
                ]}
                src={
                  glider === 'none'
                    ? gliderIcon
                    : glider === 'random'
                    ? 'https://media.fortniteapi.io/images/bd0c3aa5268ea70f868cc23f772346f4/transparent.png'
                    : gliderImage
                }
                alt='glider'
              />
              <img
                css={[
                  tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                  tw`w-32 h-32 border[3px solid #0095ff] background[radial-gradient(#3ca6ff, #0041a2)] group-hover:border-right-color[yellow] group-hover:border-bottom-color[yellow]`
                ]}
                src={
                  wrap === 'none'
                    ? wrapIcon
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
