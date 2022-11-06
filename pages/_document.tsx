import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

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
      <Html lang="en" className="text-white font-light bg-purple">
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
          <a rel="me" href="https://mastodon.gamedev.place/@Raicuparta">
            Mastodon
          </a>
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
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
