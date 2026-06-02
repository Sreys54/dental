import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Contact from '../components/Contact.jsx';
import { testimonials } from '../data/content.js';
import { container, fadeUp } from '../utils/motion.js';

export default function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>Testimonios | Precisión Dental Bogotá</title>
        <meta
          name="description"
          content="Lo que dicen nuestros pacientes sobre la atención en Precisión Dental, Bogotá."
        />
      </Helmet>
      <main className="bg-[#FDFAF5] pt-32">
        <section className="section-shell pb-24">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted"
            >
              Testimonios
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="serif-balance font-display text-5xl font-light leading-tight text-brand-dark md:text-6xl"
            >
              Sonrisas que hablan por sí solas
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg font-light leading-8 text-muted"
            >
              Cada opinión refleja una experiencia real. Nos importa que cada paciente
              salga con algo más que un buen resultado: que salga con confianza.
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {testimonials.map((t) => (
              <motion.article
                variants={fadeUp}
                key={t.name}
                className="flex min-h-[21rem] flex-col rounded-[1.25rem] border border-brand-brown/16 bg-white p-7 shadow-[0_16px_45px_rgba(74,55,40,0.07)]"
              >
                <div className="mb-6 flex gap-1 text-brand-brown" aria-label="5 estrellas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={1.4} />
                  ))}
                </div>
                <blockquote className="flex-1 font-display text-2xl font-light italic leading-8 text-brand-dark">
                  "{t.quote}"
                </blockquote>
                <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  {t.name}
                </p>
              </motion.article>
            ))}
          </motion.div>

          {/* Google rating banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-14 flex flex-col items-center gap-3 rounded-[1.25rem] border border-brand-brown/20 bg-brand-cream/60 px-8 py-8 text-center"
          >
            <div className="flex gap-1 text-brand-brown">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} fill="currentColor" strokeWidth={1.4} />
              ))}
            </div>
            <p className="font-display text-3xl font-light text-brand-dark">
              5.0 en Google
            </p>
            <p className="text-sm font-light text-muted">
              Valoración promedio de nuestros pacientes en Google Maps.
            </p>
          </motion.div>
        </section>

        <Contact compact />
      </main>
    </>
  );
}
