'use client';
import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { MOCK_BOLOS, type Bolo } from '@/data/bolos';
import BoloCard from '@/components/BoloCard';

const categorias: Array<Bolo['categoria'] | 'Todos'> = ['Todos', 'Festa', 'Naked', 'Torta', 'Especial', 'Casamento'];

export default function CardapioPage() {
  const [search, setSearch] = useState('');
  const [categoria, setCategoria] = useState<Bolo['categoria'] | 'Todos'>('Todos');
  const [precoMax, setPrecoMax] = useState(1500);

  const filtrados = useMemo(() =>
    MOCK_BOLOS.filter((b) => {
      const matchSearch =
        b.nome.toLowerCase().includes(search.toLowerCase()) ||
        b.recheio.toLowerCase().includes(search.toLowerCase());
      const matchCat = categoria === 'Todos' || b.categoria === categoria;
      const matchPreco = b.preco <= precoMax;
      return matchSearch && matchCat && matchPreco;
    }), [search, categoria, precoMax]);

  return (
    <div className="min-h-screen animate-fade-in">

      {/* Header */}
      <div className="bg-bg-card2 border-b border-white/5 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Nossa Confeitaria</span>
          <h1 className="section-title">Cardápio Completo</h1>
          <p className="text-white/50 font-body text-sm max-w-xl">
            Escolha o bolo perfeito para o seu momento. Todos feitos com ingredientes frescos e muito amor.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Filtros */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Busca */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Buscar por nome ou recheio..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-bg-card border border-white/10 focus:border-primary/50 rounded-full pl-10 pr-4 py-3 text-white text-sm font-body placeholder:text-white/30 outline-none transition-colors"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Preço */}
          <div className="flex items-center gap-3 bg-bg-card border border-white/10 rounded-full px-5 py-3">
            <SlidersHorizontal size={14} className="text-primary shrink-0" />
            <span className="text-white/50 text-xs font-body shrink-0">Até</span>
            <input
              type="range"
              min={80}
              max={1500}
              step={20}
              value={precoMax}
              onChange={(e) => setPrecoMax(Number(e.target.value))}
              className="w-28 accent-primary"
            />
            <span className="text-primary font-body font-bold text-sm shrink-0 w-20">
              R$ {precoMax.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>

        {/* Tabs de categoria */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`text-xs font-body font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
                categoria === cat
                  ? 'bg-primary border-primary text-white'
                  : 'bg-transparent border-white/10 text-white/50 hover:border-primary/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resultado */}
        {filtrados.length > 0 ? (
          <>
            <p className="text-white/30 font-body text-xs mb-5">
              {filtrados.length} {filtrados.length === 1 ? 'bolo encontrado' : 'bolos encontrados'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtrados.map((bolo) => (
                <BoloCard key={bolo.id} bolo={bolo} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🎂</p>
            <p className="text-white/50 font-body">Nenhum bolo encontrado com esses filtros.</p>
            <button
              onClick={() => { setSearch(''); setCategoria('Todos'); setPrecoMax(1500); }}
              className="mt-4 text-primary font-body text-sm hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
