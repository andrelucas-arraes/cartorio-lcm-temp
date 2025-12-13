# LCM Cartório - Landing Page Institucional

Bem-vindo ao projeto da **Landing Page Institucional do Cartório Luciana Carrilho de Moraes Marinho**. Este é um projeto completo, modular e profissional desenvolvido com **React 19**, **TypeScript**, **TailwindCSS 4** e **Vite**.

## 📋 Visão Geral

Este projeto implementa uma landing page institucional moderna e responsiva com as seguintes seções:

- **Header**: Navegação com logo e menu dropdown
- **Hero**: Seção principal com imagem de fundo e chamada para ação
- **Atribuições**: Apresentação das atribuições do cartório com cards
- **Principais Serviços**: Grid de serviços oferecidos
- **Contato**: Formulário de contato e informações de localização
- **Footer**: Rodapé com links e informações legais

## 🎨 Design e Paleta de Cores

O projeto segue uma paleta de cores profissional e elegante:

| Cor | Código Hex | Uso |
|-----|-----------|-----|
| Vinho Principal | `#511C23` | Cor primária, headers, botões |
| Vinho Escuro | `#3f1417` | Acentos, bordas |
| Vinho Claro | `#7a2a2f` | Hover states, destaques |
| Branco Suave | `#F7F5F5` | Fundo geral, texto claro |

### Tipografia

- **Títulos**: Montserrat (bold, semibold)
- **Corpo**: Source Sans Pro (regular, medium)

Ambas as fontes são carregadas via Google Fonts e configuradas no arquivo `client/index.html`.

## 📁 Estrutura do Projeto

```
lcm-cartorio/
├── client/
│   ├── public/
│   │   └── images/
│   │       ├── hero-aerea.jpg          # Imagem de fundo do hero
│   │       ├── pattern-bg.png          # Padrão para seção atribuições
│   │       ├── logo-lcm.svg            # Logo do cartório
│   │       ├── icon-house.png          # Ícone de imóvel
│   │       ├── icon-document.png       # Ícone de documento
│   │       ├── icon-building.png       # Ícone de prédio
│   │       ├── icon-checklist.png      # Ícone de checklist
│   │       ├── icon-building-services.png
│   │       └── icon-document-services.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx              # Componente de navegação
│   │   │   ├── Footer.tsx              # Componente de rodapé
│   │   │   ├── ui/
│   │   │   │   ├── image.tsx           # Wrapper para imagens
│   │   │   │   └── [outros componentes shadcn/ui]
│   │   │   ├── cards/
│   │   │   │   ├── AttributionCard.tsx # Card de atribuição
│   │   │   │   └── ServiceCard.tsx     # Card de serviço
│   │   │   └── sections/
│   │   │       ├── HeroSection.tsx     # Seção hero
│   │   │       ├── AttributionsSection.tsx
│   │   │       ├── ServicesSection.tsx
│   │   │       └── ContactSection.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx                # Página principal
│   │   │   └── NotFound.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── App.tsx                     # Roteador principal
│   │   ├── main.tsx                    # Entry point
│   │   └── index.css                   # Estilos globais e tema
│   └── index.html
├── server/
│   └── index.ts                        # Servidor Express (não utilizado em static)
├── shared/
│   └── const.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Como Executar Localmente

### Pré-requisitos

- **Node.js** 18+ ou superior
- **pnpm** 10.4.1+ (gerenciador de pacotes recomendado)

### Instalação

1. **Clone ou extraia o projeto:**
   ```bash
   cd lcm-cartorio
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   pnpm dev
   ```

4. **Abra no navegador:**
   - Local: `http://localhost:3000`
   - Network: O URL será exibido no terminal

### Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia o servidor de desenvolvimento com hot reload |
| `pnpm build` | Compila o projeto para produção |
| `pnpm preview` | Visualiza a build de produção localmente |
| `pnpm check` | Verifica tipos TypeScript sem emitir código |
| `pnpm format` | Formata o código com Prettier |

## 🔧 Configuração e Personalização

### Alterar Paleta de Cores

Edite o arquivo `client/src/index.css` na seção `:root`:

```css
:root {
  --primary: #511C23;           /* Cor principal */
  --primary-foreground: #F7F5F5; /* Texto sobre primária */
  --primary-dark: #3f1417;       /* Variação escura */
  --primary-light: #7a2a2f;      /* Variação clara */
  /* ... outras cores ... */
}
```

### Substituir Imagens

1. Coloque suas imagens em `client/public/images/`
2. Atualize os caminhos nos componentes:
   - Hero: `HeroSection.tsx` (propriedade `backgroundImage`)
   - Pattern: `AttributionsSection.tsx` (propriedade `backgroundImage`)
   - Ícones: Atualize os caminhos nos componentes de cards

### Modificar Conteúdo

- **Header**: Edite `client/src/components/Header.tsx`
- **Hero**: Edite `client/src/components/sections/HeroSection.tsx`
- **Atribuições**: Edite `client/src/components/sections/AttributionsSection.tsx`
- **Serviços**: Edite `client/src/components/sections/ServicesSection.tsx`
- **Contato**: Edite `client/src/components/sections/ContactSection.tsx`
- **Footer**: Edite `client/src/components/Footer.tsx`

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:

