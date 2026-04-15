import React from 'react';
import { Phone, Menu, X, Facebook, Instagram } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início',         page: 'home' },
  { label: 'Estoque',        page: 'inventory' },
  { label: 'Nossa Loja',     page: 'store' },
  { label: 'Financiamento',  page: 'financing' },
  { label: 'Vender',         page: 'sell' },
];

export default function Navbar({ navigateTo, isMenuOpen, setIsMenuOpen, currentPage }) {
  const isActive = (page) => currentPage === page;

  return (
    <header className="sticky top-0 z-50">
      {/* ── Top Bar vermelha ── */}
      <div className="bg-[#e3262e] py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="tel:34998632929"
            className="flex items-center gap-1.5 text-white text-xs sm:text-sm font-semibold hover:text-white/80 transition-colors"
          >
            <Phone size={13} />
            <span>(34) 99863-2929</span>
          </a>
          <div className="flex items-center gap-3 text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              aria-label="Facebook" className="hover:text-white/70 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram" className="hover:text-white/70 transition-colors">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Header Principal ── */}
      <div className="bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <div
            id="logo-btn"
            className="cursor-pointer flex flex-col leading-none"
            onClick={() => navigateTo('home')}
          >
            <span className="text-white text-2xl sm:text-3xl font-black uppercase tracking-tight">
              Premium<span className="text-[#e3262e]">Motors</span>
            </span>
            <span className="text-white/40 text-[10px] uppercase tracking-widest font-medium mt-0.5">
              Junto com você na realização do seu sonho
            </span>
          </div>

          {/* Slogan Desktop (só em telas grandes) */}
          <p className="hidden xl:block text-white/60 font-black uppercase tracking-widest text-xs">
            Compra&nbsp;·&nbsp;Vende&nbsp;·&nbsp;Troca&nbsp;·&nbsp;Financia
          </p>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-black uppercase tracking-wide">
            {NAV_LINKS.map(({ label, page }) => (
              <button
                key={page}
                id={`nav-${page}`}
                onClick={() => navigateTo(page)}
                className={`px-3 py-2 rounded transition-colors ${
                  isActive(page)
                    ? 'text-[#e3262e] border-b-2 border-[#e3262e]'
                    : 'text-white/80 hover:text-[#e3262e]'
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href="tel:34998632929"
              id="nav-telefone"
              className="ml-3 flex items-center gap-1.5 bg-[#e3262e] text-white px-4 py-2 rounded font-black hover:bg-red-700 transition-colors"
            >
              <Phone size={14} /> Ligar
            </a>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            id="menu-toggle"
            className="md:hidden text-white p-2 flex items-center gap-2 font-bold text-sm uppercase"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            <span>Menu</span>
          </button>
        </div>
      </div>

      {/* ── Menu Mobile ── */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-white/10 slide-in-from-top">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, page }) => (
              <button
                key={page}
                id={`mobile-nav-${page}`}
                onClick={() => navigateTo(page)}
                className={`text-left font-black uppercase tracking-wide py-3 border-b border-white/10 transition-colors ${
                  isActive(page) ? 'text-[#e3262e]' : 'text-white hover:text-[#e3262e]'
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href="tel:34998632929"
              id="mobile-nav-telefone"
              className="mt-4 flex items-center justify-center gap-2 bg-[#e3262e] text-white p-3 rounded font-black uppercase tracking-widest"
            >
              <Phone size={18} /> Ligar Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
