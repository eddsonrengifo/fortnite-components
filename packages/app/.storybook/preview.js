import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import GlobalStyles from './../src/apps/web/styles/GlobalStyles';

const cache = createCache({ prepend: true, key: 'css' });

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
