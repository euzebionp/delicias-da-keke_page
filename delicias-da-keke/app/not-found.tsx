import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <p className="text-8xl mb-4">🎂</p>
        <h1 className="font-display text-white text-4xl font-black mb-3">Página não encontrada</h1>
        <p className="text-white/50 font-body mb-8">Ops! A página que você buscou não existe.</p>
        <Link href="/" className="btn-primary inline-flex">
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
