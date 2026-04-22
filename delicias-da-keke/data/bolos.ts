export interface Bolo {
  id: number;
  nome: string;
  categoria: 'Festa' | 'Naked' | 'Torta' | 'Especial' | 'Casamento';
  preco: number;
  imagem: string;
  recheio: string;
  cobertura: string;
  descricao: string;
  destaque: boolean;
  tamanhos: { porcoes: string; preco: number }[];
  tags: string[];
}

export const MOCK_BOLOS: Bolo[] = [
  {
    id: 1,
    nome: 'Red Velvet Luxo',
    categoria: 'Festa',
    preco: 180,
    imagem: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80&w=800',
    recheio: 'Cream Cheese',
    cobertura: 'Chantilly Belga',
    descricao: 'O clássico Red Velvet reinventado com massa aveludada, recheio de cream cheese artesanal e decoração elegante. Perfeito para aniversários e celebrações especiais.',
    destaque: true,
    tamanhos: [
      { porcoes: '10–15 porções', preco: 180 },
      { porcoes: '20–30 porções', preco: 320 },
      { porcoes: '40–50 porções', preco: 580 },
    ],
    tags: ['aniversário', 'casamento', 'chocolate'],
  },
  {
    id: 2,
    nome: 'Naked Morango & Nutella',
    categoria: 'Naked',
    preco: 150,
    imagem: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800',
    recheio: 'Nutella com Morangos Frescos',
    cobertura: 'Naked (rústico)',
    descricao: 'Bolo naked rústico com camadas generosas de nutella cremosa e morangos frescos. Visual deslumbrante e sabor irresistível.',
    destaque: true,
    tamanhos: [
      { porcoes: '10–15 porções', preco: 150 },
      { porcoes: '20–30 porções', preco: 280 },
    ],
    tags: ['aniversário', 'morango', 'nutella'],
  },
  {
    id: 3,
    nome: 'Torta de Limão Siciliano',
    categoria: 'Torta',
    preco: 120,
    imagem: 'https://images.unsplash.com/photo-1519915028121-7d3463d5b1ff?auto=format&fit=crop&q=80&w=800',
    recheio: 'Curd de Limão Siciliano',
    cobertura: 'Merengue Italiano',
    descricao: 'Torta refrescante com base crocante, recheio azedinho de limão siciliano e cobertura de merengue levemente caramelizado.',
    destaque: false,
    tamanhos: [
      { porcoes: '8–10 porções', preco: 120 },
      { porcoes: '15–20 porções', preco: 220 },
    ],
    tags: ['limão', 'refrescante', 'verão'],
  },
  {
    id: 4,
    nome: 'Bolo de Casamento 4 Andares',
    categoria: 'Casamento',
    preco: 800,
    imagem: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800',
    recheio: 'Brigadeiro Branco & Frutas Vermelhas',
    cobertura: 'Pasta Americana com Flores',
    descricao: 'Bolo de casamento deslumbrante com 4 andares, decoração floral artesanal e recheios personalizados. A peça central do seu grande dia.',
    destaque: true,
    tamanhos: [
      { porcoes: '80–100 porções', preco: 800 },
      { porcoes: '120–150 porções', preco: 1200 },
    ],
    tags: ['casamento', 'festa', 'floral'],
  },
  {
    id: 5,
    nome: 'Bolo de Chocolate Belga',
    categoria: 'Especial',
    preco: 200,
    imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
    recheio: 'Ganache de Chocolate 70%',
    cobertura: 'Espelho de Chocolate',
    descricao: 'Para os verdadeiros apaixonados por chocolate. Massa úmida de cacau, recheio de ganache belga e cobertura espelhada que impressiona.',
    destaque: true,
    tamanhos: [
      { porcoes: '10–15 porções', preco: 200 },
      { porcoes: '20–30 porções', preco: 380 },
    ],
    tags: ['chocolate', 'aniversário', 'especial'],
  },
  {
    id: 6,
    nome: 'Naked Cenoura & Brigadeiro',
    categoria: 'Naked',
    preco: 130,
    imagem: 'https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&q=80&w=800',
    recheio: 'Brigadeiro Artesanal',
    cobertura: 'Naked com Granulado',
    descricao: 'A combinação clássica brasileira favorita: bolo de cenoura fofinho com recheio de brigadeiro artesanal. Nostalgia em cada fatia.',
    destaque: false,
    tamanhos: [
      { porcoes: '10–15 porções', preco: 130 },
      { porcoes: '20–30 porções', preco: 240 },
    ],
    tags: ['cenoura', 'brigadeiro', 'clássico'],
  },
  {
    id: 7,
    nome: 'Torta Maracujá & Chocolate',
    categoria: 'Torta',
    preco: 140,
    imagem: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=800',
    recheio: 'Mousse de Maracujá',
    cobertura: 'Espelho de Chocolate Amargo',
    descricao: 'A acidez do maracujá tropical encontra a intensidade do chocolate amargo nessa torta sofisticada e cheia de personalidade.',
    destaque: false,
    tamanhos: [
      { porcoes: '8–10 porções', preco: 140 },
      { porcoes: '15–20 porções', preco: 260 },
    ],
    tags: ['maracujá', 'tropical', 'chocolate'],
  },
  {
    id: 8,
    nome: 'Bolo Festa Unicórnio',
    categoria: 'Festa',
    preco: 250,
    imagem: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80&w=800',
    recheio: 'Baunilha com Frutas Coloridas',
    cobertura: 'Chantilly Colorido & Glitter',
    descricao: 'O preferido das festas infantis! Bolo colorido e divertido com decoração de unicórnio, glitter comestível e muito encanto.',
    destaque: false,
    tamanhos: [
      { porcoes: '10–15 porções', preco: 250 },
      { porcoes: '20–30 porções', preco: 420 },
    ],
    tags: ['infantil', 'colorido', 'festa'],
  },
];
