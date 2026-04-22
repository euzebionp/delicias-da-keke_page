import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'Delícias da KEKE — Bolos Artesanais',
    template: '%s | Delícias da KEKE',
  },
  description: 'Bolos artesanais, tortas e doces feitos com amor. Encomende o seu bolo personalizado em Parque das Árvores. WhatsApp: (34) 99864-6116.',
  keywords: ['bolos artesanais', 'confeitaria', 'bolo personalizado', 'parque das árvores', 'encomenda de bolo', 'delícias da keke'],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Delícias da KEKE',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-bg-dark">
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
