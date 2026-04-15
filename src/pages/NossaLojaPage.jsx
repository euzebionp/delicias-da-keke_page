import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Star, Users, Car } from 'lucide-react';

const STATS = [
  { icon: <Car size={28} />,   valor: '500+',  label: 'Veículos vendidos' },
  { icon: <Users size={28} />, valor: '800+',  label: 'Clientes satisfeitos' },
  { icon: <Star size={28} />,  valor: '10+',   label: 'Anos de experiência' },
];

export default function NossaLojaPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Banner */}
      <div className="bg-[#111] border-b border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-title mx-auto w-fit">Nossa Loja</p>
          <h1 className="text-white font-black uppercase text-3xl sm:text-4xl mb-3">
            Conheça a Premium Motors
          </h1>
          <p className="text-white/50 max-w-lg mx-auto">
            Localizada em Nova Ponte - MG, referência regional em veículos seminovos de qualidade.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">

        {/* ── Números ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {STATS.map(({ icon, valor, label }) => (
            <div key={label} className="bg-[#111] border border-white/10 rounded-lg p-8 text-center hover:border-[#e3262e] transition-colors">
              <div className="text-[#e3262e] flex justify-center mb-4">{icon}</div>
              <p className="text-white font-black text-4xl mb-1">{valor}</p>
              <p className="text-white/50 text-sm uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>

        {/* ── Sobre + Foto ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <p className="section-title">Quem somos</p>
            <p className="text-white/70 leading-relaxed mb-4">
              A <strong className="text-white">Premium Motors</strong> nasceu do sonho de oferecer
              veículos seminovos de qualidade com o atendimento próximo e honesto que o cliente merece.
            </p>
            <p className="text-white/70 leading-relaxed mb-4">
              Somos uma empresa de Nova Ponte - MG com mais de 10 anos no mercado,
              atendendo toda a região do Triângulo Mineiro. Nosso compromisso é conectar
              pessoas ao veículo ideal com transparência, segurança e preço justo.
            </p>
            <p className="text-white/70 leading-relaxed">
              Trabalhamos com as melhores marcas do mercado e oferecemos facilidades como
              financiamento próprio, troca e avaliação gratuita. Venha nos visitar e
              realize o sonho do seu próximo veículo.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5534998632929?text=Olá! Gostaria de conhecer mais sobre a loja."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#e3262e] hover:bg-red-700 text-white font-black uppercase tracking-widest px-6 py-4 rounded transition-colors text-sm"
              >
                <MessageCircle size={16} /> Fale Conosco
              </a>
              <a
                href="tel:34998632929"
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-[#e3262e] text-white font-bold uppercase tracking-widest px-6 py-4 rounded transition-colors text-sm"
              >
                <Phone size={16} /> (34) 99863-2929
              </a>
            </div>
          </div>

          {/* Foto da loja */}
          <div className="rounded-lg overflow-hidden border border-white/10 bg-[#111] h-72 lg:h-auto">
            <img
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=900"
              alt="Fachada da loja Premium Motors"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>

        {/* ── Localização + Info ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Mapa embed */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden border border-white/10 h-72">
            <iframe
              title="Localização Premium Motors"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=Nova+Ponte,MG,Brasil"
            />
          </div>

          {/* Info de contato */}
          <div className="bg-[#111] border border-white/10 rounded-lg p-7 space-y-6">
            <div>
              <p className="section-title">Localização</p>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#e3262e] mt-0.5 shrink-0" />
                <div className="text-white/70 text-sm">
                  <p>Avenida Governador Valadares, 1500</p>
                  <p>Nova Ponte - MG - Brasil</p>
                </div>
              </div>
            </div>

            <div>
              <p className="section-title">Telefone</p>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#e3262e] shrink-0" />
                <a href="tel:34998632929" className="text-white/70 text-sm hover:text-[#e3262e] transition-colors">
                  (34) 99863-2929
                </a>
              </div>
            </div>

            <div>
              <p className="section-title">Horário</p>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-[#e3262e] mt-0.5 shrink-0" />
                <div className="text-white/70 text-sm space-y-1">
                  <p>Segunda a Sexta: 09h às 18h</p>
                  <p>Sábado: 09h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5534998632929"
              target="_blank" rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#e3262e] hover:bg-red-700 text-white font-black uppercase tracking-widest py-3 rounded transition-colors text-sm"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>

        {/* ── Galeria ── */}
        <div>
          <p className="section-title">Galeria</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=600',
            ].map((src, i) => (
              <div key={i} className="rounded-lg overflow-hidden aspect-video bg-[#111] border border-white/10 hover:border-[#e3262e] transition-colors">
                <img src={src} alt={`Galeria ${i + 1}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
