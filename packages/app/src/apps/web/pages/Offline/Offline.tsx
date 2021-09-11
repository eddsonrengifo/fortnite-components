import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DefaultLayout from '@layouts/Default';
import nextI18NextConfig from 'next-18next.config';

const Offline: NextPage = () => {
    return (
        <>
            <Head>
                <title>Offline</title>
            </Head>
            <DefaultLayout section={false} right={false}>
                <div tw='flex flex-col gap-4 justify-center items-center h-full p-4 text-center'>
                    <div tw='text-3xl'>Connect to the internet</div>
                    <div tw='w-1/3 h-px bg-black dark:bg-white' />
                    <div>You're offline. Check your connection.</div>
                </div>
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

export default Offline;
