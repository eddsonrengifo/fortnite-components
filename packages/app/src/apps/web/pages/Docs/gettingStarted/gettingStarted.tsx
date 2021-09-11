import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DefaultLayout from '@layouts/Default';
import { Advice, Feature, Subtitle, Text, Title, HighlightShortcode } from '@utils/Texts';
import nextI18NextConfig from 'next-18next.config';

const GettingStarted: NextPage = () => {
    // const { t } = useTranslation('home');

    const tags = [
        {
            tag: '#installation',
            name: 'Installation'
        },
        {
            tag: '#quick-start',
            name: 'Quick Start',
            minor: true
        }
    ];

    return (
        <>
            <NextSeo title='Getting Started' />
            <DefaultLayout tags={tags}>
                <Title>Getting Started</Title>
                <Subtitle id='installation'>Installation</Subtitle>
                <Text>Inside your React project directory, run the following:</Text>
                <HighlightShortcode code={`yarn add fortnite-components`} />
                <Text>Or with npm:</Text>
                <HighlightShortcode code={`npm install fortnite-components`} />
                <Subtitle id='quick-start'>Quick Start</Subtitle>
                <Text>It's easy to use, just import the components you need</Text>
                <HighlightShortcode
                    code={`import React from 'react'
import { StoreCard } from 'fortnite-components'

const App = () => {
    return (
      <div style={{ width:'120px', height:'170px' }}>
            <StoreCard name='Safari' />
      <div>
    )
}`}
                />
                <Advice>
                    For now it only works for the <Feature>React</Feature> and{' '}
                    <Feature>Next.js</Feature> frameworks
                </Advice>
            </DefaultLayout>
        </>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    try {
        return {
            props: {
                ...(await serverSideTranslations(
                    locale as string,
                    ['home', 'common'],
                    nextI18NextConfig
                ))
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
};

export default GettingStarted;
