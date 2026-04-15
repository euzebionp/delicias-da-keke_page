import React from 'react';
import { Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const MENU_LINKS = [
  { label: 'Home',          page: 'home' },
  { label: 'Estoque',       page: 'inventory' },
  { label: 'Nossa Loja',    page: 'store' },
  { label: 'Financiamento', page: 'financing' },
  { label: 'Vender',        page: 'sell' },
  { label: 'Contato',       page: 'store' },
];

export default function Footer({ navigateTo }) {
  return (
    <footer className="bg-[#111111] text-white/70 mt-20">
      {/* ── Grid de informações ── */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Coluna 1 – Sobre */}
        <div>
          <p className="text-white text-2xl font-black uppercase tracking-tight mb-1">
            Premium<span className="text-[#e3262e]">Motors</span>
          </p>
          <p className="text-[#e3262e] text-xs font-bold uppercase tracking-widest mb-4">
            Junto com você na realização do seu sonho
          </p>
          <p className="text-sm leading-relaxed">
            Especialistas em veículos seminovos e usados de alta qualidade.
            Garantia certificada e financiamento facilitado.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-white/10 hover:bg-[#e3262e] transition-colors p-2 rounded"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-white/10 hover:bg-[#e3262e] transition-colors p-2 rounded"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        {/* Coluna 2 – Contato */}
        <div>
          <h4 className="section-title">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#e3262e] mt-0.5 shrink-0" />
              <div>
                <p>Avenida Governador Valadares, 1500</p>
                <p>Nova Ponte - MG - Brasil</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#e3262e] shrink-0" />
              <a
                href="tel:34998632929"
                className="hover:text-[#e3262e] transition-colors"
              >
                (34) 99863-2929
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={16} className="text-[#e3262e] shrink-0" />
              <div>
                <p>Seg a Sex: 09h às 18h</p>
                <p>Sábado: 09h às 13h</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Coluna 3 – Menu */}
        <div>
          <h4 className="section-title">Menu</h4>
          <ul className="space-y-2 text-sm font-semibold">
            {MENU_LINKS.map(({ label, page }) => (
              <li key={page + label}>
                <button
                  onClick={() => navigateTo?.(page)}
                  className="hover:text-[#e3262e] transition-colors uppercase tracking-wide"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Barra inferior ── */}
      <div className="bg-black py-4 px-4">
        <div className="max-w-7xl mx-auto text-center text-xs text-white/40">
          © 2026 Inforserviços Tecnologias - Premium Motors. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
