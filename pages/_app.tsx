import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import '../styles/globals.css';

import Layout from 'components/Layout';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NextSeo
        openGraph={{
          type: 'website',
          locale: 'ko_KR',
          url: 'https://song-dev.vercel.app/',
          title: 'Dev.Song | Blog',
          images: [
            {
              url: '/public/Profile.jpg',
              alt: 'og:image',
            },
          ],
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
