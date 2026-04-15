import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5534998632929?text=Olá! Gostaria de saber mais sobre o estoque."
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-btn"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline font-bold">Fale Conosco</span>
    </a>
  );
}
