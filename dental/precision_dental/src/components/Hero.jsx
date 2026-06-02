import { motion } from 'framer-motion';
import { ArrowRight, Instagram, MessageCircle } from 'lucide-react';
import { brand, stats } from '../data/content.js';
import { container, fadeUp } from '../utils/motion.js';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section id="inicio" className={`${styles.heroBackdrop} flex items-center pt-24`}>
      <span className={styles.divider} aria-hidden="true" />
      <div className="section-shell relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-12 py-16 lg:grid-cols-[1.06fr_0.94fr]">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex rounded-full border border-brand-brown/25 bg-brand-sand/35 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-brand-dark"
          >
            Bogotá · 13 años de experiencia
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="serif-balance font-display text-5xl font-light leading-[0.94] text-brand-dark md:text-7xl lg:text-[4.35rem]"
          >
            Tu sonrisa <span className="italic text-brand-brown">merece</span> la mejor atención
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="body-balance mt-7 max-w-2xl text-lg font-light leading-8 text-muted"
          >
            Odontología honesta, cálida y especializada para toda la familia. Te acompañamos con
            planes claros, sin juicios y sin procedimientos innecesarios.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-3 rounded-full bg-brand-dark px-7 py-4 text-sm font-medium text-white shadow-[0_18px_38px_rgba(74,55,40,0.2)] transition hover:-translate-y-0.5 hover:bg-[#6A4E38]"
            >
              <MessageCircle size={18} strokeWidth={1.8} />
              Reserva tu cita
            </a>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-3 rounded-full border border-brand-dark/25 bg-white/35 px-7 py-4 text-sm font-medium text-brand-dark transition hover:-translate-y-0.5 hover:border-brand-brown hover:bg-white/70"
            >
              <Instagram size={18} strokeWidth={1.8} />
              Ver nuestro trabajo
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-11 grid max-w-xl grid-cols-3 divide-x divide-brand-brown/25 rounded-[1.25rem] border border-white/50 bg-white/38 shadow-[0_18px_55px_rgba(74,55,40,0.08)] backdrop-blur"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-5 text-center">
                <span className="block font-display text-3xl font-light text-brand-dark">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative hidden min-h-[34rem] items-center justify-center lg:flex"
        >
          <motion.div
            variants={fadeUp}
            className="relative flex aspect-square w-full max-w-[420px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_28%,#FFFFFF_0%,#F5E6CA_42%,#C5A97A_100%)] p-10 shadow-glow"
          >
            <div className="absolute inset-6 rounded-full border border-white/45" />
            <img
              src="/logo.png"
              alt="Logo de Precisión Dental"
              className="relative z-10 h-52 w-52 rounded-full bg-white object-cover p-4 shadow-[0_24px_70px_rgba(74,55,40,0.22)]"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="absolute left-2 top-16 rounded-full border border-white/60 bg-white/82 px-5 py-3 text-sm font-medium text-brand-dark shadow-card backdrop-blur"
          >
            5.0 · Google
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="absolute bottom-20 right-0 max-w-[15rem] rounded-[1.25rem] border border-white/55 bg-white/88 p-5 shadow-card backdrop-blur"
          >
            <p className="font-display text-2xl font-light leading-tight text-brand-dark">
              {brand.doctor}
            </p>
            <p className="mt-2 text-sm font-light leading-6 text-muted">
              Especialistas en estética
            </p>
            <ArrowRight className="mt-4 text-brand-brown" size={20} strokeWidth={1.7} />
          </motion.div>
        </motion.div>

        <motion.a
          href="#servicios"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted lg:flex"
        >
          <span className={styles.scrollLine} aria-hidden="true" />
          Descubrir
        </motion.a>
      </div>
    </section>
  );
}
