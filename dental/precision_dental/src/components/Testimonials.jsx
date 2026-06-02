import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '../data/content.js';
import { container, fadeUp } from '../utils/motion.js';

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-[#FDFAF5] py-24">
      <div className="section-shell">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted"
          >
            Testimonios
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="serif-balance font-display text-4xl font-light leading-tight text-brand-dark md:text-6xl"
          >
            Sonrisas que hablan por sí solas
          </motion.h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              variants={fadeUp}
              key={testimonial.name}
              className="flex min-h-[21rem] flex-col rounded-[1.25rem] border border-brand-brown/16 bg-white p-7 shadow-[0_16px_45px_rgba(74,55,40,0.07)]"
            >
              <div className="mb-6 flex gap-1 text-brand-brown" aria-label="5 estrellas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" strokeWidth={1.4} />
                ))}
              </div>
              <blockquote className="flex-1 font-display text-2xl font-light italic leading-8 text-brand-dark">
                “{testimonial.quote}”
              </blockquote>
              <p className="mt-7 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {testimonial.name}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
