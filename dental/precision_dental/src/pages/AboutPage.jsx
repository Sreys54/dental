import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HeartHandshake, ShieldCheck, Sparkles, WalletCards } from 'lucide-react';
import Contact from '../components/Contact.jsx';
import { brand, doctorBullets, seo, values } from '../data/content.js';
import { container, fadeUp } from '../utils/motion.js';

const valueIcons = [ShieldCheck, HeartHandshake, WalletCards, Sparkles];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{seo.about.title}</title>
        <meta name="description" content={seo.about.description} />
      </Helmet>
      <main className="bg-brand-cream pt-32">
        <section className="section-shell pb-24">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"
          >
            <motion.div variants={fadeUp}>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-muted">
                Nuestra filosofía
              </p>
              <h1 className="serif-balance font-display text-5xl font-light leading-[0.96] text-brand-dark md:text-6xl">
                Una clínica construida alrededor de la confianza
              </h1>
              <div className="mt-8 space-y-5 text-lg font-light leading-8 text-muted">
                <p>
                  Precisión Dental nació para ofrecer odontología de alto nivel con un trato cercano:
                  sin juicios, sin procedimientos innecesarios y con explicaciones claras.
                </p>
                <p>
                  La Dra. Tatiana Giraldo lidera un equipo de especialistas que entiende que cada
                  sonrisa trae una historia, un presupuesto y una expectativa distinta.
                </p>
              </div>
            </motion.div>

            <motion.aside
              variants={fadeUp}
              className="rounded-[1.5rem] bg-white p-8 shadow-card md:p-10"
            >
              <img
                src="/logo.png"
                alt="Logo de Precisión Dental"
                className="h-24 w-24 rounded-full bg-white object-cover p-2 shadow-glow"
              />
              <h2 className="mt-8 font-display text-4xl font-light text-brand-dark">
                {brand.doctor}
              </h2>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-muted">
                13 años de experiencia
              </p>
              <div className="mt-8 space-y-5">
                {doctorBullets.map((item, index) => {
                  const Icon = valueIcons[index];
                  return (
                    <div key={item.title} className="flex gap-4">
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-sand/45 text-brand-dark">
                        <Icon size={19} strokeWidth={1.7} />
                      </span>
                      <p className="text-sm leading-7 text-muted">
                        <strong className="font-medium text-brand-dark">{item.title}</strong>
                        {' — '}
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.aside>
          </motion.div>
        </section>

        <section className="bg-[#FDFAF5] py-20">
          <div className="section-shell">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-5 md:grid-cols-4"
            >
              {values.map((value, index) => {
                const Icon = valueIcons[index];
                return (
                  <motion.div
                    key={value}
                    variants={fadeUp}
                    className="rounded-[1.25rem] border border-brand-brown/20 bg-white p-7 text-center shadow-card"
                  >
                    <Icon className="mx-auto text-brand-brown" size={28} strokeWidth={1.7} />
                    <h2 className="mt-5 font-display text-3xl font-light text-brand-dark">
                      {value}
                    </h2>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <Contact compact />
      </main>
    </>
  );
}
