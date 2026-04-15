import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Gauge, 
  Calendar, 
  Fuel, 
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Calculator,
  Info
} from 'lucide-react';

// Mock Data - Veículos em Stock
const MOCK_CARS = [
  {
    id: 1,
    brand: 'BMW',
    model: 'Série 3 320d',
    year: 2021,
    km: 45000,
    price: 38900,
    fuel: 'Diesel',
    transmission: 'Automática',
    engine: '2.0 TwinPower Turbo',
    power: '190 cv',
    color: 'Cinzento Metalizado',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    description: 'Viatura em excelente estado, com histórico completo de manutenção na marca. Equipado com pack M e teto de abrir.'
  },
  {
    id: 2,
    brand: 'Mercedes-Benz',
    model: 'Classe A 250e',
    year: 2022,
    km: 22000,
    price: 42500,
    fuel: 'Híbrido Plug-in',
    transmission: 'Automática',
    engine: '1.3 EQ Power',
    power: '218 cv',
    color: 'Branco Polar',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516905?auto=format&fit=crop&q=80&w=800',
    description: 'Híbrido plug-in com autonomia elétrica de até 70km. Ideal para cidade e viagens longas. IUC reduzido.'
  },
  {
    id: 3,
    brand: 'Audi',
    model: 'Q3 Sportback',
    year: 2020,
    km: 68000,
    price: 35750,
    fuel: 'Diesel',
    transmission: 'S-Tronic',
    engine: '35 TDI',
    power: '150 cv',
    color: 'Preto Mythos',
    image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=800',
    description: 'SUV coupé com design desportivo e interior tecnológico (Virtual Cockpit). Único dono.'
  },
  {
    id: 4,
    brand: 'Volkswagen',
    model: 'Golf GTI',
    year: 2023,
    km: 5000,
    price: 51000,
    fuel: 'Gasolina',
    transmission: 'DSG',
    engine: '2.0 TSI',
    power: '245 cv',
    color: 'Vermelho Kings',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    description: 'O ícone dos compactos desportivos. Viatura de serviço com garantia de fábrica até 2026.'
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // home, inventory, details
  const [selectedCar, setSelectedCar] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState(60000);

  // Navegação
  const navigateTo = (page, car = null) => {
    setCurrentPage(page);
    setSelectedCar(car);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const filteredCars = useMemo(() => {
    return MOCK_CARS.filter(car => 
      (car.brand.toLowerCase().includes(searchQuery.toLowerCase()) || 
       car.model.toLowerCase().includes(searchQuery.toLowerCase())) &&
      car.price <= priceFilter
    );
  }, [searchQuery, priceFilter]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center gap-2 cursor-pointer" 
              onClick={() => navigateTo('home')}
            >
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800 uppercase">
                Premium<span className="text-blue-600">Motors</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => navigateTo('home')} className="hover:text-blue-600 font-medium transition-colors">Início</button>
              <button onClick={() => navigateTo('inventory')} className="hover:text-blue-600 font-medium transition-colors">Stock</button>
              <button className="hover:text-blue-600 font-medium transition-colors">Venda o seu Carro</button>
              <a href="tel:912345678" className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full font-semibold hover:bg-slate-200 transition-all">
                <Phone size={18} /> 912 345 678
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4 animate-in slide-in-from-top">
            <button onClick={() => navigateTo('home')} className="block w-full text-left py-2 font-medium">Início</button>
            <button onClick={() => navigateTo('inventory')} className="block w-full text-left py-2 font-medium">Stock</button>
            <button className="block w-full text-left py-2 font-medium">Venda o seu Carro</button>
            <div className="pt-4 border-t">
              <a href="tel:912345678" className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-xl font-bold">
                <Phone size={20} /> Ligar Agora
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'inventory' && (
          <InventoryPage 
            cars={filteredCars} 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery}
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
            navigateTo={navigateTo} 
          />
        )}
        {currentPage === 'details' && <DetailsPage car={selectedCar} navigateTo={navigateTo} />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Premium Motors</h3>
            <p className="text-sm leading-relaxed">
              Especialistas em viaturas seminovas e usadas de alta gama. 
              Qualidade garantida e financiamento facilitado.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Horário</h4>
            <p className="text-sm">Segunda - Sexta: 09h às 19h</p>
            <p className="text-sm">Sábado: 10h às 18h</p>
            <p className="text-sm">Domingo: Por marcação</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Localização</h4>
            <p className="text-sm">Avenida Governador Valadares, 1500</p>
            <p className="text-sm">Nova Ponte - MG - Brasil</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          © 2026 Inforserviços Tecnologias - Premium Motors. Todos os direitos reservados.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href={`https://wa.me/351912345678?text=Olá! Gostaria de saber mais sobre o stock.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2"
      >
        <MessageCircle size={24} />
        <span className="hidden md:inline font-bold">Fale Connosco</span>
      </a>
    </div>
  );
}

// Sub-Componente: Home Page
function HomePage({ navigateTo }) {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1600" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
              Stock Renovado
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Encontre o seu próximo <span className="text-blue-500">Premium.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-lg">
              Viaturas certificadas, com garantia e prontas para entrega imediata. Experiência de compra simplificada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigateTo('inventory')}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group"
              >
                Ver Inventário <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                Venda o seu Carro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Garantia Certificada</h3>
          <p className="text-slate-600">Todas as nossas viaturas passam por uma inspeção de 150 pontos e incluem garantia total.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
            <Calculator size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Financiamento 100%</h3>
          <p className="text-slate-600">Tratamos de todo o processo de crédito com aprovação rápida e as melhores taxas do mercado.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
            <Gauge size={28} />
          </div>
          <h3 className="text-xl font-bold mb-3">Entrega Rápida</h3>
          <p className="text-slate-600">Viatura pronta para circular em menos de 24 horas após o fecho do negócio.</p>
        </div>
      </section>

      {/* Featured Cars Preview */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-extrabold mb-2">Destaques da Semana</h2>
              <p className="text-slate-500">As melhores oportunidades escolhidas por nós.</p>
            </div>
            <button 
              onClick={() => navigateTo('inventory')}
              className="text-blue-600 font-bold flex items-center gap-1 hover:gap-2 transition-all"
            >
              Ver todos <ArrowRight size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_CARS.slice(0, 4).map(car => (
              <CarCard key={car.id} car={car} onClick={() => navigateTo('details', car)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-Componente: Inventário
function InventoryPage({ cars, searchQuery, setSearchQuery, priceFilter, setPriceFilter, navigateTo }) {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-10 animate-in fade-in">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Filtrar por Preço</h3>
            <input 
              type="range" 
              min="10000" 
              max="60000" 
              step="1000"
              value={priceFilter}
              onChange={(e) => setPriceFilter(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between mt-2 text-sm font-semibold text-slate-600">
              <span>10.000€</span>
              <span className="text-blue-600">{priceFilter.toLocaleString()}€</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Combustível</h3>
            {['Diesel', 'Gasolina', 'Híbrido', 'Elétrico'].map(type => (
              <label key={type} className="flex items-center gap-3 mb-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" />
                <span className="text-slate-600 group-hover:text-slate-900">{type}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Pesquise por marca ou modelo..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <p className="text-slate-500 font-medium">{cars.length} viaturas encontradas</p>
            <select className="bg-transparent font-bold text-slate-700 outline-none cursor-pointer">
              <option>Mais recentes</option>
              <option>Preço crescente</option>
              <option>Preço decrescente</option>
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cars.map(car => (
              <CarCard key={car.id} car={car} onClick={() => navigateTo('details', car)} />
            ))}
            {cars.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <div className="bg-slate-100 inline-block p-6 rounded-full mb-4">
                  <Search size={40} className="text-slate-400" />
                </div>
                <h3 className="text-xl font-bold">Nenhum veículo encontrado</h3>
                <p className="text-slate-500">Tente ajustar os seus filtros de pesquisa.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-Componente: Detalhes
function DetailsPage({ car, navigateTo }) {
  const [months, setMonths] = useState(84);
  const [downPayment, setDownPayment] = useState(5000);
  
  const monthlyPayment = useMemo(() => {
    const principal = car.price - downPayment;
    const rate = 0.089; // 8.9% Taxa exemplo
    const monthlyRate = rate / 12;
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  }, [car.price, downPayment, months]);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-8 animate-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={() => navigateTo('inventory')}
        className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-6 font-semibold"
      >
        <ArrowRight className="rotate-180" size={20} /> Voltar ao Stock
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery Preview */}
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden shadow-xl aspect-video">
            <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-square bg-slate-200 animate-pulse border-2 border-transparent hover:border-blue-500 cursor-pointer" />
            ))}
          </div>
        </div>

        {/* Info & Conversion */}
        <div>
          <h1 className="text-4xl font-extrabold mb-2">{car.brand} {car.model}</h1>
          <div className="flex gap-4 mb-6">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">{car.year}</span>
            <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-bold">{car.km.toLocaleString()} km</span>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm mb-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-4xl font-extrabold text-blue-600">{car.price.toLocaleString()}€</span>
              <span className="text-sm font-semibold text-slate-400">Preço Chave na Mão</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Fuel size={20} className="text-slate-400" />
                <span className="text-sm font-medium">{car.fuel}</span>
              </div>
              <div className="flex items-center gap-3">
                <Gauge size={20} className="text-slate-400" />
                <span className="text-sm font-medium">{car.transmission}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-slate-400" />
                <span className="text-sm font-medium">{car.power}</span>
              </div>
              <div className="flex items-center gap-3">
                <Info size={20} className="text-slate-400" />
                <span className="text-sm font-medium">Garantia 18 Meses</span>
              </div>
            </div>

            <a 
              href={`https://wa.me/351912345678?text=Estou interessado no ${car.brand} ${car.model}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all"
            >
              <MessageCircle size={22} /> Solicitar Proposta
            </a>
          </div>

          {/* Calculadora */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <div className="flex items-center gap-2 mb-6 text-blue-400">
              <Calculator size={20} />
              <h3 className="font-bold">Simulador de Financiamento</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Entrada Inicial</span>
                  <span className="font-bold">{downPayment.toLocaleString()}€</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max={car.price * 0.5} 
                  step="500"
                  value={downPayment}
                  onChange={(e) => setDownPayment(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Prazo (Meses)</span>
                  <span className="font-bold">{months} meses</span>
                </div>
                <select 
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none"
                  value={months}
                  onChange={(e) => setMonths(parseInt(e.target.value))}
                >
                  <option value={120}>120 meses</option>
                  <option value={84}>84 meses</option>
                  <option value={60}>60 meses</option>
                  <option value={36}>36 meses</option>
                </select>
              </div>

              <div className="pt-6 border-t border-slate-800 text-center">
                <p className="text-slate-400 text-sm mb-1">Prestação Mensal Estimada</p>
                <p className="text-4xl font-extrabold text-blue-400">{monthlyPayment.toFixed(2)}€</p>
                <p className="text-[10px] text-slate-500 mt-4 leading-tight">
                  Simulação não vinculativa sujeita a aprovação financeira. TAEG 11.2%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Descrição Longa */}
      <div className="mt-20 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Descrição da Viatura</h2>
        <p className="text-slate-600 leading-relaxed whitespace-pre-line text-lg">
          {car.description}
          {"\n\n"}
          Equipamento de série e extras principais:
          • Pack Desportivo Exterior/Interior
          • Sistema de Navegação Profissional
          • Sensores de estacionamento 360º
          • Cruise Control Adaptativo
          • Cockpit Digital Interativo
        </p>
      </div>
    </div>
  );
}

// Sub-Componente: Card de Veículo
function CarCard({ car, onClick }) {
  return (
    <div 
      className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.model} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-tight shadow-sm">
            Novo Stock
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-extrabold text-lg text-slate-800 leading-tight">
            {car.brand} <span className="block text-slate-500 font-medium text-sm">{car.model}</span>
          </h3>
          <span className="text-blue-600 font-extrabold text-lg">{car.price.toLocaleString()}€</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-50 my-4">
          <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
            <Calendar size={14} className="text-blue-500" /> {car.year}
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
            <Gauge size={14} className="text-blue-500" /> {car.km.toLocaleString()} km
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
            <Fuel size={14} className="text-blue-500" /> {car.fuel}
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
            <ShieldCheck size={14} className="text-blue-500" /> Garantia
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 font-bold text-sm text-slate-800 group-hover:text-blue-600 transition-colors">
          Ver detalhes <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}