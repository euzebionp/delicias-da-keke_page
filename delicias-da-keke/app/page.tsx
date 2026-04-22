import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { MOCK_BOLOS } from '@/data/bolos';
import BoloCard from '@/components/BoloCard';

export const metadata: Metadata = {
  title: 'Delícias da KEKE — Bolos Artesanais & Confeitaria',
  description: 'Bolos artesanais personalizados, tortas e doces feitos com amor. Encomende agora!',
};

const diferenciais = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Ingredientes Frescos',
    text: 'Usamos apenas ingredientes frescos e selecionados, sem conservantes. Qualidade em cada camada.',
  },
  {
    icon: <Sparkles size={32} />,
    title: '100% Personalizado',
    text: 'Cada bolo é único. Escolha recheio, cobertura, decoração e tamanho p/ o seu evento.',
  },
  {
    icon: <Truck size={32} />,
    title: 'Entrega & Retirada',
    text: 'Retire em nossa loja ou receba em casa. Entregamos com cuidado para o seu bolo chegar perfeito.',
  },
];

const categorias = ['Aniversário', 'Casamento', 'Bodas', 'Infantil', 'Corporativo'];

export default function HomePage() {
  const destaques = MOCK_BOLOS.filter((b) => b.destaque).slice(0, 4);

  return (
    <div className="animate-fade-in">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=1800"
          alt="Bolo artesanal Delícias da KEKE"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        {/* Gradiente quente */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 w-full animate-slide-up">
          <span className="section-label">Bolos Artesanais · Tortas · Doces · Encomendas</span>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-white leading-none mb-6">
            Adoce seus<br />
            <span className="text-primary">momentos</span>{' '}
            especiais
          </h1>

          <p className="text-white/70 font-body text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
            Cada bolo é uma obra de arte feita com amor, ingredientes frescos e muito carinho. Peça o seu e surpreenda quem você ama.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/cardapio" id="hero-ver-cardapio" className="btn-primary">
              Ver Cardápio <ChevronRight size={18} />
            </Link>
            <a
              id="hero-whatsapp"
              href="https://wa.me/5534998646116?text=Olá! Gostaria de fazer uma encomenda de bolo."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Fazer Encomenda
            </a>
          </div>
        </div>
      </section>

      {/* ── Categorias ── */}
      <section className="bg-primary py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 justify-between">
          <p className="text-white font-body font-black uppercase tracking-widest text-sm shrink-0">
            Ocasiões:
          </p>
          <div className="flex flex-wrap gap-2">
            {categorias.map((cat) => (
              <Link
                key={cat}
                href={`/cardapio`}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-body font-semibold px-4 py-1.5 rounded-full transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
          <Link
            href="/cardapio"
            className="shrink-0 bg-bg-dark text-white font-body font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-full hover:bg-black transition-colors flex items-center gap-2"
          >
            Ver tudo <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── Diferenciais ── */}
      <section className="bg-bg-card2 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label block text-center">Por que nos escolher?</span>
            <h2 className="section-title text-center">Feito com amor, entregue com cuidado</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diferenciais.map(({ icon, title, text }) => (
              <div
                key={title}
                className="card-dark hover:border-primary/30 transition-all group text-center"
              >
                <div className="text-primary mb-5 flex justify-center group-hover:scale-110 transition-transform">
                  {icon}
                </div>
                <h3 className="font-display text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-white/55 font-body text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Destaques ── */}
      <section className="bg-bg-dark py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="section-label">Nossos Favoritos</span>
              <h2 className="section-title">Bolos em Destaque</h2>
              <p className="text-white/50 font-body text-sm">
                Selecionados com carinho para você.
              </p>
            </div>
            <Link
              id="destaques-ver-todos"
              href="/cardapio"
              className="text-primary font-body font-bold uppercase text-xs tracking-wide flex items-center gap-1 hover:gap-2 transition-all"
            >
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destaques.map((bolo) => (
              <BoloCard key={bolo.id} bolo={bolo} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden bg-primary py-20 px-4 text-center">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display text-white font-black text-3xl sm:text-4xl mb-4">
            Quer um bolo personalizado?
          </h2>
          <p className="text-white/80 font-body mb-8 text-lg">
            Conte-nos sobre seu evento e criaremos o bolo dos seus sonhos. Encomendas com 72h de antecedência.
          </p>
          <a
            id="cta-encomenda-whatsapp"
            href="https://wa.me/5534998646116?text=Olá! Quero um bolo personalizado. Podem me ajudar?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-bg-dark text-white font-body font-black uppercase tracking-widest px-10 py-4 rounded-full hover:bg-black transition-colors"
          >
            Encomende pelo WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
