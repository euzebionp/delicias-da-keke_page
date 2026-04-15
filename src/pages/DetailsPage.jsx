import React, { useState, useMemo } from 'react';
import {
  ArrowRight,
  MessageCircle,
  Fuel,
  Gauge,
  Calendar,
  Info,
  Calculator,
  Phone,
  CheckCircle,
} from 'lucide-react';

export default function DetailsPage({ car, navigateTo }) {
  const [meses, setMeses] = useState(60);
  const [entrada, setEntrada] = useState(10000);

  const parcelaMensal = useMemo(() => {
    const principal = car.price - entrada;
    if (principal <= 0) return 0;
    const taxa = 0.0189;
    return (principal * taxa) / (1 - Math.pow(1 + taxa, -meses));
  }, [car.price, entrada, meses]);

  const fmt = (val, opts = {}) =>
    val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0, ...opts });

  const precoFormatado    = fmt(car.price);
  const entradaFormatada  = fmt(entrada);
  const parcelaFormatada  = fmt(parcelaMensal, { minimumFractionDigits: 2 });
  const entradaMaxima     = Math.floor(car.price * 0.5);

  const specs = [
    { icon: <Calendar size={16} />, label: 'Ano',        value: car.year },
    { icon: <Gauge size={16} />,    label: 'Câmbio',     value: car.transmission },
    { icon: <Fuel size={16} />,     label: 'Combustível',value: car.fuel },
    { icon: <Info size={16} />,     label: 'Motor',      value: car.engine },
    { icon: <CheckCircle size={16} />, label: 'Potência', value: car.power },
    { icon: <CheckCircle size={16} />, label: 'Cor',     value: car.color },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* ── Banner ── */}
      <div className="bg-[#111] border-b border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <button
            id="btn-voltar-estoque"
            onClick={() => navigateTo('inventory')}
            className="flex items-center gap-1.5 text-white/50 hover:text-[#e3262e] transition-colors text-sm font-bold uppercase tracking-wide"
          >
            <ArrowRight className="rotate-180" size={16} /> Estoque
          </button>
          <span className="text-white/20">/</span>
          <span className="text-white/70 text-sm font-bold uppercase">
            {car.brand} {car.model}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* ── Galeria ── */}
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden aspect-video bg-[#111]">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden aspect-square bg-[#111] border border-white/10 hover:border-[#e3262e] cursor-pointer transition-colors"
                />
              ))}
            </div>
          </div>

          {/* ── Informações ── */}
          <div>
            {/* Título */}
            <div className="mb-2 flex items-center gap-3">
              <span className="bg-[#e3262e] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded">
                {car.year}
              </span>
              <span className="text-white/40 text-xs uppercase font-bold">
                {car.km.toLocaleString('pt-BR')} km
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white uppercase mb-2">
              {car.brand} {car.model}
            </h1>
            <p className="text-[#e3262e] font-black text-3xl mb-6">{precoFormatado}</p>

            {/* Especificações */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {specs.map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="bg-[#111] border border-white/10 rounded-lg p-4"
                >
                  <div className="flex items-center gap-1.5 text-[#e3262e] mb-1">
                    {icon}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                      {label}
                    </span>
                  </div>
                  <p className="text-white font-bold text-sm">{value}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                id="btn-solicitar-proposta"
                href={`https://wa.me/5534998632929?text=Olá! Tenho interesse no ${car.brand} ${car.model} ${car.year}. Poderia me enviar mais informações?`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#e3262e] hover:bg-red-700 text-white font-black uppercase tracking-widest py-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> Solicitar Proposta pelo WhatsApp
              </a>
              <a
                href="tel:34998632929"
                className="w-full bg-[#111] border border-white/10 hover:border-[#e3262e] text-white font-bold uppercase tracking-wide py-4 rounded transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={18} /> (34) 99863-2929
              </a>
            </div>

            {/* Simulador */}
            <div className="bg-[#111] border border-white/10 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-6 text-[#e3262e]">
                <Calculator size={18} />
                <h3 className="font-black uppercase tracking-wide text-sm">
                  Simulador de Financiamento
                </h3>
              </div>

              <div className="space-y-5">
                {/* Entrada */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60 font-medium">Valor de Entrada</span>
                    <span className="text-white font-black">{entradaFormatada}</span>
                  </div>
                  <input
                    id="simulador-entrada"
                    type="range"
                    min="0"
                    max={entradaMaxima}
                    step="1000"
                    value={entrada}
                    onChange={(e) => setEntrada(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-red"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 mt-1">
                    <span>R$ 0</span>
                    <span>{fmt(entradaMaxima)}</span>
                  </div>
                </div>

                {/* Prazo */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60 font-medium">Prazo</span>
                    <span className="text-white font-black">{meses} meses</span>
                  </div>
                  <select
                    id="simulador-prazo"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded text-white text-sm p-2.5 outline-none"
                    value={meses}
                    onChange={(e) => setMeses(parseInt(e.target.value))}
                  >
                    {[12, 24, 36, 48, 60, 72].map((m) => (
                      <option key={m} value={m}>{m} meses</option>
                    ))}
                  </select>
                </div>

                {/* Resultado */}
                <div className="border-t border-white/10 pt-5 text-center">
                  <p className="text-white/40 text-xs mb-1 uppercase tracking-wider">
                    Parcela Mensal Estimada
                  </p>
                  <p className="text-[#e3262e] font-black text-4xl">{parcelaFormatada}</p>
                  <p className="text-[10px] text-white/30 mt-3 leading-relaxed">
                    Simulação sem compromisso, sujeita à aprovação de crédito. CET variável conforme
                    perfil do cliente e instituição financeira parceira.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Descrição ── */}
        <div className="mt-16 pb-10 max-w-3xl">
          <p className="section-title">Descrição do Veículo</p>
          <p className="text-white/60 leading-relaxed text-base whitespace-pre-line">
            {car.description}
            {'\n\n'}
            Equipamentos de série e opcionais principais:{'\n'}
            • Pacote Esportivo Exterior/Interior{'\n'}
            • Sistema de Navegação GPS Integrado{'\n'}
            • Sensores de Estacionamento 360°{'\n'}
            • Controle de Cruzeiro Adaptativo{'\n'}
            • Painel Digital Interativo
          </p>
        </div>
      </div>
    </div>
  );
}
