import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import {
    CharacterCard,
    StoreCard,
    FishCard,
    LockerCard,
    AchievementCard,
    BattlepassCard,
    PresetCard,
    EventCard
} from 'fortnite-components';
// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DefaultLayout from '@layouts/Default';
import { Link, Subheading, Subtitle, Text, Title } from '@utils/Texts';
import nextI18NextConfig from 'next-18next.config';

const InitialComponents: NextPage = () => {
    // const { t } = useTranslation('common');

    const tags = [
        {
            tag: '#components',
            name: 'Components'
        },
        {
            tag: '#character-card',
            name: 'Character Card',
            minor: true
        },
        {
            tag: '#fish-card',
            name: 'Fish Card',
            minor: true
        },
        {
            tag: '#preset-card',
            name: 'Preset Card',
            minor: true
        },
        {
            tag: '#event-card',
            name: 'Event Card',
            minor: true
        },
        {
            tag: '#locker-card',
            name: 'Locker Card',
            minor: true
        },
        {
            tag: '#achievement-card',
            name: 'Achievement Card',
            minor: true
        },
        {
            tag: '#battlepass-card',
            name: 'Battlepass Card',
            minor: true
        },
        {
            tag: '#store-card',
            name: 'Store Card',
            minor: true
        }
    ];

    return (
        <>
            <NextSeo title='Initial Components' />
            <DefaultLayout tags={tags}>
                <Title>Initial Components</Title>
                <Subtitle id='components'>Components</Subtitle>
                <Subheading id='character-card'>Character Card</Subheading>
                <Text>
                    A new component has been added to the library. And this time it is the card of
                    the characters that are inhabiting the map.
                </Text>
                <div tw='mt-4 flex flex-wrap gap-4'>
                    <div tw='w-full max-width[200px] height[250px]'>
                        <CharacterCard
                            alert
                            number={22}
                            featured
                            text='Complete!'
                            image='https://media.fortniteapi.io/images/a8cd0c7c732d92f61a2410c546935a74/transparent.png'
                        />
                    </div>
                    <div tw='w-full max-width[200px] height[250px]'>
                        <CharacterCard
                            number={10}
                            image='https://media.fortniteapi.io/images/41ba61fa6836f6272ac97055617aae5c/transparent.png'
                        />
                    </div>
                </div>
                <Text>
                    Look at and test the component{' '}
                    <Link href='https://fortnite-components-storybook.vercel.app/?path=/story/components-charactercard--simple'>
                        here.
                    </Link>
                </Text>
                <Subheading id='fish-card'>Fish Card</Subheading>
                <Text>
                    A new component has been added to the library. And this time it is the card of
                    the fish in the collection.
                </Text>
                <div tw='mt-4 flex flex-wrap gap-4'>
                    <div tw='w-full max-width[200px] height[250px]'>
                        <FishCard
                            size='medium'
                            stars={2}
                            number={18}
                            image='https://media.fortniteapi.io/images/s16_T_Ui_Fish_KevFish_Drift_L.png'
                        />
                    </div>
                    <div tw='w-full max-width[200px] height[250px]'>
                        <FishCard
                            stars={3}
                            number={6}
                            alert
                            featured
                            text='Complete!'
                            image='https://media.fortniteapi.io/images/s16_T_Ui_Fish_Flopper_Blue_L.png'
                        />
                    </div>
                </div>
                <Text>
                    Look at and test the component{' '}
                    <Link href='https://fortnite-components-storybook.vercel.app/?path=/story/components-fishcard--simple'>
                        here.
                    </Link>
                </Text>
                <Subheading id='preset-card'>Preset Card</Subheading>
                <Text>
                    A new component has been added to the library. And this time it's the preset
                    card in the locker.
                </Text>
                <div tw='mt-4 flex flex-wrap gap-4'>
                    <div tw='w-full max-width[256px]'>
                        <PresetCard />
                    </div>
                    <div tw='w-full max-width[256px]'>
                        <PresetCard
                            name='Siren'
                            outfitImage='https://media.fortniteapi.io/images/3f3824cdbbe5ff412907572724f8fd5a/transparent.png'
                            backpack='none'
                            pickaxeImage='https://media.fortniteapi.io/images/9157c23-456079b-432ab35-ab64fb4/transparent.png'
                            gliderImage='https://media.fortniteapi.io/images/713af1f7ace03a531b7e55bd544d7e0f/transparent.png'
                            wrapImage='https://media.fortniteapi.io/images/1873d1c76a0eeaea6f1cb4f9d9243dd6/transparent.png'
                        />
                    </div>
                </div>
                <Text>
                    Look at and test the component{' '}
                    <Link href='https://fortnite-components-storybook.vercel.app/?path=/story/components-presetcard--example'>
                        here.
                    </Link>
                </Text>
                <Subheading id='event-card'>Event Card</Subheading>
                <Text>
                    A new component has been added to the library. And this time it's the tournament
                    card.
                </Text>
                <div tw='mt-4 flex flex-wrap gap-4'>
                    <div tw='w-full max-width[312px]'>
                        <EventCard
                            line1='Fncs'
                            line2='Week 4'
                            schedule='April 10th - 12th'
                            posterFront='https://cdn2.unrealengine.com/Fortnite/fortnite-game/tournamentinformation/12BR_Competitive_In-Game_FNCS_Week4_Poster_Front-750x1080-c5ae877fbb33dfe3365ac45cf3d6837a25330689.jpg'
                            posterBack='https://cdn2.unrealengine.com/Fortnite/fortnite-game/tournamentinformation/12BR_Competitive_In-Game_FNCS_Poster_Back_ALL-750x1080-1ed3adf9261d51f716889ccbadd77463015dc009.jpg'
                            description='Compete in the Fortnite Champion Series: Chapter 2 - Season 2 for a share of the $5,000,000 total prize pool.'
                            format='Fncs'
                            datesColor='#B2A01A'
                        />
                    </div>
                    <div tw='w-full max-width[312px]'>
                        <EventCard
                            line1='Trios'
                            line2='Cash Cup'
                            schedule='Every Monday'
                            posterFront='https://cdn2.unrealengine.com/16br-comp-in-game-trioscashcup-poster-front-750x1080-46be00f23547.jpg'
                            posterBack='https://cdn2.unrealengine.com/15br-comp-in-game-contendercup-poster-back-750x1080-68e13f266f52.jpg'
                            description='Compete among the best in Fortnite for prizes!'
                            format='Trios Tournament'
                        />
                    </div>
                </div>
                <Text>
                    Look at and test the component{' '}
                    <Link href='https://fortnite-components-storybook.vercel.app/?path=/story/components-eventcard--fncs'>
                        here.
                    </Link>
                </Text>
                <Subheading id='locker-card'>Locker Card</Subheading>
                <Text>
                    A new component has been added to the library. And this time it's the locker
                    card.
                </Text>
                <div tw='mt-4 flex flex-wrap gap-4'>
                    <div tw='w-full max-width[200px] height[250px]'>
                        <LockerCard
                            rarity='marvelSeries'
                            image='https://media.fortniteapi.io/images/571c11d81bc81d2b6e706a1d3861b832/transparent.png'
                        />
                    </div>
                    <div tw='w-full max-width[200px] height[250px]'>
                        <LockerCard image='https://media.fortniteapi.io/images/3715149722b1aad7d1837ad3e4432a25/transparent.png' />
                    </div>
                </div>
                <Text>
                    Look at and test the component{' '}
                    <Link href='https://fortnite-components-storybook.vercel.app/?path=/story/components-lockercard--medium'>
                        here.
                    </Link>
                </Text>
                <Subheading id='achievement-card'>Achievement Card</Subheading>
                <Text>
                    A new component has been added to the library. And this time it's the
                    achievement card.
                </Text>
                <div tw='mt-4 flex flex-wrap gap-4'>
                    <div tw='w-full max-width[16rem]'>
                        <AchievementCard
                            name='Pocket change'
                            time='10:52 PM'
                            description='Collected all the coins from a Purple XP Coin during Season 6.'
                            image='https://media.fortniteapi.io/images/feats/s16_T_Ui_Explore_Comical.png'
                        />
                    </div>
                    <div tw='w-full max-width[16rem]'>
                        <AchievementCard
                            name='PRIMAL DISCOVERY'
                            time='12:24 PM'
                            description='Landed at the new map in Season 6.'
                            image='https://media.fortniteapi.io/images/feats/s15_T_Ui_Explore_Celebratory.png'
                            topColor='rgb(124 58 237)'
                            imageColor='rgb(124 58 237)'
                        />
                    </div>
                </div>
                <Text>
                    Look at and test the component{' '}
                    <Link href='https://fortnite-components-storybook.vercel.app/?path=/story/components-achievementcard--season-6'>
                        here.
                    </Link>
                </Text>
                <Subheading id='battlepass-card'>Battlepass Card</Subheading>
                <Text>
                    A new component has been added to the library. And this time it's the battle
                    pass card.
                </Text>
                <div tw='mt-4 flex flex-wrap gap-4'>
                    <div tw='w-full max-width[11rem] height[15rem]'>
                        <BattlepassCard
                            rarity='legendary'
                            number={93}
                            image='https://media.fortniteapi.io/images/d7711167bfd19b99320d0eb84e407946/transparent.png'
                        />
                    </div>
                    <div tw='w-full max-width[11rem] height[15rem]'>
                        <BattlepassCard
                            number={71}
                            owned
                            rarity='legendary'
                            image='https://media.fortniteapi.io/images/caf8ecac0931326fe550a6f67c8d1fdf/transparent.png'
                        />
                    </div>
                </div>
                <Text>
                    Look at and test the component{' '}
                    <Link href='https://fortnite-components-storybook.vercel.app/?path=/story/components-battlepasscard--medium'>
                        here.
                    </Link>
                </Text>
                <Subheading id='store-card'>Store Card</Subheading>
                <Text>
                    A new component has been added to the library. And this time it is the card that
                    is in the item store.
                </Text>
                <div tw='mt-4 flex flex-wrap gap-4'>
                    <div tw='w-full max-width[271px] height[470px]'>
                        <StoreCard
                            name='Safari'
                            type='Outfit'
                            banner='v1'
                            bannerText='New!'
                            positionImage='fill'
                            price='1,200'
                            images={[
                                'https://media.fortniteapi.io/images/displayAssets/v2/DAv2_CID_802_f_HeartBreaker/MI_CID_802_f_HeartBreaker.png'
                            ]}
                        />
                    </div>
                    <div tw='w-full max-width[250px] height[285px]'>
                        <StoreCard
                            name='Flail Bladesfari'
                            type='Flail Bladesfari'
                            priceType='battlepass'
                            passText='Chapter 1, Season 7'
                            passType='paid'
                            rarity='uncommon'
                            images={[
                                'https://media.fortniteapi.io/images/d910353f522b63a2c895ef3dfcab4477/transparent.png'
                            ]}
                        />
                    </div>
                </div>
                <Text>
                    Look at and test the component{' '}
                    <Link href='https://fortnite-components-storybook.vercel.app/?path=/story/components-storecard--medium'>
                        here.
                    </Link>
                </Text>
            </DefaultLayout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    try {
        return {
            props: {
                ...(await serverSideTranslations(locale as string, ['common'], nextI18NextConfig))
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};

export default InitialComponents;
