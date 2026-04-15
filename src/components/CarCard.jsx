import React from 'react';
import { Calendar, Gauge, Fuel, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CarCard({ car, onClick }) {
  const precoFormatado = car.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  });

  const kmFormatado = car.km.toLocaleString('pt-BR');

  return (
    <div
      className="car-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 cursor-pointer group flex flex-col"
      onClick={onClick}
      role="button"
      aria-label={`Ver detalhes do ${car.brand} ${car.model}`}
    >
      {/* Imagem */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-[#e3262e] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded">
            Novo no Estoque
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-5 flex flex-col flex-1 bg-white">
        {/* Título */}
        <h3 className="text-gray-900 font-black text-lg uppercase leading-tight tracking-tight mb-1">
          {car.brand} {car.model}
        </h3>

        {/* Preço */}
        <p className="text-[#e3262e] font-black text-2xl mb-4">{precoFormatado}</p>

        {/* Especificações */}
        <div className="grid grid-cols-2 gap-2 mb-5 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
            <Calendar size={13} className="text-[#e3262e]" /> {car.year}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
            <Gauge size={13} className="text-[#e3262e]" /> {kmFormatado} km
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
            <Fuel size={13} className="text-[#e3262e]" /> {car.fuel}
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold">
            <ShieldCheck size={13} className="text-[#e3262e]" /> Garantia
          </div>
        </div>

        {/* Botão CTA */}
        <button className="mt-auto w-full bg-[#e3262e] hover:bg-red-700 text-white font-black uppercase tracking-wider text-sm py-3 rounded transition-colors flex items-center justify-center gap-2">
          Ver Oferta <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
