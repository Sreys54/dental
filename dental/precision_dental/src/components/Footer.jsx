import { brand } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="bg-[#1A0F08] py-8 text-white">
      <div className="section-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo de Precisión Dental"
            className="h-8 w-8 rounded-full bg-white object-cover p-1"
          />
          <p className="font-display text-xl font-light">
            {brand.name} © 2025
          </p>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/48">
          Bogotá, Colombia · {brand.address}
        </p>
      </div>
    </footer>
  );
}
