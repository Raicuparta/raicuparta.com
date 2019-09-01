import Document, { Main, Head } from 'next/document';

class CustomHead extends Head {
  render() {
    const res = super.render();

    function transform(node) {
      // remove all link preloads
      if (node && node.type === 'link' && node.props && node.props.rel === 'preload') {
        return null;
      }
      if (node && node.props && node.props.children) {
      return {
          ...node,
          props: {
            ...node.props,
            children: Array.isArray(node.props.children)
            ? node.props.children.map(transform)
            : transform(node.props.children),
          },
        }
      }
      if (Array.isArray(node)) {
        return node.map(transform);
      }

      return node;
    }

    return transform(res);
  }
}

const Analytics = ({ id }) => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `
      }}
    />
  </>
)

class StaticDocument extends Document {
  render() {
    return (
      <html>
        <CustomHead>
          <Analytics id="UA-65658920-2" />
          <title>
            Ricardo Lopes: Front-end Developer
          </title>
          <meta
            name="author"
            content="Ricardo Lopes"
          />
          <meta
            name="description"
            content="Portfolio page for Ricardo Lopes: Front-end Developer"
          />
          <link
            rel="shortcut icon"
            href="static/favicon.ico"
            type="image/vnd.microsoft.icon"
          />
        </CustomHead>
        <body>
          <Main />
        </body>
      </html>
    )
  }
}

export default process.env.NODE_ENV === 'production' ? StaticDocument : Document;
