const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const { i18n } = require('./next-18next.config');

module.exports = withPWA({
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
        runtimeCaching
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
            config.resolve.fallback.module = false;
        }
        return config;
    },
    i18n,
    redirects: () => {
        return [
            {
                source: '/docs',
                destination: '/docs/getting-started',
                permanent: true
            },
            {
                source: '/docs/components',
                destination: '/docs/components/store-card',
                permanent: true
            },
            {
                source: '/examples',
                destination: '/examples/basic',
                permanent: true
            },
            {
                source: '/blog',
                destination: '/blog/announcing',
                permanent: true
            }
        ];
    }
});
