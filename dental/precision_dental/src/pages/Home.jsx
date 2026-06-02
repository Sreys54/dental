import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero.jsx';
import { seo } from '../data/content.js';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{seo.home.title}</title>
        <meta name="description" content={seo.home.description} />
      </Helmet>
      <Hero />
    </>
  );
}
