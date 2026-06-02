import { motion } from 'framer-motion';
import { Clock, Instagram, MapPin, MessageCircle, Phone, Star } from 'lucide-react';
import { brand } from '../data/content.js';
import { container, fadeUp } from '../utils/motion.js';

export default function Contact({ compact = false }) {
  return (
    <section id="contacto" className={`relative overflow-hidden bg-brand-dark ${compact ? 'py-20' : 'py-24'}`}>
      <div
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-sand/18 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="section-shell relative z-10 text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-brand-sand/75"
        >
          Contacto
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mx-auto max-w-3xl font-display text-4xl font-light leading-tight text-white md:text-6xl"
        >
          Agenda tu cita hoy sin compromiso
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-10 flex max-w-3xl flex-col justify-center gap-3 sm:flex-row"
        >
          <a
            href={`tel:${brand.phone}`}
            className="focus-ring inline-flex items-center justify-center gap-3 rounded-full bg-brand-sand px-7 py-4 text-sm font-medium text-brand-dark transition hover:-translate-y-0.5 hover:bg-[#F5DFAF]"
          >
            <Phone size={18} strokeWidth={1.8} />
            Llamar
          </a>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-medium text-[#073E1D] transition hover:-translate-y-0.5 hover:bg-[#35E276]"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
            WhatsApp
          </a>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Instagram size={18} strokeWidth={1.8} />
            Instagram
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="mx-auto mt-12 max-w-5xl border-t border-white/16 pt-8">
          <a
            href={brand.maps}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex flex-wrap items-center justify-center gap-x-7 gap-y-4 rounded-[1.25rem] px-4 py-2 text-sm font-light leading-6 text-white"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={17} className="text-brand-sand" />
              {brand.address}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={17} className="text-brand-sand" />
              {brand.hours}
            </span>
            <span className="inline-flex items-center gap-2">
              <Star size={17} className="text-brand-sand" fill="currentColor" />
              5.0 estrellas Google
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
