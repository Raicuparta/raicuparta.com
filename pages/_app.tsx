import type { AppProps } from 'next/app';
import { Header } from '../components/header';
import { SocialLinks } from '../components/social-links';
import { css } from '../styled-system/css';
import './styles/global.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header title="Raicuparta" />
      <SocialLinks />
      <div className={css({ maxWidth: '3xl', padding: 4, margin: 'auto' })}>
        <Component {...pageProps} />
      </div>
    </main>
  );
}

export default App;
