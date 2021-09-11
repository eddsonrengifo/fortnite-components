import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DefaultLayout from '@layouts/Default';
import nextI18NextConfig from 'next-18next.config';

const Error: NextPage = () => {
    return (
        <>
            <Head>
                <title>Not Found</title>
            </Head>
            <DefaultLayout section={false} right={false}>
                <div tw='flex flex-col gap-4 justify-center items-center h-full p-4 text-center'>
                    <div tw='text-5xl'>404</div>
                    <div tw='w-1/3 h-px bg-black dark:bg-white' />
                    <div>This page could not be found.</div>
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

export default Error;
