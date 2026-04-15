# 🚗 Premium Motors

> **Plataforma web de venda de veículos seminovos** — Nova Ponte, MG.
> Desenvolvida com React + Vite, tema escuro com acento vermelho no estilo de concessionárias premium.

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias](#tecnologias)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Instalação e Uso](#instalação-e-uso)
- [Páginas](#páginas)
- [Personalização](#personalização)
- [Contato](#contato)

---

## Sobre o Projeto

Site institucional e catálogo de veículos para a **Premium Motors**, localizada em Nova Ponte - MG. A aplicação permite que clientes consultem o estoque de seminovos, simulem financiamentos, solicitem avaliação do próprio veículo e entrem em contato direto via WhatsApp.

O design segue o padrão visual de concessionárias regionais (fundo escuro, acento vermelho, tipografia bold) e foi desenvolvido com foco em **mobile-first** e conversão via WhatsApp.

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev) | 18.x | Framework de UI |
| [Vite](https://vitejs.dev) | 5.x | Build tool e dev server |
| [Tailwind CSS](https://tailwindcss.com) | 3.x | Estilização utilitária |
| [Lucide React](https://lucide.dev) | 0.395+ | Ícones SVG |
| [PostCSS](https://postcss.org) | 8.x | Processamento de CSS |

---

## Funcionalidades

- ✅ **Catálogo de veículos** com busca por marca/modelo e filtro por preço
- ✅ **Página de detalhes** com galeria, especificações e CTA via WhatsApp
- ✅ **Simulador de financiamento** interativo em tempo real (parcelas mensais)
- ✅ **Página de Financiamento** com comparativo de bancos parceiros e simulador global
- ✅ **Formulário de avaliação** (Vender) com envio automático via WhatsApp
- ✅ **Nossa Loja** com mapa, galeria, horários e dados de contato
- ✅ **Botão flutuante WhatsApp** em todas as páginas
- ✅ **Menu responsivo** com estado ativo destacado
- ✅ **Top bar vermelha** com telefone e redes sociais
- ✅ **Navegação SPA** sem recarregamento de página

---

## Estrutura do Projeto

```
garagem/
├── index.html                  # Ponto de entrada HTML (PT-BR, SEO)
├── vite.config.js              # Configuração do Vite
├── tailwind.config.js          # Configuração do Tailwind CSS
├── postcss.config.js           # Configuração do PostCSS
├── package.json
│
└── src/
    ├── main.jsx                # Entry point React (ReactDOM.createRoot)
    ├── App.jsx                 # Componente raiz — roteamento e estado global
    ├── index.css               # Estilos globais, Tailwind, animações
    │
    ├── data/
    │   └── cars.js             # Mock data dos veículos em estoque
    │
    ├── components/
    │   ├── Navbar.jsx          # Cabeçalho com top bar vermelha e menu responsivo
    │   ├── Footer.jsx          # Rodapé com 3 colunas e barra inferior
    │   ├── CarCard.jsx         # Card de veículo reutilizável
    │   └── WhatsAppButton.jsx  # Botão flutuante verde fixo
    │
    └── pages/
        ├── HomePage.jsx        # Hero, diferenciais, destaques e CTA banner
        ├── InventoryPage.jsx   # Filtros sidebar + grid de veículos
        ├── DetailsPage.jsx     # Galeria, specs, proposta e simulador
        ├── VenderPage.jsx      # Formulário de avaliação → WhatsApp
        ├── FinanciamentoPage.jsx # Simulador global + bancos parceiros
        └── NossaLojaPage.jsx   # Sobre, mapa, galeria e contato
```

---

## Instalação e Uso

### Pré-requisitos

- [Node.js](https://nodejs.org) v18 ou superior
- npm v9 ou superior

### 1. Instalar dependências

```bash
# Windows (PowerShell bloqueado? Use cmd)
cmd /c "npm install"

# Linux / macOS
npm install
```

### 2. Iniciar servidor de desenvolvimento

```bash
cmd /c "npm run dev"
# ou
npm run dev
```

Acesse: **http://localhost:5173**

### 3. Build para produção

```bash
npm run build
```

Os arquivos otimizados serão gerados em `dist/`.

### 4. Preview do build

```bash
npm run preview
```

---

## Páginas

| Rota (estado) | Componente | Descrição |
|---|---|---|
| `home` | `HomePage` | Hero, diferenciais e destaques da semana |
| `inventory` | `InventoryPage` | Catálogo com filtros de busca e preço |
| `details` | `DetailsPage` | Detalhes do veículo + simulador |
| `sell` | `VenderPage` | Formulário de avaliação para venda |
| `financing` | `FinanciamentoPage` | Simulador de financiamento e bancos |
| `store` | `NossaLojaPage` | Sobre a loja, mapa e galeria |

> A navegação é gerenciada via estado no `App.jsx` — não há router externo.
> Para trocar de página, basta chamar `navigateTo('nome-da-rota')`.

---

## Personalização

### Dados dos veículos
Edite o arquivo `src/data/cars.js` para adicionar, remover ou alterar veículos do estoque:

```js
export const MOCK_CARS = [
  {
    id: 1,
    brand: 'BMW',
    model: 'Série 3 320d',
    year: 2021,
    km: 45000,
    price: 189900,          // Preço em R$ (sem formatação)
    fuel: 'Diesel',
    transmission: 'Automática',
    engine: '2.0 TwinPower Turbo',
    power: '190 cv',
    color: 'Cinza Metalizado',
    image: 'URL_DA_IMAGEM',
    description: 'Descrição detalhada...'
  },
  // ...
];
```

### Dados de contato
Busque e substitua o número `34998632929` em todos os arquivos para atualizar o WhatsApp/telefone:

| Arquivo | O que alterar |
|---|---|
| `src/components/Navbar.jsx` | `href="tel:34998632929"` e texto exibido |
| `src/components/Footer.jsx` | `href="tel:34998632929"` e texto exibido |
| `src/components/WhatsAppButton.jsx` | `wa.me/5534998632929` |
| `src/pages/DetailsPage.jsx` | Link `wa.me/5534998632929` |
| `src/pages/InventoryPage.jsx` | Link `wa.me/5534998632929` |
| `src/pages/VenderPage.jsx` | Link `wa.me/5534998632929` |
| `src/pages/FinanciamentoPage.jsx` | Link `wa.me/5534998632929` |
| `src/pages/NossaLojaPage.jsx` | Link `wa.me/5534998632929` e `tel:` |

### Cores e tema
O tema usa duas variáveis principais definidas diretamente como classes Tailwind:

| Variável | Valor | Uso |
|---|---|---|
| Fundo escuro | `#0a0a0a` / `#111` | Background das seções |
| Vermelho acento | `#e3262e` | Botões, destaques, títulos, bordas ativas |

Para alterar a cor de acento, substitua `#e3262e` em `src/index.css` e nos componentes.

---

## Contato

**Premium Motors**
📍 Avenida Governador Valadares, 1500 — Nova Ponte, MG
📞 [(34) 99863-2929](tel:34998632929)
💬 [WhatsApp](https://wa.me/5534998632929)

---

*Desenvolvido por [Inforserviços Tecnologias](https://wa.me/5534998632929) · 2026*
