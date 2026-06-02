import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronsLeftRight, ImageOff } from 'lucide-react';
import { beforeAfterCategories, beforeAfterCases, brand } from '../data/content.js';
import { container, fadeUp } from '../utils/motion.js';

function PlaceholderSide({ side }) {
  const isAfter = side === 'after';
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-3 ${
        isAfter
          ? 'bg-gradient-to-br from-[#F5ECD9] via-[#EFD19F]/25 to-[#F7F4EE]'
          : 'bg-gradient-to-br from-[#D6C9BC]/50 via-[#C5B9AC]/30 to-[#B8A99A]/20'
      }`}
    >
      <ImageOff size={26} strokeWidth={1.3} className="text-brand-brown/35" />
      <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted/60">
        Imagen próximamente
      </p>
    </div>
  );
}

function SliderCard({ caso, categoryLabel }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const update = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(98, Math.max(2, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = (e) => { dragging.current = true; update(e.clientX); };
  const onMouseMove = (e) => { if (dragging.current) update(e.clientX); };
  const onMouseUp = () => { dragging.current = false; };
  const onTouchStart = (e) => { dragging.current = true; update(e.touches[0].clientX); };
  const onTouchMove = (e) => { e.preventDefault(); if (dragging.current) update(e.touches[0].clientX); };
  const onTouchEnd = () => { dragging.current = false; };

  return (
    <article className="group overflow-hidden rounded-[1.25rem] border border-brand-brown/15 bg-white shadow-[0_16px_45px_rgba(74,55,40,0.07)]">
      <div
        ref={containerRef}
        className="relative h-64 w-full cursor-col-resize select-none overflow-hidden"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* ANTES — base layer */}
        <div className="absolute inset-0">
          {caso.before ? (
            <img src={caso.before} alt={`Antes — ${categoryLabel}`} className="h-full w-full object-cover" draggable={false} />
          ) : (
            <PlaceholderSide side="before" />
          )}
        </div>

        {/* DESPUÉS — clipped reveal */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          {caso.after ? (
            <img src={caso.after} alt={`Después — ${categoryLabel}`} className="h-full w-full object-cover" draggable={false} />
          ) : (
            <PlaceholderSide side="after" />
          )}
        </div>

        {/* Divider line */}
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          style={{ left: `${position}%` }}
        />

        {/* Drag handle */}
        <div
          className="pointer-events-none absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${position}%` }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_6px_20px_rgba(74,55,40,0.22)]">
            <ChevronsLeftRight size={18} strokeWidth={2} className="text-brand-dark" />
          </div>
        </div>

        {/* Corner labels */}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-brand-dark/65 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          Antes
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-white/80 px-3 py-1 text-[0.62rem] font-medium uppercase tracking-[0.18em] text-brand-dark backdrop-blur-sm">
          Después
        </span>
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-brown">
            {categoryLabel}
          </p>
          <p className="mt-0.5 font-display text-lg font-light text-brand-dark">
            {caso.label}
          </p>
          {caso.note && (
            <p className="mt-0.5 text-xs font-light text-muted">{caso.note}</p>
          )}
        </div>
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-brown/25 text-brand-brown">
          <ChevronsLeftRight size={14} strokeWidth={1.8} />
        </span>
      </div>
    </article>
  );
}

export default function BeforeAfter() {
  const [activeCategory, setActiveCategory] = useState(beforeAfterCategories[0].id);

  const currentCases = beforeAfterCases[activeCategory] ?? [];
  const currentLabel = beforeAfterCategories.find((c) => c.id === activeCategory)?.label ?? '';

  return (
    <section id="galeria" className="bg-[#FDFAF5] py-24">
      <div className="section-shell">

        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-muted">
              Galería de casos
            </p>
            <h2 className="serif-balance font-display text-4xl font-light leading-tight text-brand-dark md:text-6xl">
              Transformaciones que hablan por sí solas
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="lg:ml-auto lg:max-w-xl">
            <p className="body-balance text-lg font-light leading-8 text-muted">
              Arrastra el divisor para comparar cada caso real. Resultados planificados con criterio
              clínico, honestidad y atención al detalle.
            </p>
          </motion.div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 flex flex-wrap gap-2"
        >
          {beforeAfterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                activeCategory === cat.id
                  ? 'bg-brand-dark text-white shadow-[0_8px_20px_rgba(74,55,40,0.18)]'
                  : 'border border-brand-brown/25 bg-white text-brand-dark hover:border-brand-brown hover:bg-brand-cream'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Cases grid */}
        <motion.div
          key={activeCategory}
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {currentCases.map((caso) => (
            <motion.div key={caso.id} variants={fadeUp}>
              <SliderCard caso={caso} categoryLabel={currentLabel} />
            </motion.div>
          ))}
        </motion.div>

        {/* Coming soon notice */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex flex-col items-center gap-4 rounded-[1.25rem] border border-brand-brown/20 bg-brand-cream/60 px-8 py-8 text-center"
        >
          <ImageOff size={28} strokeWidth={1.3} className="text-brand-brown/50" />
          <div>
            <p className="font-display text-2xl font-light text-brand-dark">
              Galería en construcción
            </p>
            <p className="mt-2 text-sm font-light leading-7 text-muted">
              Pronto encontrarás aquí casos reales de nuestros pacientes. Mientras tanto,
              puedes ver nuestro trabajo en Instagram.
            </p>
          </div>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex items-center gap-2 rounded-full border border-brand-brown/30 bg-white px-6 py-3 text-sm font-medium text-brand-dark transition hover:border-brand-brown hover:bg-brand-cream"
          >
            Ver casos en Instagram
          </a>
        </motion.div>

      </div>
    </section>
  );
}
