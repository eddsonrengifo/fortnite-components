import React from 'react';
import tw from 'twin.macro';

import { FishCardProps } from './types';
import fish from '@assets/icons/fish.png';
import '@styles/index.css';

const FishCard: React.FC<FishCardProps> = ({
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
            css={[
                tw`box-border border-0 border-solid border-white`,
                tw`relative w-full h-full shadow-2xl`
            ]}
            onClick={onClick}
        >
            {alert === true && none !== true && (
                <span
                    css={[
                        tw`box-border border-0 border-solid border-white`,
                        tw`absolute text-black px-2 pt-1.5 font-burbankFont font-size[2rem] line-height[0.9] background[#fcff00] -top-1.5 right[7px] transform -skew-x-6 transition-all ease-in-out duration-100 z-10 group-hover:opacity-0`
                    ]}
                >
                    !
                </span>
            )}
            <div
                css={[
                    tw`box-border border-0 border-solid border-white`,
                    tw`h-full max-w-full bg-white border-white overflow-hidden transition-all ease-in-out duration-100 group-hover:border-2`,
                    none === true &&
                        tw`bg-transparent border-transparent border-0 group-hover:border-0`
                ]}
            >
                <div
                    css={[
                        tw`box-border border-0 border-solid border-white`,
                        tw`flex relative justify-center items-center h-full max-w-full background[linear-gradient(#005aa0, #005190 139px, #3ba7fc 83%)] border-white cursor-pointer overflow-hidden transition-all ease-in-out duration-100 group-hover:border-8 group-hover:transform[skewY(-1.5deg)]`,
                        unknown === true &&
                            tw`background[linear-gradient(#000521, #00165f 181px, #001e86)]`,
                        none === true && tw`background[rgba(0, 0, 0, 0.5)]`
                    ]}
                >
                    {none === true ? (
                        <img
                            css={[
                                tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                                tw`height[70%] max-w-max opacity-50 transition-all ease-in-out duration-100 group-hover:h-4/5`
                            ]}
                            src={fish}
                            alt='No Fish'
                        />
                    ) : (
                        <img
                            className='animate-fish'
                            css={[
                                tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                                tw`animate-fish h-2/3 max-w-max transform[scaleX(-1)] transition-all ease-in-out duration-100 group-hover:h-3/4`,
                                size === 'medium' && tw`height[55%] group-hover:h-2/3`,
                                size === 'small' && tw`height[45%] group-hover:height[55%]`,
                                unknown === true &&
                                    tw`h-2/3 filter[invert(50%) sepia(38%) saturate(3130%) hue-rotate(-159deg) brightness(19%) contrast(110%)] group-hover:h-3/4`
                            ]}
                            src={image}
                            alt={unknown !== true ? 'Fish' : 'Unknown Fish'}
                        />
                    )}
                    {unknown !== true && none !== true && (
                        <div
                            css={[
                                tw`box-border border-0 border-solid border-white`,
                                tw`flex absolute m-1 left-0 top-0`
                            ]}
                        >
                            <div
                                css={[
                                    tw`box-border border-0 border-solid border-white`,
                                    tw`relative inline-block h-5 w-5 top-3 bg-white clip-path[polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)]`,
                                    stars > 2 && tw`bg-yellow-200`
                                ]}
                            />
                            <div
                                css={[
                                    tw`box-border border-0 border-solid border-white`,
                                    tw`relative inline-block h-5 w-5 top-3 background[rgba(225, 225, 225, 0.1)] clip-path[polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)]`,
                                    stars > 1 && tw`bg-white`,
                                    stars > 2 && tw`bg-yellow-200`
                                ]}
                            />
                            <div
                                css={[
                                    tw`box-border border-0 border-solid border-white`,
                                    tw`relative inline-block h-5 w-5 right[1.8rem] background[rgba(225, 225, 225, 0.1)] clip-path[polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)]`,
                                    stars > 2 && tw`bg-white`,
                                    stars > 2 && tw`bg-yellow-200`
                                ]}
                            />
                        </div>
                    )}
                    <div
                        css={[
                            tw`box-border border-0 border-solid border-white`,
                            tw`absolute mt-1.5 mr-4 color[#0174e9] text-5xl font-burbankFont italic top-0 right-0 opacity-50 transition-all ease-in-out duration-200 group-hover:color[#008af5]`,
                            none === true && tw`opacity-30`
                        ]}
                    >
                        {number > 99 ? '99' : number > 0 ? number : '0'}
                    </div>
                    {featured === true &&
                        unknown !== true &&
                        none !== true &&
                        typeof text === 'string' &&
                        text > '0' && (
                            <div
                                css={[
                                    tw`box-border border-0 border-solid border-white`,
                                    tw`flex absolute justify-center items-center w-full pt-1.5 pb-0.5 px-3 font-size[1.5rem] text-center line-height[1.6rem] text-white font-burbankFont italic uppercase background[#d3016a] -bottom-0.5 transform -skew-y-1 transition-all ease-in-out duration-100 group-hover:bg-white group-hover:text-black`
                                ]}
                            >
                                {text}
                            </div>
                        )}
                    {none !== true && (
                        <>
                            {unknown === true ? (
                                <div
                                    css={[
                                        tw`box-border border-0 border-solid border-white`,
                                        tw`absolute width[85%] h-3 m-3 margin-bottom[9px] background[linear-gradient(to left, rgb(14 33 88) 16px, rgb(76 112 214), rgb(14 33 88) 158px)] bottom-0 opacity-50 transform[skew(-8deg, -1deg)]`
                                    ]}
                                />
                            ) : (
                                featured !== true && (
                                    <div
                                        css={[
                                            tw`box-border border-0 border-solid border-white`,
                                            tw`absolute width[85%] h-3 m-3 margin-bottom[9px] background[linear-gradient(to left, rgb(30, 58, 138) 4px, rgb(76 106 191) 17px, rgb(76 106 191), rgb(30, 58, 138) 63px)] bottom-0 transform[skew(-8deg, -1deg)]`,
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
                                        tw`box-border border-0 border-solid border-white`,
                                        tw`flex absolute justify-end width[85%] bottom[3px] group-hover:bottom-0`,
                                        size === 'large' && tw`justify-end`,
                                        size === 'medium' && tw`justify-center`,
                                        size === 'small' && tw`justify-start`
                                    ]}
                                >
                                    <div
                                        css={[
                                            tw`box-border border-0 border-solid border-white`,
                                            tw`relative w-0 h-0 border-top[0px solid transparent] border-left[9px solid transparent] border-right[9px solid transparent] border-bottom[15px solid white] z-10`
                                        ]}
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FishCard;
