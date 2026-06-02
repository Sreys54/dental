import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { brand, navLinks } from '../data/content.js';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);

      if (!isHome) {
        return;
      }

      const visibleSection = navLinks
        .map((link) => document.getElementById(link.section))
        .filter(Boolean)
        .find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        });

      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const activeKey = useMemo(() => {
    if (location.pathname === '/servicios') return 'servicios';
    if (location.pathname === '/nosotros') return 'nosotros';
    return activeSection;
  }, [activeSection, location.pathname]);

  const navClass = isScrolled || !isHome
    ? 'border-brand-brown/15 bg-white/82 shadow-[0_12px_35px_rgba(74,55,40,0.09)] backdrop-blur-xl'
    : 'border-transparent bg-transparent';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${navClass}`}>
      <nav className="section-shell flex h-20 items-center justify-between gap-6">
        <Link to="/#inicio" className="focus-ring flex min-w-0 items-center gap-3 rounded-full">
          <img
            src="/logo.png"
            alt="Logo de Precisión Dental"
            className="h-11 w-11 shrink-0 rounded-full bg-white object-cover p-1 shadow-[0_8px_24px_rgba(74,55,40,0.16)]"
          />
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-2xl font-light text-brand-dark">
              {brand.name}
            </span>
            <span className="mt-1 block truncate text-[0.62rem] font-medium uppercase tracking-[0.22em] text-muted">
              {brand.subtitle}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeKey === link.section;
            return (
              <Link
                key={link.label}
                to={`${link.path}${link.hash}`}
                className={`focus-ring relative rounded-full py-2 text-sm font-light text-brand-dark transition hover:text-[#6A4E38] ${
                  isActive ? 'after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-brand-brown' : ''
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-full bg-brand-dark px-5 py-3 text-sm font-medium text-white shadow-[0_10px_25px_rgba(74,55,40,0.18)] transition hover:-translate-y-0.5 hover:bg-[#6A4E38]"
          >
            Reservar cita
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-brown/25 bg-white/75 text-brand-dark shadow-[0_10px_25px_rgba(74,55,40,0.1)] lg:hidden"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-brand-cream/97 px-6 py-10 backdrop-blur-xl lg:hidden">
          <div className="section-shell flex h-full flex-col justify-between">
            <div className="grid gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={`${link.path}${link.hash}`}
                  className="focus-ring rounded-2xl py-2 font-display text-5xl font-light leading-none text-brand-dark"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-brand-dark px-6 py-4 text-sm font-medium text-white"
            >
              Reservar cita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
