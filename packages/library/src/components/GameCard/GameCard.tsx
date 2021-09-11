import React, { FC } from 'react';
import tw from 'twin.macro';

import { GameCardProps } from './types';

const GameCard: FC<GameCardProps> = ({
    title,
    teams = 'solo',
    epic,
    image = 'https://fortnite-api.com/images/playlists/playlist_defaultsolo/showcase.png',
    onClick
}) => {
    return (
        <div
            className='group'
            css={[
                tw`box-border border-0 border-solid border-white`,
                tw`cursor-pointer transition-all duration-200 ease-in-out border-4 border-color[#1ac7ea] background[#1ac7ea] grid relative justify-center m-auto width[inherit] height[inherit] overflow-hidden hover:(bg-white border-white border-bottom-color[yellow] border-b-8)`
            ]}
            onClick={onClick}
        >
            <img
                css={[
                    tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                    tw`transition-all duration-200 ease-in-out group-hover:(filter brightness-150) height[inherit] width[inherit] max-w-max`
                ]}
                src={image}
                alt={title}
            />
            {epic && (
                <div
                    css={[
                        tw`box-border border-0 border-solid border-white`,
                        tw`transition-all duration-200 ease-in-out group-hover:(text-black bg-white) font-size[0.6rem] leading-none font-bold text-center pb-1 absolute w-full background[#1ac7ea] text-white tracking-widest uppercase italic`
                    ]}
                >
                    By epic
                </div>
            )}
            <div
                css={[
                    tw`box-border border-0 border-solid border-white`,
                    tw`transition-all duration-200 ease-in-out group-hover:(opacity-0) absolute w-full h-full background[linear-gradient(transparent 45%, black)]`
                ]}
            />
            <div
                css={[
                    tw`box-border border-0 border-solid border-white`,
                    tw`group-hover:(bg-white pt-1) flex items-center justify-between w-full absolute bottom-0`
                ]}
            >
                <div
                    css={[
                        tw`box-border border-0 border-solid border-white`,
                        tw`group-hover:text-black mx-2 text-white font-bold uppercase font-burbankFont`
                    ]}
                >
                    {title}
                </div>
                <div
                    css={[
                        tw`box-border border-0 border-solid border-white`,
                        tw`flex items-center group-hover:text-black mx-2 color[#85cdfb] font-bold uppercase font-burbankFont`
                    ]}
                >
                    <img
                        css={[
                            tw`block max-w-full h-auto align-middle box-border border-0 border-solid border-white`,
                            tw`w-4 h-4 mb-1 group-hover:(filter brightness-0)`
                        ]}
                        src='https://media.fortniteapi.io/images/icons/T_Icon_Matchmaking_Solo_64.png'
                        alt={title}
                    />
                    {teams}
                </div>
            </div>
        </div>
    );
};

export default GameCard;
