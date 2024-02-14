import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { css } from '../styled-system/css';
import pandaConfig from '../panda.config';
import { token } from '../styled-system/tokens';

const colors = pandaConfig.theme?.extend?.tokens?.colors;

const googleAnalyticsId = process.env.analyticsId;

const Analytics: React.FunctionComponent<{ id?: string }> = ({ id }) => (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `,
      }}
    />
  </>
);

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html
        lang="en"
        className={css({
          color: 'white',
          fontWeight: 'light',
          backgroundColor: 'purple',
        })}
      >
        <Head>
          <Analytics id={googleAnalyticsId} />
          <meta name="Description" content="Raicuparta: VR Mod Developer" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta
            name="msapplication-TileColor"
            content={token('colors.purple')}
          />
          <meta name="theme-color" content={token('colors.purple')} />
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
