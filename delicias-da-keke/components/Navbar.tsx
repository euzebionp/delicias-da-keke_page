'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Cake } from 'lucide-react';

const links = [
  { href: '/cardapio',       label: 'Cardápio' },
  { href: '/encomendas',     label: 'Encomendas' },
  { href: '/como-funciona',  label: 'Como Funciona' },
  { href: '/sobre',          label: 'Sobre Nós' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-bg-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="text-primary group-hover:animate-float transition-all">
            <Cake size={26} />
          </span>
          <span className="font-display text-xl font-bold text-white leading-tight">
            Delícias da <span className="text-primary">KEKE</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-body font-semibold uppercase tracking-widest transition-colors ${
                pathname === href
                  ? 'text-primary'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/5534998646116?text=Olá! Gostaria de fazer uma encomenda."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-dark text-white font-body font-bold uppercase tracking-widest text-xs px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            Encomendar via WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/80 hover:text-white transition-colors"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bg-dark border-t border-white/5 animate-fade-in">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`font-body font-semibold uppercase tracking-widest text-sm transition-colors ${
                  pathname === href ? 'text-primary' : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="https://wa.me/5534998646116?text=Olá! Gostaria de fazer uma encomenda."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="bg-primary text-white font-body font-bold uppercase tracking-widest text-xs px-5 py-3 rounded-full text-center transition-all"
            >
              Encomendar via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
