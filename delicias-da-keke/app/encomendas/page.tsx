'use client';
import { useState } from 'react';
import type { Metadata } from 'next';
import { Send, Calendar, Clock, CheckCircle2 } from 'lucide-react';

export default function EncomendasPage() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    nome: '', whatsapp: '', evento: '', data: '',
    tamanho: '', recheio: '', cobertura: '', decoracao: '', obs: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `🎂 *Nova Encomenda — Delícias da KEKE*\n\n` +
      `👤 *Nome:* ${form.nome}\n📱 *WhatsApp:* ${form.whatsapp}\n` +
      `🎉 *Evento:* ${form.evento}\n📅 *Data:* ${form.data}\n` +
      `📏 *Tamanho:* ${form.tamanho}\n🍫 *Recheio:* ${form.recheio}\n` +
      `🎨 *Cobertura:* ${form.cobertura}\n✨ *Decoração:* ${form.decoracao}\n` +
      `📝 *Obs:* ${form.obs}`
    );
    window.open(`https://wa.me/5534998646116?text=${msg}`, '_blank');
    setEnviado(true);
  };

  const inputClass = "w-full bg-bg-card border border-white/10 focus:border-primary/50 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/30 outline-none transition-colors";
  const labelClass = "block text-white/60 font-body text-xs font-semibold uppercase tracking-wider mb-1.5";

  return (
    <div className="min-h-screen animate-fade-in">

      {/* Header */}
      <div className="bg-bg-card2 border-b border-white/5 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Personalize seu bolo</span>
          <h1 className="section-title">Fazer Encomenda</h1>
          <p className="text-white/50 font-body text-sm max-w-xl">
            Preencha o formulário abaixo e entraremos em contato pelo WhatsApp para confirmar todos os detalhes.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Alertas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {[
            { icon: <Clock size={16} />, text: 'Mínimo 72h de antecedência' },
            { icon: <Calendar size={16} />, text: 'Retirada ou entrega combinada' },
            { icon: <CheckCircle2 size={16} />, text: 'Confirmação via WhatsApp' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl px-4 py-3">
              <span className="text-primary">{icon}</span>
              <span className="text-white/70 font-body text-sm">{text}</span>
            </div>
          ))}
        </div>

        {enviado ? (
          <div className="text-center py-16 animate-slide-up">
            <div className="text-6xl mb-4">🎂</div>
            <h2 className="font-display text-white text-3xl font-bold mb-3">Encomenda Enviada!</h2>
            <p className="text-white/60 font-body mb-6">
              Você foi redirecionado para o WhatsApp. Aguarde a confirmação da KEKE!
            </p>
            <button
              onClick={() => setEnviado(false)}
              className="btn-primary"
            >
              Fazer Nova Encomenda
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Seu Nome *</label>
                <input required name="nome" value={form.nome} onChange={handleChange} placeholder="Ex: Maria Silva" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>WhatsApp *</label>
                <input required name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="(34) 99999-9999" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Tipo de Evento *</label>
                <select required name="evento" value={form.evento} onChange={handleChange} className={inputClass}>
                  <option value="">Selecione...</option>
                  {['Aniversário', 'Casamento', 'Bodas', 'Chá de Bebê', 'Formatura', 'Corporativo', 'Outro'].map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Data do Evento *</label>
                <input required type="date" name="data" value={form.data} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className={labelClass}>Tamanho</label>
                <select name="tamanho" value={form.tamanho} onChange={handleChange} className={inputClass}>
                  <option value="">Selecione...</option>
                  {['Pequeno (10–15 porções)', 'Médio (20–30 porções)', 'Grande (40–50 porções)', 'Festa (80+ porções)'].map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Recheio</label>
                <input name="recheio" value={form.recheio} onChange={handleChange} placeholder="Ex: Brigadeiro, Morango..." className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Cobertura</label>
                <input name="cobertura" value={form.cobertura} onChange={handleChange} placeholder="Ex: Chantilly, Ganache..." className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>Decoração / Tema</label>
              <input name="decoracao" value={form.decoracao} onChange={handleChange} placeholder="Ex: Floral, Unicórnio, Minimalista..." className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Observações</label>
              <textarea
                name="obs"
                value={form.obs}
                onChange={handleChange}
                rows={4}
                placeholder="Informações adicionais, alergias, referências de foto..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              id="btn-enviar-encomenda"
              className="btn-primary w-full"
            >
              <Send size={18} />
              Enviar Encomenda pelo WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
