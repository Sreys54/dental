import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, MapPin, Star } from 'lucide-react';
import Contact from '../components/Contact.jsx';
import { brand } from '../data/content.js';
import { container, fadeUp } from '../utils/motion.js';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contacto | Precisión Dental Bogotá</title>
        <meta
          name="description"
          content="Agenda tu cita en Precisión Dental. Cra 27 #2b-30, Los Mártires, Bogotá. Lun-Vie 8am-6pm · Sáb 8am-1pm."
        />
      </Helmet>
      <main className="bg-[#FDFAF5] pt-32">
        <section className="section-shell pb-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid gap-12 lg:grid-cols-2 lg:items-start"
          >
            {/* Left — copy */}
            <motion.div variants={fadeUp}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted">
                Contacto
              </p>
              <h1 className="serif-balance font-display text-5xl font-light leading-tight text-brand-dark md:text-6xl">
                Agenda tu cita sin compromiso
              </h1>
              <p className="mt-7 text-lg font-light leading-8 text-muted">
                Escríbenos o llámanos. Te contamos con calma cuál es la mejor opción para ti,
                sin presiones y con honestidad.
              </p>
            </motion.div>

            {/* Right — info cards */}
            <motion.div variants={container} className="grid gap-4">
              <motion.div
                variants={fadeUp}
                className="flex items-start gap-4 rounded-[1.25rem] border border-brand-brown/18 bg-white p-6 shadow-[0_16px_45px_rgba(74,55,40,0.06)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-sand/45 text-brand-dark">
                  <MapPin size={20} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Dirección</p>
                  <p className="mt-1 font-display text-xl font-light text-brand-dark">
                    {brand.address}
                  </p>
                  <a
                    href={brand.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-xs font-medium text-brand-brown underline-offset-2 hover:underline"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex items-start gap-4 rounded-[1.25rem] border border-brand-brown/18 bg-white p-6 shadow-[0_16px_45px_rgba(74,55,40,0.06)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-sand/45 text-brand-dark">
                  <Clock size={20} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Horario</p>
                  <p className="mt-1 font-display text-xl font-light text-brand-dark">
                    {brand.hours}
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex items-start gap-4 rounded-[1.25rem] border border-brand-brown/18 bg-white p-6 shadow-[0_16px_45px_rgba(74,55,40,0.06)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-sand/45 text-brand-dark">
                  <Star size={20} strokeWidth={1.6} fill="currentColor" className="text-brand-brown" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Calificación</p>
                  <p className="mt-1 font-display text-xl font-light text-brand-dark">
                    5.0 estrellas en Google
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <Contact compact />
      </main>
    </>
  );
}
