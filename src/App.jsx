import React, { useState, useMemo } from 'react';
import { MOCK_CARS } from './data/cars';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';
import DetailsPage from './pages/DetailsPage';
import VenderPage from './pages/VenderPage';
import FinanciamentoPage from './pages/FinanciamentoPage';
import NossaLojaPage from './pages/NossaLojaPage';

export default function App() {
  // 'home' | 'inventory' | 'details' | 'sell' | 'financing' | 'store'
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCar, setSelectedCar] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState(300000);

  const navigateTo = (page, car = null) => {
    setCurrentPage(page);
    setSelectedCar(car);
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const filteredCars = useMemo(() => {
    return MOCK_CARS.filter(
      (car) =>
        (car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.model.toLowerCase().includes(searchQuery.toLowerCase())) &&
        car.price <= priceFilter
    );
  }, [searchQuery, priceFilter]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-900/40">
      {/* Barra de Navegação */}
      <Navbar
        navigateTo={navigateTo}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        currentPage={currentPage}
      />

      {/* Conteúdo Principal */}
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

        {currentPage === 'details' && selectedCar && (
          <DetailsPage car={selectedCar} navigateTo={navigateTo} />
        )}

        {currentPage === 'sell' && <VenderPage />}

        {currentPage === 'financing' && <FinanciamentoPage />}

        {currentPage === 'store' && <NossaLojaPage />}
      </main>

      {/* Rodapé */}
      <Footer navigateTo={navigateTo} />

      {/* Botão Flutuante WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
