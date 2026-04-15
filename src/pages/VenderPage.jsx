import React, { useState } from 'react';
import { Send, Car, User, Phone as PhoneIcon, MessageCircle, CheckCircle } from 'lucide-react';

const ANOS = Array.from({ length: 20 }, (_, i) => 2025 - i);
const KM_FAIXAS = [
  'Até 20.000 km',
  '20.001 – 50.000 km',
  '50.001 – 100.000 km',
  '100.001 – 150.000 km',
  'Acima de 150.000 km',
];
const CONDICOES = ['Excelente', 'Muito bom', 'Bom', 'Regular'];

export default function VenderPage() {
  const [form, setForm] = useState({
    nome: '', telefone: '', marca: '', modelo: '',
    ano: '', km: '', condicao: '', observacoes: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const texto =
      `Olá! Quero vender meu veículo:%0A` +
      `*Nome:* ${form.nome}%0A` +
      `*Telefone:* ${form.telefone}%0A` +
      `*Veículo:* ${form.marca} ${form.modelo} ${form.ano}%0A` +
      `*Km:* ${form.km}%0A` +
      `*Condição:* ${form.condicao}%0A` +
      `*Observações:* ${form.observacoes}`;
    window.open(`https://wa.me/5534998632929?text=${texto}`, '_blank');
    setEnviado(true);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Banner */}
      <div className="bg-[#111] border-b border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-title mx-auto w-fit">Vender</p>
          <h1 className="text-white font-black uppercase text-3xl sm:text-4xl mb-3">
            Venda seu Veículo
          </h1>
          <p className="text-white/50 max-w-lg mx-auto">
            Avaliação gratuita e sem compromisso. Pagamento rápido e seguro.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* ── Benefícios ── */}
        <div>
          <p className="section-title">Por que vender conosco?</p>

          {[
            { title: 'Avaliação Gratuita', desc: 'Fazemos uma vistoria completa do seu veículo sem nenhum custo.' },
            { title: 'Melhor Preço do Mercado', desc: 'Ofertamos o valor justo baseado em tabela FIPE e condições reais.' },
            { title: 'Pagamento na Hora', desc: 'Transferência ou PIX assim que o negócio for fechado.' },
            { title: 'Sem Burocracia', desc: 'Cuidamos de toda a documentação para você.' },
            { title: 'Troca Facilitada', desc: 'Use seu veículo como entrada em qualquer um do nosso estoque.' },
          ].map(({ title, desc }) => (
            <div key={title} className="flex items-start gap-4 mb-6">
              <div className="bg-[#e3262e] rounded p-1 mt-0.5 shrink-0">
                <CheckCircle size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white font-black uppercase text-sm mb-1">{title}</p>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}

          {/* CTA WhatsApp direto */}
          <a
            href="https://wa.me/5534998632929?text=Olá! Quero vender meu veículo e gostaria de fazer uma avaliação."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-black uppercase tracking-widest px-6 py-4 rounded transition-colors"
          >
            <MessageCircle size={18} /> Falar pelo WhatsApp
          </a>
        </div>

        {/* ── Formulário ── */}
        <div className="bg-[#111] border border-white/10 rounded-lg p-8">
          {!enviado ? (
            <>
              <p className="text-white font-black uppercase text-lg mb-6 flex items-center gap-2">
                <Car size={20} className="text-[#e3262e]" /> Dados do Veículo
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Dados pessoais */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label">Seu nome *</label>
                    <div className="relative">
                      <User size={15} className="absolute left-3 top-3 text-white/30" />
                      <input
                        name="nome" required value={form.nome} onChange={handle}
                        placeholder="Nome completo"
                        className="input-dark pl-9 w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="field-label">Telefone / WhatsApp *</label>
                    <div className="relative">
                      <PhoneIcon size={15} className="absolute left-3 top-3 text-white/30" />
                      <input
                        name="telefone" required value={form.telefone} onChange={handle}
                        placeholder="(34) 9 0000-0000"
                        className="input-dark pl-9 w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Dados do veículo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label">Marca *</label>
                    <input
                      name="marca" required value={form.marca} onChange={handle}
                      placeholder="Ex: Chevrolet"
                      className="input-dark w-full"
                    />
                  </div>
                  <div>
                    <label className="field-label">Modelo *</label>
                    <input
                      name="modelo" required value={form.modelo} onChange={handle}
                      placeholder="Ex: Onix LT"
                      className="input-dark w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label">Ano *</label>
                    <select name="ano" required value={form.ano} onChange={handle} className="input-dark w-full">
                      <option value="">Selecione</option>
                      {ANOS.map(a => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="field-label">Quilometragem *</label>
                    <select name="km" required value={form.km} onChange={handle} className="input-dark w-full">
                      <option value="">Selecione</option>
                      {KM_FAIXAS.map(k => <option key={k} value={k}>{k}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="field-label">Condição geral *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {CONDICOES.map(c => (
                      <label key={c} className={`cursor-pointer border rounded px-3 py-2 text-xs font-bold uppercase text-center transition-colors ${form.condicao === c ? 'border-[#e3262e] bg-[#e3262e]/10 text-[#e3262e]' : 'border-white/10 text-white/50 hover:border-white/30'}`}>
                        <input type="radio" name="condicao" value={c} onChange={handle} className="hidden" />
                        {c}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="field-label">Observações (opcional)</label>
                  <textarea
                    name="observacoes" value={form.observacoes} onChange={handle}
                    rows={3}
                    placeholder="Descreva opcionais, histórico, etc."
                    className="input-dark w-full resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#e3262e] hover:bg-red-700 text-white font-black uppercase tracking-widest py-4 rounded transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} /> Solicitar Avaliação
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <CheckCircle size={56} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-white font-black uppercase text-xl mb-2">Solicitação Enviada!</h3>
              <p className="text-white/50">Nossa equipe entrará em contato em breve pelo WhatsApp para agendar a avaliação.</p>
              <button onClick={() => setEnviado(false)} className="mt-6 text-[#e3262e] font-bold text-sm hover:underline">
                Enviar outra avaliação
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Estilos utilitários locais via style tag */}
      <style>{`
        .field-label { display:block; color:rgba(255,255,255,.5); font-size:.7rem; font-weight:700; text-transform:uppercase; letter-spacing:.08em; margin-bottom:.4rem; }
        .input-dark { background:#0a0a0a; border:1px solid rgba(255,255,255,.1); border-radius:.375rem; color:#fff; padding:.62rem .75rem; font-size:.875rem; outline:none; transition:border-color .2s; }
        .input-dark:focus { border-color:#e3262e; }
        .input-dark option { background:#111; }
      `}</style>
    </div>
  );
}
