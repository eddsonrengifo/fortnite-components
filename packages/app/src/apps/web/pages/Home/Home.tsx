import React from 'react';
import { GetStaticProps, NextPage } from 'next';
// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DefaultLayout from '@layouts/Default';
import nextI18NextConfig from 'next-18next.config';

const Home: NextPage = () => {
    // const { t } = useTranslation('home');

    return (
        <DefaultLayout section={false} right={false}>
            {/* <div tw='text-black dark:text-white'>{t('home')}</div> */}
        </DefaultLayout>
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

export default Home;
