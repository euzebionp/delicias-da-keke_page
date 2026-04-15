import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import CarCard from '../components/CarCard';

export default function InventoryPage({
  cars,
  searchQuery,
  setSearchQuery,
  priceFilter,
  setPriceFilter,
  navigateTo,
}) {
  const precoFormatado = priceFilter.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  });

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* ── Banner da Página ── */}
      <div className="bg-[#111] border-b border-white/10 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="section-title">Estoque</p>
          <h1 className="text-white font-black uppercase text-2xl sm:text-3xl">
            Encontre seu Veículo
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Sidebar de Filtros ── */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-[#111] border border-white/10 rounded-lg p-6 space-y-8 sticky top-40">
              <div className="flex items-center gap-2 text-white font-black uppercase text-sm">
                <SlidersHorizontal size={16} className="text-[#e3262e]" />
                Filtros
              </div>

              {/* Filtro por Preço */}
              <div>
                <h3 className="text-white/70 text-xs font-bold uppercase tracking-widest mb-4">
                  Preço máximo
                </h3>
                <input
                  id="filtro-preco"
                  type="range"
                  min="100000"
                  max="300000"
                  step="5000"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-red"
                />
                <div className="flex justify-between mt-2 text-xs font-bold text-white/60">
                  <span>R$ 100.000</span>
                  <span className="text-[#e3262e]">{precoFormatado}</span>
                </div>
              </div>

              {/* Combustível */}
              <div>
                <h3 className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
                  Combustível
                </h3>
                {['Diesel', 'Gasolina', 'Etanol', 'Híbrido', 'Elétrico'].map((tipo) => (
                  <label key={tipo} className="flex items-center gap-3 mb-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded accent-red border-white/20"
                    />
                    <span className="text-white/60 group-hover:text-white text-sm transition-colors">
                      {tipo}
                    </span>
                  </label>
                ))}
              </div>

              {/* Câmbio */}
              <div>
                <h3 className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
                  Câmbio
                </h3>
                {['Automático', 'Manual', 'CVT', 'DSG / S-Tronic'].map((cambio) => (
                  <label key={cambio} className="flex items-center gap-3 mb-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded accent-red"
                    />
                    <span className="text-white/60 group-hover:text-white text-sm transition-colors">
                      {cambio}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* ── Conteúdo Principal ── */}
          <div className="flex-1">
            {/* Barra de Pesquisa */}
            <div className="relative mb-6">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                size={18}
              />
              <input
                id="busca-veiculo"
                type="text"
                placeholder="Pesquise por marca ou modelo..."
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-[#111] border border-white/10 text-white placeholder-white/30 focus:border-[#e3262e] focus:outline-none transition-colors"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Cabeçalho dos Resultados */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-white/50 text-sm">
                <span className="text-[#e3262e] font-black">{cars.length}</span>{' '}
                {cars.length === 1 ? 'veículo encontrado' : 'veículos encontrados'}
              </p>
              <select
                id="ordenar-veiculos"
                className="bg-[#111] border border-white/10 text-white/70 text-sm px-3 py-2 rounded outline-none cursor-pointer"
              >
                <option>Mais recentes</option>
                <option>Menor preço</option>
                <option>Maior preço</option>
                <option>Menor quilometragem</option>
              </select>
            </div>

            {/* Grid de Veículos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {cars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onClick={() => navigateTo('details', car)}
                />
              ))}

              {cars.length === 0 && (
                <div className="col-span-full py-24 text-center">
                  <div className="bg-white/5 inline-block p-6 rounded-full mb-4">
                    <Search size={40} className="text-white/20" />
                  </div>
                  <h3 className="text-white font-black uppercase text-xl mb-2">
                    Nenhum veículo encontrado
                  </h3>
                  <p className="text-white/40 text-sm">
                    Ajuste os filtros ou{' '}
                    <a
                      href="https://wa.me/5534998632929"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#e3262e] font-bold hover:underline"
                    >
                      fale conosco
                    </a>{' '}
                    para buscarmos o veículo ideal para você.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
