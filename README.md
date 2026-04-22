# 🎂 Delícias da KEKE

Landing page da confeitaria artesanal **Delícias da KEKE**, construída com **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS**.

## 📁 Estrutura do Projeto

```
delicias-da-keke/
├── app/
│   ├── layout.tsx              # RootLayout (Navbar + Footer + WhatsApp)
│   ├── page.tsx                # Home — hero, destaques, diferenciais
│   ├── cardapio/
│   │   ├── page.tsx            # Cardápio com filtros e busca
│   │   └── [id]/page.tsx       # Detalhes do bolo
│   ├── encomendas/page.tsx     # Formulário de encomenda (→ WhatsApp)
│   ├── como-funciona/page.tsx  # Timeline do processo + FAQ
│   └── sobre/page.tsx          # História + localização + contato
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   └── BoloCard.tsx
├── data/
│   └── bolos.ts                # Catálogo mock com 8 bolos
└── ...configs
```

## 🚀 Como Rodar

```bash
cd delicias-da-keke
npm run dev
```

Acesse **http://localhost:3000**

## 📞 Contato da Loja

- **WhatsApp:** (34) 99864-6116
- **Endereço:** Alameda Jacarandas, 23 — Parque das Árvores
- **Horário:** Seg–Sex 08h–18h | Sáb 08h–14h

## 🎨 Stack

| Tecnologia | Versão |
|---|---|
| Next.js | 14.2.3 |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Lucide React | 0.395 |
