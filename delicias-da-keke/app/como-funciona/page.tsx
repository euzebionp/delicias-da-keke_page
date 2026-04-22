import type { Metadata } from 'next';
import { MessageCircle, PackageCheck, Truck, ChefHat, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Funciona',
  description: 'Saiba como funciona o processo de encomenda na Delícias da KEKE: escolha, pedido, produção e entrega.',
};

const steps = [
  {
    num: '01',
    icon: <MessageCircle size={28} />,
    title: 'Escolha & Contato',
    desc: 'Navegue pelo cardápio, escolha o bolo dos seus sonhos ou descreva o que imagina. Entre em contato pelo WhatsApp ou preencha nosso formulário de encomenda.',
    cor: 'from-primary/20 to-primary/5',
  },
  {
    num: '02',
    icon: <PackageCheck size={28} />,
    title: 'Confirmação & Pagamento',
    desc: 'Após combinar todos os detalhes (tamanho, recheio, decoração, data), enviamos o orçamento. Com 50% de sinal confirmamos sua encomenda.',
    cor: 'from-rose-900/30 to-rose-900/5',
  },
  {
    num: '03',
    icon: <ChefHat size={28} />,
    title: 'Produção Artesanal',
    desc: 'Com carinho e atenção a cada detalhe, produzimos seu bolo com ingredientes frescos. Acompanhe a produção por fotos enviadas no WhatsApp.',
    cor: 'from-amber-900/30 to-amber-900/5',
  },
  {
    num: '04',
    icon: <Truck size={28} />,
    title: 'Retirada ou Entrega',
    desc: 'Retire em nossa loja no dia combinado ou receba em casa. Bolos embalados com cuidado para chegarem perfeitos.',
    cor: 'from-emerald-900/30 to-emerald-900/5',
  },
];

const faq = [
  { q: 'Com quanto tempo devo encomendar?', a: 'Mínimo 72 horas (3 dias) de antecedência. Para bolos de casamento ou eventos grandes, recomendamos com 15+ dias.' },
  { q: 'Vocês entregam?', a: 'Sim! Entregamos conforme disponibilidade, com taxa de entrega. Também pode retirar em nosso endereço: Alameda Jacarandas 23, Parque das Árvores.' },
  { q: 'Quais formas de pagamento?', a: 'Pix, dinheiro e cartão. Sinal de 50% na confirmação e restante na entrega/retirada.' },
  { q: 'Posso encomendar pelo Instagram?', a: 'Sim, mas preferimos via WhatsApp para não perder detalhes: (34) 99864-6116.' },
  { q: 'Vocês atendem alergias alimentares?', a: 'Sim! Informe-nos no momento da encomenda sobre restrições. Fazemos adaptações sempre que possível.' },
];

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen animate-fade-in">

      {/* Header */}
      <div className="bg-bg-card2 border-b border-white/5 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <span className="section-label">Do pedido ao bolo</span>
          <h1 className="section-title">Como Funciona</h1>
          <p className="text-white/50 font-body text-sm max-w-xl">
            Entenda como é simples e gostoso fazer sua encomenda na Delícias da KEKE.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={step.num} className={`relative bg-gradient-to-br ${step.cor} border border-white/5 rounded-2xl p-8 flex gap-6 items-start group hover:border-primary/20 transition-all`}>
              {/* Número */}
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-primary font-display font-black text-sm">{step.num}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary">{step.icon}</span>
                  <h2 className="font-display text-white font-bold text-xl">{step.title}</h2>
                </div>
                <p className="text-white/60 font-body leading-relaxed">{step.desc}</p>
              </div>
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="absolute -bottom-4 left-[3.25rem] w-0.5 h-4 bg-primary/20 z-10" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/5534998646116?text=Olá! Gostaria de fazer uma encomenda."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <Phone size={18} />
            Falar com a KEKE agora
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-card2 border-t border-white/5 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <span className="section-label text-center block">Dúvidas frequentes</span>
          <h2 className="section-title text-center mb-10">FAQ</h2>
          <div className="space-y-4">
            {faq.map(({ q, a }) => (
              <details key={q} className="card-dark group cursor-pointer">
                <summary className="font-display text-white font-semibold text-base cursor-pointer list-none flex justify-between items-center gap-4">
                  {q}
                  <span className="text-primary text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="text-white/55 font-body text-sm leading-relaxed mt-3 pt-3 border-t border-white/5">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
