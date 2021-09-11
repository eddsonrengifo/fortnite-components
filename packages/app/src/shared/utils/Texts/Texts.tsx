import React from 'react';
import tw, { styled } from 'twin.macro';
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/okaidia';
import vsLight from 'prism-react-renderer/themes/github';

export const Title = styled.h1(tw`text-4xl mt-2 font-bold`);
export const Text = styled.p(tw`mt-6`);
export const Feature = styled.span(
    tw`rounded background[#a0aec040] color[#2d3748] py-0.5 px-1 dark:(color[#e2e8f0] background[#2d3748])`
);

export const Link = ({ children, href }) => {
    return (
        <a target='_blank' href={href} tw='underline color[#4299e1]'>
            {children}
        </a>
    );
};

export const Advice = ({ children }) => {
    return (
        <div tw='flex gap-2 mt-6 background[#fffaf0] dark:background[#feebc81a] rounded-lg p-2.5 overflow-x-auto'>
            <div tw='color[#9c4221] dark:color[#fbd38d] min-width[1.5rem] h-6'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                </svg>
            </div>
            <p tw='color[#9c4221] dark:color[#fbd38d]'>{children}</p>
        </div>
    );
};

export const Subheading = ({ children, id }) => {
    return (
        <h2 className='group' id={id} tw='font-semibold text-2xl mt-10'>
            <a href={`#${id}`}>
                {children}
                <span tw='ml-2 opacity-0 color[#a0aec0] dark:color[#4a5568] group-hover:opacity-100'>
                    #
                </span>
            </a>
        </h2>
    );
};

export const Subtitle = ({ children, id }) => {
    return (
        <h2
            className='group'
            id={id}
            tw='font-semibold text-3xl pb-1 mt-10 border-b border-color[#edf2f7] dark:border-color[#1a202c]'
        >
            <a href={`#${id}`}>
                {children}
                <span tw='ml-2 opacity-0 color[#a0aec0] dark:color[#4a5568] group-hover:opacity-100'>
                    #
                </span>
            </a>
        </h2>
    );
};

export const HighlightShortcode = ({ code }) => {
    const Pre = styled.pre(
        tw`overflow-x-auto text-base font-sans text-left mt-6 mb-4 rounded-xl p-4`
    );

    const theme = typeof window !== 'undefined' && localStorage.theme === 'dark' ? vsDark : vsLight;

    return (
        <Highlight {...defaultProps} code={code} language='jsx' theme={theme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span tw='ml-0.5' {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </Pre>
            )}
        </Highlight>
    );
};
