import React from 'react';
import tw from 'twin.macro';

import { BattlepassCardProps } from './types';
import bgLocker from '@assets/images/bgLocker.png';
import unknownIcon from '@assets/icons/unknown.png';
import ownedIcon from '@assets/icons/owned.png';
import blockIcon from '@assets/icons/block.png';
import '@styles/index.css';

const BattlepassCard: React.FC<BattlepassCardProps> = ({
    rarity = 'rare',
    tier = true,
    number = 1,
    free = false,
    text = 'Free!',
    owned = false,
    block = false,
    unknown = false,
    image = 'https://media.fortniteapi.io/images/82805d371b0c5d8e61b410efc8c81bbd/transparent.png',
    onClick
}) => {
    return (
        <div
            className='group'
            css={[
                tw`box-border border-0 border-solid border-white`,
                tw`relative w-full h-full transform -skew-x-6`
            ]}
            onClick={onClick}
        >
            {free === true && typeof text === 'string' && text > '' && unknown !== true && (
                <div
                    css={[
                        tw`box-border border-0 border-solid border-white`,
                        tw`pt-1 text-2xl text-black text-center font-burbankFont uppercase italic cursor-pointer bg-white border-2 border-b-0 border-gray-200 overflow-hidden`
                    ]}
                >
                    {text}
                </div>
            )}
            <div
                css={[
                    tw`box-border border-0 border-solid border-white`,
                    tw`relative w-full h-3/4 cursor-pointer outline-style[solid] outline-width[0] outline-color[white] bg-transparent transition-all ease-in-out duration-200 group-hover:bg-white group-hover:outline-width[7px]`,
                    unknown === true && tw`h-full`
                ]}
            >
                {owned === true && unknown !== true && (
                    <img
                        css={[
                            tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                            tw`absolute w-10 z-10 -top-2.5 -right-2.5`
                        ]}
                        src={ownedIcon}
                        alt='owned icon'
                    />
                )}
                {((block === true && owned !== true && unknown !== true) || unknown === true) && (
                    <img
                        css={[
                            tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                            tw`absolute w-10 -top-2.5 -right-2.5 z-10 group-hover:filter[brightness(1.5)]`
                        ]}
                        src={blockIcon}
                        alt='block icon'
                    />
                )}
                <div
                    style={{
                        background: `url(${bgLocker}), radial-gradient(transparent, black 500%), radial-gradient(#31aaff, #006288)`
                    }}
                    css={[
                        tw`box-border border-0 border-solid border-white`,
                        tw`grid relative justify-center w-full h-full m-auto outline-width[0] outline-color[white] transform overflow-hidden transition-all ease-in-out duration-200 group-hover:outline-width[3px] group-hover:-skew-x-2`
                    ]}
                >
                    <img
                        css={[
                            tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                            tw`relative h-full min-h-full m-auto max-w-max transform skew-x-6 transition-all ease-in-out duration-200 group-hover:transform[skewX(8deg)]`
                        ]}
                        src={unknown === true ? unknownIcon : image}
                        alt={image}
                    />
                    <div
                        css={[
                            tw`box-border border-0 border-solid border-white`,
                            tw`absolute w-full h-full background[linear-gradient(transparent 75%, #024eff)] opacity-50`
                        ]}
                    />
                    <div
                        css={[
                            tw`box-border border-0 border-solid border-white`,
                            tw`absolute w-full h-11 border-top-width[6px] border-color[#27e4fa] background[#23e0fae6] -bottom-6 transform -rotate-3 scale-105 z-10 group-hover:-bottom-8`,
                            rarity === 'starWars' &&
                                tw`background[#3974fee6] border-color[#3974fe]`,
                            rarity === 'gamingSeries' &&
                                tw`background[#7175f5e6] border-color[#7170ea]`,
                            rarity === 'lavaSeries' &&
                                tw`background[#eaac2ee6] border-color[#ecad2e]`,
                            rarity === 'dc' && tw`background[#0062d1e6] border-color[#036dda]`,
                            rarity === 'frozenSeries' &&
                                tw`background[#7dcbfbe6] border-color[#90e9ff]`,
                            rarity === 'shadowSeries' &&
                                tw`background[#b4b3dce6] border-color[#cfcefd]`,
                            rarity === 'slurpSeries' &&
                                tw`background[#26c7f1e6] border-color[#2ce4ff]`,
                            rarity === 'iconSeries' &&
                                tw`background[#77dbebe6] border-color[#89fcff]`,
                            rarity === 'marvelSeries' &&
                                tw`background[#e6101ce6] border-color[#ff1220]`,
                            rarity === 'darkSeries' &&
                                tw`background[#f046c0e6] border-color[#ff50dd]`,
                            rarity === 'legendary' &&
                                tw`background[#ffaf64e6] border-color[#fbb858]`,
                            rarity === 'epic' && tw`background[#df81fde6] border-color[#e280fb]`,
                            rarity === 'rare' && tw`background[#23e0fae6] border-color[#27e4fa]`,
                            rarity === 'uncommon' &&
                                tw`background[#7de407e6] border-color[#8de40f]`,
                            rarity === 'common' && tw`background[#ced0cfe6] border-color[#edefee]`
                        ]}
                    />
                </div>
            </div>
            {tier === true && typeof number === 'number' && number >= 0 && unknown !== true && (
                <div
                    css={[
                        tw`box-border border-0 border-solid border-white`,
                        tw`mt-2 pt-1 text-2xl color[#10b6fa] text-center font-burbankFont italic cursor-pointer border-4 border-color[#1853b5] background[#10469b] overflow-hidden transition-all ease-in-out duration-200 group-hover:mt-4 group-hover:color[#13b2fa] group-hover:border-color[#1372f4] group-hover:background[#1857bd]`,
                        owned === true &&
                            tw`color[#1a5533] border-color[#53d977] background[#4dc969] group-hover:color[#1a5533] group-hover:border-color[#53d977] group-hover:background[#4dc969]`
                    ]}
                >
                    {number > 999999 ? '999999+' : number}
                </div>
            )}
        </div>
    );
};

export default BattlepassCard;
