import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import BeforeAfter from '../components/BeforeAfter.jsx';
import About from '../components/About.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';
import { seo } from '../data/content.js';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{seo.home.title}</title>
        <meta name="description" content={seo.home.description} />
      </Helmet>
      <Hero />
      <Services />
      <BeforeAfter />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
