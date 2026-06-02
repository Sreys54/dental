import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { brand, doctorBullets, values } from '../data/content.js';
import { container, fadeUp } from '../utils/motion.js';

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-[linear-gradient(160deg,#EFD19F_0%,#E8C88A_100%)] py-24"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-brand-dark/70"
          >
            Filosofía
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="serif-balance font-display text-4xl font-light leading-tight text-brand-dark md:text-6xl"
          >
            Más que una clínica, una familia
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="mt-7 max-w-2xl space-y-5 text-lg font-light leading-8 text-brand-dark/78"
          >
            <p>
              Durante más de 13 años hemos acompañado a pacientes que buscan soluciones claras,
              profesionales y humanas. Creemos en la odontología honesta: explicar bien, cuidar con
              detalle y recomendar solo lo que realmente necesitas.
            </p>
            <p>
              Aquí cada persona llega con una historia distinta. Por eso trabajamos sin juicios,
              con planes de tratamiento adaptados a tu presupuesto y especialistas para cada área.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-brand-dark/18 bg-white/34 px-4 py-2 text-sm font-medium text-brand-dark"
              >
                {value}
              </span>
            ))}
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link
              to="/nosotros"
              className="focus-ring mt-9 inline-flex items-center gap-3 rounded-full bg-brand-dark px-6 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#6A4E38]"
            >
              Conocer nuestra historia
              <ArrowRight size={18} strokeWidth={1.8} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.aside
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[1.5rem] bg-white p-8 shadow-card md:p-10"
        >
          <img
            src="/logo.png"
            alt="Logo de Precisión Dental"
            className="h-20 w-20 rounded-full bg-white object-cover p-2 shadow-[0_14px_35px_rgba(74,55,40,0.13)]"
          />
          <h3 className="mt-7 font-display text-4xl font-light leading-tight text-brand-dark">
            {brand.doctor}
          </h3>
          <div className="mt-7 space-y-5">
            {doctorBullets.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-sand/65 text-brand-dark">
                  <Check size={16} strokeWidth={1.8} />
                </span>
                <p className="text-sm leading-7 text-muted">
                  <strong className="font-medium text-brand-dark">{item.title}</strong>
                  {' — '}
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
