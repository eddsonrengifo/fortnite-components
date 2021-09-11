import { DefaultSeoProps } from 'next-seo';

export default <DefaultSeoProps>{
    defaultTitle: 'Fortnite Components',
    titleTemplate: '%s - Fortnite Components',
    openGraph: {
        type: 'website',
        url: 'https://fortnite-components.vercel.app/',
        site_name: 'Fortnite Components'
    },
    twitter: {
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image'
    }
};
