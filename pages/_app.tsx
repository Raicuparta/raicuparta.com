import type { AppProps } from 'next/app';
import { Header, SocialLinks } from '../components';
import './styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Raicuparta</title>
      <main>
        <Header title="Raicuparta" />
        <SocialLinks />
        <div className="p-4 max-w-3xl m-auto">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}

export default App;
