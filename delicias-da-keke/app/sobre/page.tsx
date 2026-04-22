import type { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Clock, Phone, Instagram, Heart, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a história da Delícias da KEKE, confeitaria artesanal localizada no Parque das Árvores.',
};

const valores = [
  { emoji: '🍓', title: 'Ingredientes Frescos', desc: 'Compramos diariamente para garantir a melhor qualidade.' },
  { emoji: '💝', title: 'Feito com Amor', desc: 'Cada detalhe é pensado para fazer seu momento especial.' },
  { emoji: '✨', title: 'Personalização Total', desc: 'Seu bolo, do jeito que você imaginou.' },
  { emoji: '🤝', title: 'Compromisso', desc: 'Pontualidade e cuidado são nossa marca registrada.' },
];

export default function SobrePage() {
  return (
    <div className="min-h-screen animate-fade-in">

      {/* Hero sobre */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1800"
          alt="Cozinha da Delícias da KEKE"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <span className="section-label">Nossa história</span>
          <h1 className="section-title text-4xl sm:text-5xl">Sobre a KEKE</h1>
        </div>
      </div>

      {/* História */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-80 rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1607478900766-efe13248b125?auto=format&fit=crop&q=80&w=800"
                alt="KEKE confeiteira"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/50 to-transparent" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-white text-3xl font-bold">
              Uma paixão que virou realidade
            </h2>
            <p className="text-white/65 font-body leading-relaxed">
              A Delícias da KEKE nasceu da paixão pela confeitaria artesanal. O que começou como um hobby de fim de semana rapidamente se transformou em um sonho real — e em bolos que encantam cada pessoa que experimenta.
            </p>
            <p className="text-white/65 font-body leading-relaxed">
              Cada encomenda é tratada com carinho especial. Acreditamos que um bolo não é só sobremesa — é uma memória, um abraço em formato de fatia, um pedaço de amor que fica guardado no coração.
            </p>
            <div className="flex items-center gap-2 mt-4">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={16} className="text-primary fill-primary" />
              ))}
              <span className="text-muted font-body text-sm ml-1">+200 clientes satisfeitos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-bg-card2 border-y border-white/5 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label block text-center">O que nos move</span>
            <h2 className="section-title text-center">Nossos Valores</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {valores.map(({ emoji, title, desc }) => (
              <div key={title} className="card-dark text-center hover:border-primary/20 transition-all group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{emoji}</div>
                <h3 className="font-display text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-white/50 font-body text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização & Contato */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mapa placeholder */}
          <div className="bg-bg-card border border-white/5 rounded-2xl overflow-hidden">
            <div className="h-56 relative">
              <Image
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=800"
                alt="Localização da loja"
                fill
                className="object-cover opacity-50"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-bg-dark/40 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-primary mx-auto mb-2" />
                  <p className="text-white font-body font-bold text-sm">Alameda Jacarandas, 23</p>
                  <p className="text-muted font-body text-xs">Parque das Árvores</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-body font-semibold text-sm">Endereço</p>
                  <p className="text-muted font-body text-sm">Alameda Jacarandas, 23 — Parque das Árvores</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-body font-semibold text-sm">Horário</p>
                  <p className="text-muted font-body text-sm">Seg–Sex: 08h às 18h</p>
                  <p className="text-muted font-body text-sm">Sábado: 08h às 14h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h2 className="font-display text-white text-2xl font-bold">Fale com a gente</h2>
            <p className="text-white/60 font-body text-sm leading-relaxed">
              Tem alguma dúvida ou quer encomendar diretamente? Entre em contato pelos canais abaixo.
            </p>

            <a
              href="https://wa.me/5534998646116?text=Olá KEKE!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-bg-card border border-white/5 hover:border-primary/30 rounded-xl px-5 py-4 transition-all group"
            >
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-white font-body font-bold text-sm">WhatsApp</p>
                <p className="text-muted font-body text-xs">(34) 99864-6116</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-bg-card border border-white/5 hover:border-primary/30 rounded-xl px-5 py-4 transition-all group"
            >
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Instagram size={18} />
              </span>
              <div>
                <p className="text-white font-body font-bold text-sm">Instagram</p>
                <p className="text-muted font-body text-xs">@deliciasdakeke</p>
              </div>
            </a>

            <div className="mt-6 bg-primary/10 border border-primary/20 rounded-xl px-5 py-4 flex items-start gap-3">
              <Heart size={16} className="text-primary mt-0.5 shrink-0" />
              <p className="text-white/70 font-body text-sm leading-relaxed">
                <strong className="text-white">Dica:</strong> Encomendas pelo WhatsApp têm confirmação mais rápida. Chama a gente!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
