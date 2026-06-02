import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Copy, Instagram, MapPin, MessageCircle, Phone, Star, X } from 'lucide-react';
import { brand } from '../data/content.js';
import { container, fadeUp } from '../utils/motion.js';

function PhoneModal({ onClose }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(brand.phoneLabel);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-brand-dark/70 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 16 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          className="relative w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#FDFAF5] shadow-[0_32px_80px_rgba(74,55,40,0.28)]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-brand-sand via-brand-brown to-brand-dark" />

          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-brand-dark/8 text-brand-dark transition hover:bg-brand-dark/14"
            aria-label="Cerrar"
          >
            <X size={16} strokeWidth={2} />
          </button>

          <div className="px-8 pb-8 pt-7 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-sand/40">
              <Phone size={24} strokeWidth={1.6} className="text-brand-dark" />
            </span>

            <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Llámanos directamente
            </p>
            <p className="mt-3 font-display text-4xl font-light tracking-wide text-brand-dark">
              {brand.phoneLabel}
            </p>
            <p className="mt-1 text-xs font-light text-muted">
              Lun-Vie 8am-6pm · Sáb 8am-1pm
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <a
                href={`tel:${brand.phone}`}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-dark px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_25px_rgba(74,55,40,0.2)] transition hover:-translate-y-0.5 hover:bg-[#6A4E38]"
              >
                <Phone size={16} strokeWidth={1.8} />
                Llamar ahora
              </a>
              <button
                onClick={handleCopy}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-brand-brown/30 bg-white px-6 py-3.5 text-sm font-medium text-brand-dark transition hover:border-brand-brown hover:bg-brand-cream"
              >
                <Copy size={16} strokeWidth={1.8} />
                {copied ? '¡Copiado!' : 'Copiar número'}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Contact({ compact = false }) {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <>
      {showPhone && <PhoneModal onClose={() => setShowPhone(false)} />}

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
            <button
              onClick={() => setShowPhone(true)}
              className="focus-ring inline-flex items-center justify-center gap-3 rounded-full bg-brand-sand px-7 py-4 text-sm font-medium text-brand-dark transition hover:-translate-y-0.5 hover:bg-[#F5DFAF]"
            >
              <Phone size={18} strokeWidth={1.8} />
              Llamar
            </button>
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
    </>
  );
}
