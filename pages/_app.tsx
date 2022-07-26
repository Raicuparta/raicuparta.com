import type { AppProps } from 'next/app';
import { Header } from '../components/header';
import { SocialLinks } from '../components/social-links';
import './styles/global.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Header title="Raicuparta" />
      <SocialLinks />
      <div className="p-4 max-w-3xl m-auto">
        <Component {...pageProps} />
      </div>
    </main>
  );
}

export default App;
