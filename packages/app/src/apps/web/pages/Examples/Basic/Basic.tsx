import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import DefaultLayout from '@layouts/Default';
import nextI18NextConfig from 'next-18next.config';

const Basic: NextPage = () => {
    const src =
        typeof window !== 'undefined' && localStorage.theme === 'dark'
            ? 'https://codesandbox.io/embed/fortnite-components-basic-pqldx?autoresize=1&fontsize=14&hidenavigation=1&theme=dark'
            : 'https://codesandbox.io/embed/fortnite-components-basic-pqldx?autoresize=1&fontsize=14&hidenavigation=1&theme=light';

    return (
        <>
            <NextSeo title='Basic Usage' />
            <DefaultLayout right={false}>
                <iframe
                    src={src}
                    tw='w-full h-full overflow-hidden'
                    title='fortnite-components-basic'
                    allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
                    sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
                />
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

export default Basic;
