# Bear Flow — Portfólio de Serviços

Site institucional da **Bear Flow**, apresentando os serviços de desenvolvimento de software sob medida: sites, sistemas web e aplicativos mobile.

## Sobre o projeto

Landing page com as seguintes seções:

- **Hero** — apresentação da empresa e CTA para WhatsApp
- **Problemas e Soluções** — o que a Bear Flow resolve
- **Cases** — portfólio de projetos entregues (app de suinocultura com IA, sistema para oficinas, site DareU)
- **Como funciona** — processo de desenvolvimento em 4 etapas
- **Tecnologias** — stack utilizada (Flutter, Python, Figma, IA, Visão Computacional etc.)
- **Sobre** — história e diferenciais da empresa
- **Contato** — CTA final para WhatsApp

## Tecnologias

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/) — animações de entrada

## Rodar localmente

Requisito: Node.js 18+

```bash
# Clonar o repositório
git clone https://github.com/Jhonatan-Margraf/Portfolio-de-Servicos.git
cd Portfolio-de-Servicos

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:8080`.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com hot-reload |
| `npm run build` | Build de produção em `/dist` |
| `npm run preview` | Preview do build de produção |
| `npm run lint` | Verificação de código com ESLint |
| `npm run test` | Testes unitários com Vitest |
| `npm run test:e2e` | Testes end-to-end com Playwright |

## Estrutura

```
src/
├── assets/          # Imagens e logos
├── components/      # Componentes de seção e UI
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── CasesSection.tsx
│   └── ...
├── pages/
│   └── Index.tsx    # Página principal
└── main.tsx
```

---

Desenvolvido por [Bear Flow](https://github.com/Jhonatan-Margraf)
