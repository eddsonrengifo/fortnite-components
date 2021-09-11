import React, { FC } from 'react';

import { Global, css } from '@emotion/react';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css`
    .sticky-inner-wrapper {
        z-index: 30;
    }
`;

const GlobalStyles: FC = () => (
    <>
        <BaseStyles />
        <Global styles={customStyles} />
    </>
);

export default GlobalStyles;