- **Mobile**: 320px e acima
- **Tablet**: 768px e acima
- **Desktop**: 1024px e acima

Todos os componentes utilizam Tailwind CSS com breakpoints responsivos (`sm`, `md`, `lg`, `xl`).

## ♿ Acessibilidade

O projeto implementa boas práticas de acessibilidade:

- ✅ Labels associados a inputs com `htmlFor`
- ✅ Atributos `aria-label` em elementos interativos
- ✅ Atributos `alt` em todas as imagens
- ✅ Hierarquia de headings sem pulos de níveis
- ✅ Contraste de cores adequado
- ✅ Navegação por teclado funcional

## 🎯 Componentes Principais

### Header
Componente de navegação fixa com:
- Logo e branding
- Menu de navegação com dropdowns
- Responsivo com menu mobile

**Arquivo**: `client/src/components/Header.tsx`

### HeroSection
Seção principal com:
- Imagem de fundo com overlay
- Título e subtítulo
- Botões de ação
- Altura 100vh
- Corte diagonal inferior

**Arquivo**: `client/src/components/sections/HeroSection.tsx`

### AttributionsSection
Seção de atribuições com:
- Fundo com padrão geométrico
- Grid de 3 cards
- Cortes diagonais superior e inferior
- Ícones customizados

**Arquivo**: `client/src/components/sections/AttributionsSection.tsx`

### ServicesSection
Seção de serviços com:
- Grid responsivo (1, 2 ou 3 colunas)
- Cards com ícones circulares
- Hover effects

**Arquivo**: `client/src/components/sections/ServicesSection.tsx`

### ContactSection
Seção de contato com:
- Informações de localização
- Formulário de contato
- Links de navegação
- Validação de campos

**Arquivo**: `client/src/components/sections/ContactSection.tsx`

### Footer
Rodapé com:
- Logo
- Informações de contato
- Links de navegação
- Copyright

**Arquivo**: `client/src/components/Footer.tsx`

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| React | 19.0.0 | Framework UI |
| TypeScript | 5.6.3 | Tipagem estática |
| Tailwind CSS | 4.1.14 | Estilização |
| Vite | 7.1.7 | Build tool |
| Wouter | 3.3.5 | Roteamento |
| Framer Motion | 12.23.22 | Animações |
| Lucide React | 0.453.0 | Ícones |

## 📦 Dependências Principais

O projeto inclui todas as dependências necessárias para desenvolvimento profissional:

- **shadcn/ui**: Componentes UI de alta qualidade
- **Radix UI**: Primitivos de UI acessíveis
- **React Hook Form**: Gerenciamento de formulários
- **Zod**: Validação de dados
- **Sonner**: Sistema de notificações
- **Recharts**: Gráficos (se necessário)

## 🔒 Boas Práticas Implementadas

- ✅ **Componentização profunda**: Cada seção e card é um componente separado
- ✅ **Tipagem TypeScript**: Todas as props e estados são tipados
- ✅ **Estilos com Tailwind**: Sem CSS customizado desnecessário
- ✅ **Responsividade**: Mobile-first design
- ✅ **Acessibilidade**: WCAG 2.1 compliance
- ✅ **Performance**: Otimizado para velocidade
- ✅ **Manutenibilidade**: Código limpo e bem organizado

## 📝 Guia de Desenvolvimento

### Adicionar Nova Seção

1. Crie um novo arquivo em `client/src/components/sections/NovaSecao.tsx`
2. Implemente o componente
3. Importe em `client/src/pages/Home.tsx`
4. Adicione a seção ao JSX da página

### Adicionar Novo Card

1. Crie um novo arquivo em `client/src/components/cards/NovoCard.tsx`
2. Defina as props com TypeScript
3. Use em uma seção existente

### Adicionar Novo Componente UI

1. Use componentes shadcn/ui quando possível
2. Se necessário, crie em `client/src/components/ui/`
3. Mantenha a consistência com o design system

## 🚀 Deploy

### Build para Produção

```bash
pnpm build
```

Isso gera os arquivos otimizados em `dist/public/`.

### Servir Localmente

```bash
pnpm preview
```

### Deploy em Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Node.js:

- **Vercel**: Recomendado para React
- **Netlify**: Suporta builds estáticas
- **GitHub Pages**: Para versão estática
- **Servidor próprio**: Com Node.js

## 🐛 Troubleshooting

### Erro: "Cannot find module"

Limpe o cache e reinstale:
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Servidor não inicia

Verifique se a porta 3000 está disponível:
```bash
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows
```

### Estilos não aparecem

Certifique-se de que o Tailwind CSS está processando os arquivos. Verifique `vite.config.ts` e `client/src/index.css`.

## 📄 Licença

Este projeto é fornecido como está para uso do Cartório Luciana Carrilho de Moraes Marinho.

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, consulte a documentação dos frameworks utilizados:

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)

---

**Desenvolvido com ❤️ para o Cartório Luciana Carrilho de Moraes Marinho**

Última atualização: Dezembro de 2025
