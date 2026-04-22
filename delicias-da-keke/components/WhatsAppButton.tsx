'use client';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5534998646116?text=Olá! Gostaria de fazer uma encomenda de bolo."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Encomendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-body font-bold px-4 py-3 rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all group"
    >
      <MessageCircle size={20} className="animate-float" />
      <span className="hidden sm:inline">Fazer Encomenda</span>
    </a>
  );
}
