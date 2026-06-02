import { Helmet } from 'react-helmet-async';
import BeforeAfter from '../components/BeforeAfter.jsx';
import Contact from '../components/Contact.jsx';

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Galería de casos | Precisión Dental Bogotá</title>
        <meta
          name="description"
          content="Galería de transformaciones reales: diseño de sonrisa, blanqueamiento, ortodoncia e implantes en Precisión Dental, Bogotá."
        />
      </Helmet>
      <main className="bg-[#FDFAF5] pt-20">
        <BeforeAfter />
        <Contact compact />
      </main>
    </>
  );
}
