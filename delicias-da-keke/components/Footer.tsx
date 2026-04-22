import Link from 'next/link';
import { Cake, MapPin, Clock, Phone, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-accent/20 border-t border-white/5 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cake size={24} className="text-primary" />
              <span className="font-display text-xl font-bold text-white">
                Delícias da <span className="text-primary">KEKE</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed font-body">
              Bolos artesanais feitos com amor e ingredientes selecionados. Cada encomenda é uma experiência única para adoçar seus momentos especiais.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 flex items-center justify-center text-white/60 hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/5534998646116"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 flex items-center justify-center text-white/60 hover:text-primary transition-all"
                aria-label="WhatsApp"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-body font-bold uppercase tracking-widest text-xs mb-5">Navegação</p>
            <ul className="space-y-3">
              {[
                { href: '/',               label: 'Início' },
                { href: '/cardapio',       label: 'Cardápio' },
                { href: '/encomendas',     label: 'Encomendas' },
                { href: '/como-funciona',  label: 'Como Funciona' },
                { href: '/sobre',          label: 'Sobre Nós' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-muted hover:text-primary font-body text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-body font-bold uppercase tracking-widest text-xs mb-5">Contato & Endereço</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted text-sm font-body leading-relaxed">
                  Alameda Jacarandas, 23<br />
                  Parque das Árvores
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a
                  href="https://wa.me/5534998646116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary text-sm font-body transition-colors"
                >
                  (34) 99864-6116
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted text-sm font-body leading-relaxed">
                  Seg–Sex: 08h às 18h<br />
                  Sáb: 08h às 14h<br />
                  <span className="text-primary/70">Encomendas com 72h de antecedência</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-body">
            © {new Date().getFullYear()} Infoserviços Tecnologias. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs font-body flex items-center gap-1">
            Feito com <Heart size={11} className="text-primary" /> e muito açúcar
          </p>
        </div>
      </div>
    </footer>
  );
}
