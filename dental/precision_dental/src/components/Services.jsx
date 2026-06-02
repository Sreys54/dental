import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Baby, Gem, Leaf, RefreshCw, Scissors, Smile, Sparkles, Stethoscope } from 'lucide-react';
import { services } from '../data/content.js';
import { container, fadeUp } from '../utils/motion.js';

const serviceIcons = { Stethoscope, Sparkles, Smile, Gem, Leaf, Scissors, Baby, RefreshCw };

export default function Services() {
  return (
    <section id="servicios" className="bg-[#FDFAF5] py-24">
      <div className="section-shell">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted">
              Servicios
            </p>
            <h2 className="serif-balance font-display text-4xl font-light leading-tight text-brand-dark md:text-6xl">
              Todas las especialidades bajo un mismo techo
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="lg:ml-auto lg:max-w-xl">
            <p className="body-balance text-lg font-light leading-8 text-muted">
              Un equipo de especialistas para atender desde controles preventivos hasta tratamientos
              avanzados con criterio clínico, calidez y honestidad.
            </p>
            <Link
              to="/servicios"
              className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full text-sm font-medium text-brand-dark transition hover:text-[#6A4E38]"
            >
              Ver servicios completos
              <ArrowRight size={17} strokeWidth={1.8} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5"
        >
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <motion.article
                variants={fadeUp}
                key={service.title}
                className="group min-h-[17rem] rounded-[1.25rem] border border-brand-brown/18 bg-white p-7 shadow-[0_16px_45px_rgba(74,55,40,0.07)] transition duration-300 hover:-translate-y-2 hover:border-brand-brown hover:bg-[#FBF1E0]"
              >
                <span className="text-brand-brown transition group-hover:text-brand-dark">
                  {Icon && <Icon size={32} strokeWidth={1.5} />}
                </span>
                <h3 className="mt-7 font-display text-3xl font-light leading-tight text-brand-dark">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-7 text-muted">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
