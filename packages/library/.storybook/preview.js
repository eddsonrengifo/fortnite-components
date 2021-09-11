import React from 'react';
import GlobalStyles from '../src/styles/GlobalStyles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({ prepend: true, key: 'twin' });

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

export const decorators = [
    (Story) => (
        <CacheProvider value={cache}>
            <GlobalStyles />
            <Story />
        </CacheProvider>
    )
];
