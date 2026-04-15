import React, { useState, useMemo } from 'react';
import { Calculator, CheckCircle, ChevronRight, Phone, MessageCircle } from 'lucide-react';

const BANCOS = [
  { nome: 'Banco do Brasil', taxa: '1,49% a.m.' },
  { nome: 'Itaú Unibanco',   taxa: '1,59% a.m.' },
  { nome: 'Bradesco',        taxa: '1,65% a.m.' },
  { nome: 'Caixa Econômica', taxa: '1,72% a.m.' },
  { nome: 'Santander',       taxa: '1,79% a.m.' },
  { nome: 'BV Financeira',   taxa: '1,89% a.m.' },
];

export default function FinanciamentoPage() {
  const [valor, setValor]   = useState(80000);
  const [entrada, setEntrada] = useState(15000);
  const [meses, setMeses]   = useState(60);

  const parcela = useMemo(() => {
    const principal = valor - entrada;
    if (principal <= 0) return 0;
    const taxa = 0.0189;
    return (principal * taxa) / (1 - Math.pow(1 + taxa, -meses));
  }, [valor, entrada, meses]);

  const fmt = (v, dec = 0) =>
    v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: dec });

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Banner */}
      <div className="bg-[#111] border-b border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-title mx-auto w-fit">Financiamento</p>
          <h1 className="text-white font-black uppercase text-3xl sm:text-4xl mb-3">
            Financie seu Veículo
          </h1>
          <p className="text-white/50 max-w-lg mx-auto">
            Parceria com os principais bancos do Brasil. Aprovação rápida e sem burocracia.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* ── Simulador ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {/* Controles */}
          <div className="lg:col-span-3 bg-[#111] border border-white/10 rounded-lg p-8">
            <div className="flex items-center gap-2 text-[#e3262e] mb-8">
              <Calculator size={20} />
              <h2 className="font-black uppercase tracking-wide text-sm">Simule sua parcela</h2>
            </div>

            <div className="space-y-7">
              {/* Valor do Veículo */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/60 font-medium">Valor do Veículo</span>
                  <span className="text-white font-black">{fmt(valor)}</span>
                </div>
                <input id="sim-valor" type="range" min="20000" max="300000" step="5000"
                  value={valor} onChange={e => setValor(+e.target.value)}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-white/30 mt-1">
                  <span>R$ 20.000</span><span>R$ 300.000</span>
                </div>
              </div>

              {/* Entrada */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/60 font-medium">Valor de Entrada</span>
                  <span className="text-white font-black">{fmt(entrada)}</span>
                </div>
                <input id="sim-entrada" type="range" min="0" max={Math.floor(valor * 0.7)} step="1000"
                  value={Math.min(entrada, Math.floor(valor * 0.7))}
                  onChange={e => setEntrada(+e.target.value)}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-white/30 mt-1">
                  <span>R$ 0</span><span>{fmt(Math.floor(valor * 0.7))}</span>
                </div>
              </div>

              {/* Prazo */}
              <div>
                <p className="text-white/60 text-sm font-medium mb-3">Prazo</p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {[12, 24, 36, 48, 60, 72].map(m => (
                    <button key={m} onClick={() => setMeses(m)}
                      className={`py-2 rounded text-sm font-black uppercase transition-colors ${meses === m ? 'bg-[#e3262e] text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
                    >
                      {m}x
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Resultado */}
          <div className="lg:col-span-2 bg-[#e3262e] rounded-lg p-8 flex flex-col justify-between">
            <div>
              <p className="text-white/80 font-bold uppercase text-xs tracking-widest mb-1">Parcela estimada em</p>
              <p className="text-white font-black text-5xl mb-1">{fmt(parcela, 2)}</p>
              <p className="text-white/70 text-xs">por mês · {meses} parcelas</p>
            </div>

            <div className="mt-8 space-y-3 border-t border-white/20 pt-6 text-sm">
              <div className="flex justify-between text-white/80">
                <span>Valor do veículo</span>
                <span className="font-bold">{fmt(valor)}</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Entrada</span>
                <span className="font-bold">{fmt(entrada)}</span>
              </div>
              <div className="flex justify-between text-white font-black border-t border-white/20 pt-3">
                <span>Financiado</span>
                <span>{fmt(valor - entrada)}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <a
                href="https://wa.me/5534998632929?text=Olá! Gostaria de simular um financiamento."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black hover:bg-gray-900 text-white font-black uppercase tracking-widest py-3 rounded transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle size={16} /> Solicitar via WhatsApp
              </a>
              <p className="text-[10px] text-white/50 leading-tight text-center">
                Simulação sem compromisso. Sujeito à análise e aprovação de crédito.
              </p>
            </div>
          </div>
        </div>

        {/* ── Como funciona ── */}
        <div className="mb-16">
          <p className="section-title">Como funciona?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Escolha o veículo', desc: 'Selecione o carro ideal no nosso estoque.' },
              { step: '02', title: 'Simule online',     desc: 'Use nosso simulador para ver as parcelas.' },
              { step: '03', title: 'Aprovação rápida',  desc: 'Enviamos sua proposta aos bancos parceiros.' },
              { step: '04', title: 'Retire o veículo',  desc: 'Documentação pronta e carro na sua mão.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-[#111] border border-white/10 rounded-lg p-6 hover:border-[#e3262e] transition-colors">
                <p className="text-[#e3262e] font-black text-4xl mb-4 leading-none">{step}</p>
                <h3 className="text-white font-black uppercase text-sm mb-2">{title}</h3>
                <p className="text-white/50 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bancos parceiros ── */}
        <div className="mb-16">
          <p className="section-title">Bancos Parceiros</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {BANCOS.map(({ nome, taxa }) => (
              <div key={nome} className="bg-[#111] border border-white/10 rounded-lg p-5 text-center hover:border-[#e3262e] transition-colors">
                <p className="text-white font-black text-sm mb-1 leading-tight">{nome}</p>
                <p className="text-[#e3262e] text-xs font-bold">{taxa}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Benefícios ── */}
        <div className="bg-[#111] border border-white/10 rounded-lg p-8">
          <p className="section-title">Vantagens do nosso financiamento</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Aprovação em até 24 horas',
              'Parcelamento em até 72 meses',
              'Entrada a partir de 10%',
              'Financiamento para negativados (consulte)',
              'Sem taxa de cadastro',
              'Atendimento personalizado',
            ].map(item => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-[#e3262e] shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="tel:34998632929"
              className="flex items-center justify-center gap-2 bg-[#e3262e] hover:bg-red-700 text-white font-black uppercase tracking-widest px-6 py-4 rounded transition-colors text-sm"
            >
              <Phone size={16} /> (34) 99863-2929
            </a>
            <a href="https://wa.me/5534998632929?text=Quero fazer um financiamento."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-[#e3262e] text-white font-bold uppercase tracking-widest px-6 py-4 rounded transition-colors text-sm"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>

      </div>

      <style>{`
        input[type='range']::-webkit-slider-thumb { background:#e3262e; }
        input[type='range']::-moz-range-thumb { background:#e3262e; }
      `}</style>
    </div>
  );
}
