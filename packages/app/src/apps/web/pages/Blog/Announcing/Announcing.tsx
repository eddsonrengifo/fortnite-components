import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { GameCard } from 'fortnite-components';
// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DefaultLayout from '@layouts/Default';
import { Link, Subheading, Subtitle, Text, Title } from '@utils/Texts';
import nextI18NextConfig from 'next-18next.config';

const Announcing: NextPage = () => {
    // const { t } = useTranslation('common');

    const tags = [
        {
            tag: '#whats-new',
            name: 'What’s New'
        },
        {
            tag: '#game-card',
            name: 'Game Card',
            minor: true
        }
    ];

    return (
        <>
            <NextSeo title='Announcing' />
            <DefaultLayout tags={tags}>
                <Title>Announcing</Title>
                <Subtitle id='whats-new'>What’s New</Subtitle>
                <Subheading id='game-card'>Game Card</Subheading>
                <Text>
                    A new component has been added to the library. And this time it is the card that
                    is in the game when you look for game modes
                </Text>
                <div tw='mt-4 flex flex-wrap gap-4'>
                    <div tw='max-width[270px] height[150px] 320:contents'>
                        <GameCard
                            epic
                            title='Battle Royale'
                            teams='solo'
                            image='https://cdn2.unrealengine.com/Fortnite/fortnite-game/tournaments/12BR_Arena_Solo_ModeTile-1024x512-f0ecee555f69c65e8a0eace05372371bebcb050f.jpg'
                        />
                    </div>
                    <div tw='max-width[270px] height[150px] 320:contents'>
                        <GameCard
                            title='Impostors'
                            teams='10'
                            image='https://cdn2.unrealengine.com/17br-mole-800x450-800x450-6010ff6fbdef.jpg'
                        />
                    </div>
                </div>
                <Text>
                    Look at and test the component{' '}
                    <Link href='https://fortnite-components-storybook.vercel.app/?path=/story/components-gamecard--basic'>
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

export default Announcing;
