import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DefaultLayout from '@layouts/Default';
import { Link, Subtitle, Text, Title } from '@utils/Texts';
import nextI18NextConfig from 'next-18next.config';

const GettingStarted: NextPage = () => {
    // const { t } = useTranslation('common');

    const tags = [
        {
            tag: '#see',
            name: 'See Storybook'
        }
    ];

    return (
        <>
            <NextSeo title='Storybook Components' />
            <DefaultLayout tags={tags}>
                <Title>Storybook</Title>
                <Subtitle id='see'>See Components</Subtitle>
                <Text>
                    Look at the components{' '}
                    <Link href='https://fortnite-components-storybook.vercel.app'>here.</Link>
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

export default GettingStarted;
