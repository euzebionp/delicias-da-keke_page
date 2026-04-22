import Image from 'next/image';
import Link from 'next/link';
import { type Bolo } from '@/data/bolos';
import { Tag } from 'lucide-react';

const categoryColors: Record<Bolo['categoria'], string> = {
  Festa:    'bg-primary/20 text-primary border-primary/30',
  Naked:    'bg-amber-800/20 text-amber-400 border-amber-600/30',
  Torta:    'bg-rose-900/20 text-rose-300 border-rose-600/30',
  Especial: 'bg-purple-900/20 text-purple-300 border-purple-600/30',
  Casamento:'bg-pink-900/20 text-pink-300 border-pink-600/30',
};

export default function BoloCard({ bolo }: { bolo: Bolo }) {
  return (
    <Link
      href={`/cardapio/${bolo.id}`}
      className="group relative bg-bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
    >
      {/* Imagem */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={bolo.imagem}
          alt={bolo.nome}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Badge categoria */}
        <span
          className={`absolute top-3 left-3 text-[11px] font-body font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${categoryColors[bolo.categoria]}`}
        >
          {bolo.categoria}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-display text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">
          {bolo.nome}
        </h3>

        <div className="flex items-center gap-1.5 text-muted text-xs font-body">
          <Tag size={12} className="text-primary" />
          <span>{bolo.recheio}</span>
        </div>

        <p className="text-white/50 text-sm font-body leading-relaxed line-clamp-2 flex-1">
          {bolo.descricao}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
          <div>
            <p className="text-white/40 text-[10px] font-body uppercase tracking-wider">A partir de</p>
            <p className="text-primary font-display font-bold text-xl">
              R$ {bolo.preco.toLocaleString('pt-BR')}
            </p>
          </div>
          <span className="text-xs font-body font-bold text-primary group-hover:gap-2 uppercase tracking-wider flex items-center gap-1 transition-all">
            Ver detalhes →
          </span>
        </div>
      </div>
    </Link>
  );
}
