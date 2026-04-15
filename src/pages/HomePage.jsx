import React from 'react';
import { ShieldCheck, Calculator, Gauge, ArrowRight, ChevronRight } from 'lucide-react';
import { MOCK_CARS } from '../data/cars';
import CarCard from '../components/CarCard';

export default function HomePage({ navigateTo }) {
  return (
    <div className="animate-in fade-in">

      {/* ── Hero ── */}
      <section className="relative h-[90vh] min-h-[540px] flex items-end overflow-hidden bg-black">
        {/* Imagem de fundo */}
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1800"
          alt="Veículo Premium"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        {/* Gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          {/* Slogan */}
          <p className="text-white/60 text-xs sm:text-sm font-bold uppercase tracking-[.25em] mb-3">
            Compra · Vende · Troca · Financia
          </p>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase leading-none mb-6">
            Encontre seu{' '}
            <span className="text-[#e3262e]">veículo</span>
            <br />ideal aqui.
          </h1>

          <p className="text-white/70 text-base sm:text-lg max-w-xl mb-8">
            Veículos seminovos certificados, com garantia e prontos para entrega.
            Junto com você na realização do seu sonho.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              id="hero-ver-estoque"
              onClick={() => navigateTo('inventory')}
              className="bg-[#e3262e] hover:bg-red-700 text-white font-black uppercase tracking-widest px-8 py-4 rounded transition-colors flex items-center justify-center gap-2"
            >
              Ver Estoque <ChevronRight size={18} />
            </button>
            <a
              id="hero-whatsapp"
              href="https://wa.me/5534998632929?text=Olá! Gostaria de saber mais sobre os veículos."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-black uppercase tracking-widest px-8 py-4 rounded hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Busca Rápida ── */}
      <section className="bg-[#e3262e] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4">
          <p className="text-white font-black uppercase tracking-widest text-sm shrink-0">
            Encontre seu veículo:
          </p>
          <button
            onClick={() => navigateTo('inventory')}
            className="w-full sm:w-auto bg-black text-white font-bold uppercase tracking-wider px-6 py-3 rounded hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
          >
            Ver todos os veículos <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ── Diferenciais ── */}
      <section className="bg-[#111] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-title">Por que nos escolher?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <ShieldCheck size={32} />,
                title: 'Garantia Certificada',
                text: 'Todos os veículos passam por inspeção de 150 pontos e incluem garantia total.',
              },
              {
                icon: <Calculator size={32} />,
                title: 'Financiamento 100%',
                text: 'Aprovação rápida com as melhores taxas do mercado. Sem burocracia.',
              },
              {
                icon: <Gauge size={32} />,
                title: 'Entrega Rápida',
                text: 'Veículo pronto para circular em menos de 24 horas após o fechamento.',
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                className="border border-white/10 rounded-lg p-8 hover:border-[#e3262e] transition-colors group"
              >
                <div className="text-[#e3262e] mb-5">{icon}</div>
                <h3 className="text-white font-black uppercase text-base mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Destaques da Semana ── */}
      <section className="bg-[#0a0a0a] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <p className="section-title">Destaques da Semana</p>
              <p className="text-white/50 text-sm">
                As melhores oportunidades selecionadas para você.
              </p>
            </div>
            <button
              id="destaques-ver-todos"
              onClick={() => navigateTo('inventory')}
              className="text-[#e3262e] font-bold uppercase text-xs tracking-wide flex items-center gap-1 hover:gap-2 transition-all"
            >
              Ver todos <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_CARS.slice(0, 4).map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onClick={() => navigateTo('details', car)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="bg-[#e3262e] py-16 px-4 text-center">
        <h2 className="text-white font-black uppercase text-2xl sm:text-3xl mb-3">
          Quer vender seu veículo?
        </h2>
        <p className="text-white/80 mb-8 max-w-lg mx-auto">
          Fazemos uma avaliação gratuita e sem compromisso. Fale com nossa equipe agora mesmo.
        </p>
        <a
          href="https://wa.me/5534998632929?text=Quero vender meu veículo. Podem fazer uma avaliação?"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black text-white font-black uppercase tracking-widest px-10 py-4 rounded hover:bg-gray-900 transition-colors"
        >
          Avaliar meu veículo
        </a>
      </section>

    </div>
  );
}
