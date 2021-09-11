import React, { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import GlobalStyles from 'packages/library/src/styles/GlobalStyles';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '@shared/libs/gtag';
import SEO from 'next-seo.config';

import nextI18NextConfig from 'next-18next.config';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <DefaultSeo {...SEO} />
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
