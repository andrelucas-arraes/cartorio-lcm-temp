# Documentação dos Componentes

Este documento descreve cada componente da landing page, suas responsabilidades e como utilizá-los.

## 📋 Índice de Componentes

1. [Layout](#layout)
   - [Header](#header)
   - [Footer](#footer)
2. [Seções](#seções)
   - [HeroSection](#herosection)
   - [AttributionsSection](#attributionssection)
   - [ServicesSection](#servicessection)
   - [ContactSection](#contactsection)
3. [Cards](#cards)
   - [AttributionCard](#attributioncard)
   - [ServiceCard](#servicecard)
4. [Utilitários](#utilitários)
   - [Image](#image)

---

## Layout

### Header

**Localização**: `client/src/components/Header.tsx`

**Responsabilidade**: Componente de navegação fixa no topo da página com logo, menu e dropdowns.

**Props**: Nenhuma

**Recursos**:
- Logo LCM com subtítulo
- Menu de navegação com links
- Dropdowns para "O Cartório" e "Legislação e Normas"
- Responsivo com menu mobile
- Sticky/fixed no topo

**Uso**:
```tsx
import Header from '@/components/Header';

export default function App() {
  return <Header />;
}
```

**Estilo**: 
- Fundo branco com sombra
- Altura fixa
- Padding responsivo
- Cores primárias para links ativos

---

### Footer

**Localização**: `client/src/components/Footer.tsx`

**Responsabilidade**: Componente de rodapé com informações de contato, links e copyright.

**Props**: Nenhuma

**Recursos**:
- Logo LCM
- Informações de contato (endereço, telefone, email)
- Links de navegação
- Copyright e créditos
- Grid responsivo

**Uso**:
```tsx
import Footer from '@/components/Footer';

export default function App() {
  return <Footer />;
}
```

**Estilo**:
- Fundo vinho (#511C23)
- Texto branco/claro
- Ícones de localização, telefone e email
- Divisor horizontal

---

## Seções

### HeroSection

**Localização**: `client/src/components/sections/HeroSection.tsx`

**Responsabilidade**: Seção principal com imagem de fundo, overlay, título e botões de ação.

**Props**: Nenhuma

**Recursos**:
- Altura 100vh
- Imagem de fundo (vista aérea)
- Overlay com transparência
- Título principal
- Subtítulo
- Descrição
- Dois botões (Contato e Política de Privacidade)
- Corte diagonal inferior
- Responsivo

**Uso**:
```tsx
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return <HeroSection />;
}
```

**Estilo**:
- Background-image com overlay
- Texto branco
- Botões com hover effects
- Clip-path para corte diagonal

**Customização**:
- Altere `backgroundImage` para mudar a imagem
- Edite o título e subtítulo no JSX
- Modifique os botões conforme necessário

---

### AttributionsSection

**Localização**: `client/src/components/sections/AttributionsSection.tsx`

**Responsabilidade**: Seção que exibe as atribuições do cartório em cards.

**Props**: Nenhuma

**Recursos**:
- Fundo vinho com padrão geométrico
- Título "ATRIBUIÇÕES"
- Grid de 3 cards
- Cortes diagonais superior e inferior
- Ícones customizados
- Responsivo

**Uso**:
```tsx
import AttributionsSection from '@/components/sections/AttributionsSection';

export default function Home() {
  return <AttributionsSection />;
}
```

**Estilo**:
- Fundo primário com padrão
- Texto branco
- Cards com bordas claras
- Hover effects com scale

**Customização**:
- Adicione/remova atribuições no array `attributions`
- Altere ícones atualizando os caminhos
- Modifique títulos conforme necessário

---

### ServicesSection

**Localização**: `client/src/components/sections/ServicesSection.tsx`

**Responsabilidade**: Seção que exibe os principais serviços em um grid de cards.

**Props**: Nenhuma

**Recursos**:
- Fundo branco suave
- Título "Principais serviços"
- Grid responsivo (1, 2 ou 3 colunas)
- 6 cards de serviços
- Ícones circulares
- Hover effects

**Uso**:
```tsx
import ServicesSection from '@/components/sections/ServicesSection';

export default function Home() {
  return <ServicesSection />;
}
```

**Estilo**:
- Fundo claro (#F7F5F5)
- Cards brancos com bordas
- Ícones em círculos vinho
- Sombras ao passar o mouse

**Customização**:
- Adicione/remova serviços no array `services`
- Altere ícones e títulos
- Modifique a descrição se necessário

---

### ContactSection

**Localização**: `client/src/components/sections/ContactSection.tsx`

**Responsabilidade**: Seção com informações de contato e formulário de comunicação.

**Props**: Nenhuma

**Recursos**:
- Fundo vinho
- Logo LCM
- Informações de contato (endereço, telefone, email)
- Links de navegação
- Formulário com validação
- Campos: Nome, Sobrenome, Email, Mensagem
- Contador de caracteres
- Botão enviar
- Grid responsivo

**Uso**:
```tsx
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return <ContactSection />;
}
```

**Estilo**:
- Fundo primário
- Texto branco
- Inputs brancos
- Botão com hover effects

**Customização**:
- Altere informações de contato
- Modifique links de navegação
- Adicione lógica de envio do formulário
- Customize validações conforme necessário

---

## Cards

### AttributionCard

**Localização**: `client/src/components/cards/AttributionCard.tsx`

**Responsabilidade**: Card individual para exibir uma atribuição do cartório.

**Props**:
```tsx
interface AttributionCardProps {
  icon: string;        // Caminho da imagem do ícone
  title: string;       // Título da atribuição
  description?: string; // Descrição (opcional)
}
```

**Recursos**:
- Ícone customizável
- Título
- Descrição opcional
- Bordas com transparência
- Hover effects

**Uso**:
```tsx
import AttributionCard from '@/components/cards/AttributionCard';

export default function MyComponent() {
  return (
    <AttributionCard
      icon="/images/icon-house.png"
      title="Registro de imóveis"
      description="Descrição opcional"
    />
  );
}
```

**Estilo**:
- Fundo semi-transparente
- Bordas brancas
- Texto branco
- Scale transform no hover

---

### ServiceCard

**Localização**: `client/src/components/cards/ServiceCard.tsx`

**Responsabilidade**: Card individual para exibir um serviço do cartório.

**Props**:
```tsx
interface ServiceCardProps {
  icon: string;        // Caminho da imagem do ícone
  title: string;       // Título do serviço
  description?: string; // Descrição (opcional)
}
```

**Recursos**:
- Ícone em círculo vinho
- Título
- Descrição opcional
- Bordas suaves
- Sombras
- Hover effects

**Uso**:
```tsx
import ServiceCard from '@/components/cards/ServiceCard';

export default function MyComponent() {
  return (
    <ServiceCard
      icon="/images/icon-checklist.png"
      title="Tabela de custas"
      description="Descrição opcional"
    />
  );
}
```

**Estilo**:
- Fundo branco
- Ícone em círculo primário
- Bordas cinzas
- Sombra ao passar o mouse

---

## Utilitários

### Image

**Localização**: `client/src/components/ui/image.tsx`

**Responsabilidade**: Wrapper para imagens com suporte a atributos padrão HTML.

**Props**:
```tsx
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
```

**Recursos**:
- Wrapper simples para `<img>`
- Suporta todos os atributos HTML
- TypeScript typing

**Uso**:
```tsx
import Image from '@/components/ui/image';

export default function MyComponent() {
  return (
    <Image
      src="/images/logo.svg"
      alt="Logo"
      width={100}
      height={100}
      className="h-12 w-auto"
    />
  );
}
```

---

## Estrutura de Dados

### Atribuições

```tsx
const attributions = [
  {
    icon: '/images/icon-house.png',
    title: 'Registro de imóveis',
  },
  // ...
];
```

### Serviços

```tsx
const services = [
  {
    icon: '/images/icon-checklist.png',
    title: 'Tabela de custas',
  },
  // ...
];
```

### Formulário de Contato

```tsx
const formData = {
  nome: string;
  sobrenome: string;
  email: string;
  mensagem: string;
};
```

---

## Padrões de Design

### Tipografia

Todos os componentes usam as fontes configuradas globalmente:

- **Montserrat**: Títulos e headings (via `style={{ fontFamily: "Montserrat, sans-serif" }}`)
- **Source Sans Pro**: Corpo e textos (via `style={{ fontFamily: "Source Sans Pro, sans-serif" }}`)

### Cores

Todas as cores são definidas em `client/src/index.css` como variáveis CSS:

- `--primary`: #511C23
- `--primary-foreground`: #F7F5F5
- `--primary-dark`: #3f1417
- `--primary-light`: #7a2a2f

### Espaçamento

Tailwind CSS fornece um sistema de espaçamento consistente:

- `p-4`: Padding de 1rem
- `gap-8`: Gap de 2rem
- `mb-4`: Margin-bottom de 1rem

### Responsividade

Breakpoints Tailwind:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## Boas Práticas

1. **Sempre use TypeScript**: Defina interfaces para props
2. **Componentes pequenos**: Cada componente deve ter uma responsabilidade
3. **Reutilize componentes**: Use cards em múltiplas seções
4. **Mantenha o design consistente**: Use as cores e fontes definidas
5. **Teste responsividade**: Verifique em diferentes tamanhos de tela
6. **Adicione comentários**: Documente componentes complexos

---

## Próximos Passos

Para expandir o projeto:

1. Adicione mais seções conforme necessário
2. Implemente backend para formulário de contato
3. Adicione animações com Framer Motion
4. Implemente temas dark/light
5. Adicione SEO meta tags
6. Configure analytics

---

**Última atualização**: Dezembro de 2025
