import type { AppProps } from 'next/app';
import { Header } from '../components/header';
import { css } from '../styled-system/css';
import './styles/global.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header />
      <div className={css({ maxWidth: '3xl', padding: 2, margin: 'auto' })}>
        <Component {...pageProps} />
      </div>
    </main>
  );
}

export default App;
