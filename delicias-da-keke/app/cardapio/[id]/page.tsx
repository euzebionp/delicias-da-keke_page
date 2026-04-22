import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft, Tag, Users, MessageCircle } from 'lucide-react';
import { MOCK_BOLOS } from '@/data/bolos';

interface Props { params: { id: string } }

export async function generateStaticParams() {
  return MOCK_BOLOS.map((b) => ({ id: String(b.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const bolo = MOCK_BOLOS.find((b) => b.id === Number(params.id));
  if (!bolo) return { title: 'Bolo não encontrado' };
  return {
    title: `${bolo.nome} | Delícias da KEKE`,
    description: bolo.descricao,
  };
}

export default function DetalhesBolo({ params }: Props) {
  const bolo = MOCK_BOLOS.find((b) => b.id === Number(params.id));
  if (!bolo) notFound();

  const relacionados = MOCK_BOLOS.filter(
    (b) => b.id !== bolo.id && b.categoria === bolo.categoria
  ).slice(0, 3);

  const whatsappMsg = encodeURIComponent(
    `Olá KEKE! Tenho interesse no bolo "${bolo.nome}". Podem me dar mais informações?`
  );

  return (
    <div className="min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Voltar */}
        <Link
          href="/cardapio"
          className="inline-flex items-center gap-2 text-muted hover:text-white font-body text-sm mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Voltar ao Cardápio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Imagem */}
          <div className="relative h-80 sm:h-[500px] rounded-3xl overflow-hidden">
            <Image
              src={bolo.imagem}
              alt={bolo.nome}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 to-transparent" />
            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              {bolo.categoria}
            </span>
          </div>

          {/* Detalhes */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="font-display text-4xl font-black text-white leading-tight mb-3">
                {bolo.nome}
              </h1>
              <p className="text-white/60 font-body leading-relaxed">
                {bolo.descricao}
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-muted text-sm font-body">
                <Tag size={14} className="text-primary" />
                <span><strong className="text-white">Recheio:</strong> {bolo.recheio}</span>
              </div>
              <div className="flex items-center gap-2 text-muted text-sm font-body">
                <span>🎂</span>
                <span><strong className="text-white">Cobertura:</strong> {bolo.cobertura}</span>
              </div>
            </div>

            {/* Tamanhos & Preços */}
            <div>
              <p className="text-white font-body font-bold uppercase tracking-widest text-xs mb-3">Tamanhos & Preços</p>
              <div className="space-y-2">
                {bolo.tamanhos.map((t) => (
                  <div
                    key={t.porcoes}
                    className="flex items-center justify-between bg-bg-card border border-white/5 rounded-xl px-5 py-3 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-white/70 font-body text-sm">
                      <Users size={14} className="text-primary" />
                      {t.porcoes}
                    </div>
                    <span className="text-primary font-display font-bold text-lg">
                      R$ {t.preco.toLocaleString('pt-BR')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {bolo.tags.map((tag) => (
                <span key={tag} className="bg-primary/10 border border-primary/20 text-primary text-xs font-body px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              id="detalhe-encomendar-whatsapp"
              href={`https://wa.me/5534998646116?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
            >
              <MessageCircle size={18} />
              Encomendar este Bolo
            </a>

            <p className="text-white/30 text-xs font-body text-center">
              ⏱ Encomendas com mínimo 72h de antecedência
            </p>
          </div>
        </div>

        {/* Relacionados */}
        {relacionados.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl font-bold text-white mb-6">
              Você também pode gostar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relacionados.map((b) => (
                // Import BoloCard here won't work in server component without extracting
                <Link key={b.id} href={`/cardapio/${b.id}`} className="group bg-bg-card border border-white/5 hover:border-primary/30 rounded-2xl overflow-hidden transition-all hover:-translate-y-1">
                  <div className="relative h-44">
                    <Image src={b.imagem} alt={b.nome} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-white font-bold">{b.nome}</h3>
                    <p className="text-primary font-display font-bold mt-1">R$ {b.preco.toLocaleString('pt-BR')}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
