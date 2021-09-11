import React, { FC, useState, useEffect, useRef } from 'react';
import Sticky from 'react-stickynode';
import Link from 'next/link';
import { useClickAway } from 'react-use';
import tw from 'twin.macro';
import { useRouter } from 'next/router';
import { i18n } from 'next-i18next';
// import { useTranslation } from 'next-i18next';

import { docs, examples, blog, components } from './sections';
import { DefaultLayoutProps } from './types';

const DefaultLayout: FC<DefaultLayoutProps> = ({
    children,
    section = true,
    right = true,
    tags
}) => {
    const router = useRouter();
    // const [t, { language }] = useTranslation('common');
    const language = i18n?.language;

    const ref = useRef(null);
    const [headerMobile, setHeaderMobile] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [openComponents, setOpenComponents] = useState(false);
    const [mobileDocs, setMobileDocs] = useState(false);
    const [mobileExamples, setMobileExamples] = useState(false);
    const [mobileBlog, setMobileBlog] = useState(false);
    const [modalLang, setModalLang] = useState(false);
    const [theme, setTheme] = useState(typeof window !== 'undefined' && localStorage.theme);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';
    const dark = theme === 'dark' && true;

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    useEffect(() => {
        if (document.documentElement.clientWidth > 767) {
            setHeaderMobile(false);
        } else {
            setHeaderMobile(true);
        }
    }, []);

    if (typeof window !== 'undefined') {
        window.onresize = () => {
            if (document.documentElement.clientWidth > 767) {
                setHeaderMobile(false);
                setMobile(false);
            } else {
                setHeaderMobile(true);
            }
        };
    }

    useClickAway(ref, () => {
        setModalLang(false);
    });

    const ChangeLanguage = (e) => {
        router.push(router.route, router.asPath, { locale: e });
    };

    const SectionComponent = (text, link, minor) => {
        return (
            <Link href={link}>
                <a>
                    <button
                        css={[
                            tw`focus:outline-none w-full text-left p-2 rounded color[#718096] hover:(text-black background[#edf2f780]) dark:(color[#a0aec0] hover:background[#2d3748b3])`,
                            link === router.pathname &&
                                tw`text-black font-bold background[#edf2f7] hover:background[#edf2f7] dark:(background[#2d3748] text-white hover:background[#2d3748])`,
                            minor && tw`ml-4 width[95%]`
                        ]}
                    >
                        {text}
                    </button>
                </a>
            </Link>
        );
    };

    const TagComponent = (text, link, minor) => {
        return (
            <Link href={link}>
                <a>
                    <div
                        css={[
                            tw`mt-2 color[#718096] hover:text-black dark:(hover:text-white)`,
                            minor && tw`ml-4`
                        ]}
                    >
                        {text}
                    </div>
                </a>
            </Link>
        );
    };

    return (
        <div data-testid='layout' tw='bg-white dark:bg-darkbg'>
            <Sticky>
                <div tw='flex justify-between items-center px-6 border-b border-color[#edf2f7] dark:border-color[#1a202c] min-height[64px] bg-white dark:bg-darkbg'>
                    <Link href='/'>
                        <a>
                            <div tw='hover:opacity-70'>
                                <span tw='text-black font-bold dark:text-white'>
                                    {headerMobile ? 'FN.C' : 'Fortnite Components'}
                                </span>
                            </div>
                        </a>
                    </Link>
                    <div tw='flex items-center gap-4'>
                        {!headerMobile && (
                            <>
                                <Link href='/docs/getting-started'>
                                    <a>
                                        <div
                                            css={[
                                                tw`color[#a0aec0]`,
                                                router.asPath
                                                    .replace(/[^A-Z0-9]+/gi, ' ')
                                                    .includes('docs') &&
                                                    tw`text-black dark:text-white`
                                            ]}
                                        >
                                            Docs
                                        </div>
                                    </a>
                                </Link>
                                <Link href='/examples/basic'>
                                    <a>
                                        <div
                                            css={[
                                                tw`color[#a0aec0]`,
                                                router.asPath
                                                    .replace(/[^A-Z0-9]+/gi, ' ')
                                                    .includes('examples') &&
                                                    tw`text-black dark:text-white`
                                            ]}
                                        >
                                            Examples
                                        </div>
                                    </a>
                                </Link>
                                <Link href='/blog/announcing'>
                                    <a>
                                        <div
                                            css={[
                                                tw`color[#a0aec0]`,
                                                router.asPath
                                                    .replace(/[^A-Z0-9]+/gi, ' ')
                                                    .includes('blog') &&
                                                    tw`text-black dark:text-white`
                                            ]}
                                        >
                                            Blog
                                        </div>
                                    </a>
                                </Link>
                            </>
                        )}
                        <button
                            tw='focus:outline-none text-black fill[white] dark:(text-white fill[black])'
                            onClick={() => setTheme(colorTheme)}
                        >
                            {dark ? (
                                <svg
                                    viewBox='0 0 24 24'
                                    width='24'
                                    height='24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    viewBox='0 0 24 24'
                                    width='24'
                                    height='24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                                    ></path>
                                </svg>
                            )}
                        </button>
                        <button
                            tw='focus:outline-none relative text-black fill[white] dark:(text-white fill[black])'
                            onClick={() => setModalLang(true)}
                        >
                            <svg viewBox='0 0 24 24' width='24' height='24' stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
                                ></path>
                            </svg>
                            {modalLang && (
                                <div
                                    ref={ref}
                                    tw='border border-color[#edf2f7] dark:border-color[#4a5568] shadow-2xl text-black dark:text-white flex flex-col absolute top-8 right-0 rounded py-1'
                                >
                                    <div
                                        css={[
                                            tw`py-2 px-5 bg-white font-bold hover:background[#eceff1] dark:(text-white bg-darkbg hover:background[#2d3748])`,
                                            language === 'en' &&
                                                tw`background[#eceff1] hover:background[#eceff1] dark:(background[#2d3748b3] hover:background[#2d3748b3])`
                                        ]}
                                        onClick={() => ChangeLanguage('en')}
                                    >
                                        English
                                    </div>
                                    <div
                                        css={[
                                            tw`py-2 px-5 bg-white font-bold hover:background[#eceff1] dark:(text-white bg-darkbg hover:background[#2d3748])`,
                                            language === 'es' &&
                                                tw`background[#eceff1] hover:background[#eceff1] dark:(background[#2d3748b3] hover:background[#2d3748b3])`
                                        ]}
                                        onClick={() => ChangeLanguage('es')}
                                    >
                                        Español
                                    </div>
                                </div>
                            )}
                        </button>
                        <a
                            target='_blank'
                            href='https://github.com/EddsonRT/fortnite-components'
                            tw='flex'
                        >
                            <button tw='focus:outline-none text-black dark:text-white'>
                                <svg height='24' viewBox='2 2 20 20' fill='none'>
                                    <path
                                        fillRule='evenodd'
                                        clipRule='evenodd'
                                        d='M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z'
                                        fill='currentColor'
                                    ></path>
                                </svg>
                            </button>
                        </a>
                        <button
                            tw='767:block hidden focus:outline-none text-black dark:text-white'
                            onClick={() => (mobile ? setMobile(false) : setMobile(true))}
                        >
                            <svg
                                fill='none'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h16M4 18h16'
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </Sticky>
            {section && (
                <div tw='767:hidden px-4 py-5 border-r flex flex-col gap-1 border-color[#edf2f7] dark:border-color[#1a202c] fixed width[256px] height[calc(100vh - 64px)] overflow-y-auto'>
                    {router.asPath.replace(/[^A-Z0-9]+/gi, ' ').includes('docs') && (
                        <>
                            {docs?.map((i, index) => {
                                return (
                                    <div key={index}>
                                        {SectionComponent(i.name, i.url, i.minor)}
                                    </div>
                                );
                            })}
                            <button
                                tw='focus:outline-none w-full text-left p-2 rounded color[#718096] hover:(text-black background[#edf2f780]) dark:(color[#a0aec0] hover:background[#2d3748b3])'
                                onClick={() =>
                                    openComponents
                                        ? setOpenComponents(false)
                                        : setOpenComponents(true)
                                }
                            >
                                Components
                            </button>
                            {openComponents &&
                                components?.map((i, index) => {
                                    return (
                                        <div key={index}>
                                            {SectionComponent(i.name, i.url, true)}
                                        </div>
                                    );
                                })}
                        </>
                    )}
                    {router.asPath.replace(/[^A-Z0-9]+/gi, ' ').includes('examples') && (
                        <>
                            {examples?.map((i, index) => {
                                return (
                                    <div key={index}>
                                        {SectionComponent(i.name, i.url, i.minor)}
                                    </div>
                                );
                            })}
                        </>
                    )}
                    {router.asPath.replace(/[^A-Z0-9]+/gi, ' ').includes('blog') && (
                        <>
                            {blog?.map((i, index) => {
                                return (
                                    <div key={index}>
                                        {SectionComponent(i.name, i.url, i.minor)}
                                    </div>
                                );
                            })}
                        </>
                    )}
                </div>
            )}
            {mobile ? (
                <div tw='flex flex-col gap-1 w-full px-4 pt-4 pb-16 height[calc(100vh - 64px)] overflow-y-auto'>
                    {SectionComponent('Introduction', '/', false)}
                    <button
                        tw='focus:outline-none w-full text-left p-2 rounded color[#718096] hover:(text-black background[#edf2f780]) dark:(color[#a0aec0] hover:background[#2d3748b3])'
                        onClick={() => (mobileDocs ? setMobileDocs(false) : setMobileDocs(true))}
                    >
                        Docs
                    </button>
                    {mobileDocs && (
                        <>
                            {docs?.map((i, index) => {
                                return (
                                    <div key={index}>{SectionComponent(i.name, i.url, true)}</div>
                                );
                            })}
                            <button
                                tw='ml-4 width[95%] focus:outline-none text-left p-2 rounded color[#718096] hover:(text-black background[#edf2f780]) dark:(color[#a0aec0] hover:background[#2d3748b3])'
                                onClick={() =>
                                    openComponents
                                        ? setOpenComponents(false)
                                        : setOpenComponents(true)
                                }
                            >
                                Components
                            </button>
                            {openComponents &&
                                components?.map((i, index) => {
                                    return (
                                        <div key={index} tw='ml-4'>
                                            {SectionComponent(i.name, i.url, true)}
                                        </div>
                                    );
                                })}
                        </>
                    )}
                    <button
                        tw='focus:outline-none w-full text-left p-2 rounded color[#718096] hover:(text-black background[#edf2f780]) dark:(color[#a0aec0] hover:background[#2d3748b3])'
                        onClick={() =>
                            mobileExamples ? setMobileExamples(false) : setMobileExamples(true)
                        }
                    >
                        Examples
                    </button>
                    {mobileExamples &&
                        examples?.map((i, index) => {
                            return <div key={index}>{SectionComponent(i.name, i.url, true)}</div>;
                        })}
                    <button
                        tw='focus:outline-none w-full text-left p-2 rounded color[#718096] hover:(text-black background[#edf2f780]) dark:(color[#a0aec0] hover:background[#2d3748b3])'
                        onClick={() => (mobileBlog ? setMobileBlog(false) : setMobileBlog(true))}
                    >
                        Blog
                    </button>
                    {mobileBlog &&
                        blog?.map((i, index) => {
                            return <div key={index}>{SectionComponent(i.name, i.url, true)}</div>;
                        })}
                </div>
            ) : (
                <div
                    css={[
                        tw`flex overflow-hidden pl-8 767:pl-6 pt-4 pb-16 min-height[calc(100vh - 64px)]`,
                        section && tw`margin-left[256px] 767:(ml-0 pl-0)`,
                        !section && tw`767:pl-0`,
                        !right && tw`p-0`,
                        right && tw`margin-right[288px] 1279:(mr-0 pr-8)`,
                        right && tw`767:px-6`
                    ]}
                >
                    <div
                        css={[
                            tw`text-black dark:text-white w-full`,
                            right && tw`max-width[768px] mx-auto`
                        ]}
                    >
                        {children}
                    </div>
                </div>
            )}
            {right && (
                <div tw='1279:hidden fixed font-size[.875rem] overflow-y-auto pt-8 pb-10 pl-4 mr-8 bottom-0 right-0 width[256px] min-height[calc(100vh - 64px)]'>
                    {tags?.map((i, index) => {
                        return <div key={index}>{TagComponent(i.name, i.tag, i.minor)}</div>;
                    })}
                </div>
            )}
        </div>
    );
};

export default DefaultLayout;
