import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { extractCritical } from '@emotion/server';
import { GA_TRACKING_ID } from '@shared/libs/gtag';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        const page = await ctx.renderPage();
        const styles = extractCritical(page.html);
        return {
            ...initialProps,
            ...page,
            styles: (
                <>
                    {initialProps.styles}
                    <style
                        data-emotion-css={styles.ids.join(' ')}
                        dangerouslySetInnerHTML={{ __html: styles.css }}
                    />
                </>
            )
        };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='icon' sizes='399x399' href='/images/icon.png' />
                    <link rel='shortcut icon' href='/favicon.ico' />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
