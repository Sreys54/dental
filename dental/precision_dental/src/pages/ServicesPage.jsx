import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Baby, CheckCircle2, Gem, Leaf, RefreshCw, Scissors, Smile, Sparkles, Stethoscope } from 'lucide-react';

const serviceIcons = { Stethoscope, Sparkles, Smile, Gem, Leaf, Scissors, Baby, RefreshCw };
import Contact from '../components/Contact.jsx';
import { brand, seo, services } from '../data/content.js';
import { container, fadeUp } from '../utils/motion.js';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>{seo.services.title}</title>
        <meta name="description" content={seo.services.description} />
      </Helmet>
      <main className="bg-[#FDFAF5] pt-32">
        <section className="section-shell pb-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
          >
            <motion.div variants={fadeUp}>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-muted">
                Servicios odontológicos
              </p>
              <h1 className="font-display text-5xl font-light leading-[0.96] text-brand-dark md:text-6xl">
                Cuidado integral para cada etapa de tu sonrisa
              </h1>
            </motion.div>
            <motion.div variants={fadeUp} className="max-w-2xl lg:ml-auto">
              <p className="body-balance text-lg font-light leading-8 text-muted">
                En Precisión Dental reunimos especialistas para que cada diagnóstico tenga una
                solución honesta, clara y adaptada a tu presupuesto real.
              </p>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-8 inline-flex items-center gap-3 rounded-full bg-brand-dark px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#6A4E38]"
              >
                Reservar valoración
                <ArrowRight size={18} strokeWidth={1.8} />
              </a>
            </motion.div>
          </motion.div>
        </section>

        <section className="section-shell pb-24">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  className="group flex min-h-[24rem] flex-col rounded-[1.25rem] border border-brand-brown/25 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-2 hover:border-brand-brown hover:bg-[#FBF1E0]"
                >
                  <span className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-brand-sand/45 text-brand-dark">
                    {Icon && <Icon size={28} strokeWidth={1.5} />}
                  </span>
                  <h2 className="font-display text-3xl font-light leading-tight text-brand-dark">
                    {service.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm font-light leading-7 text-muted">
                    {service.detail}
                  </p>
                  <div className="mt-7 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-dark">
                    <CheckCircle2 size={16} className="text-brand-brown" />
                    Especialista asignado
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section className="bg-brand-cream py-20">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <h2 className="font-display text-4xl font-light leading-tight text-brand-dark md:text-5xl">
              Tratamientos explicados sin prisa y sin presión.
            </h2>
            <p className="body-balance text-lg font-light leading-8 text-muted">
              Cada plan inicia con una valoración honesta. Si no necesitas un procedimiento, te lo
              diremos. Si hay varias opciones, las revisamos contigo para que tomes una decisión
              tranquila.
            </p>
          </div>
        </section>

        <Contact compact />
      </main>
    </>
  );
}
