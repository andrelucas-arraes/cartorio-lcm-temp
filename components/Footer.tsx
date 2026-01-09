import FooterLogo from '@/components/footer/FooterLogo';
import FooterContact from '@/components/footer/FooterContact';
import FooterNavigation from '@/components/footer/FooterNavigation';
import FooterForm from '@/components/footer/FooterForm';
import FooterBottom from '@/components/footer/FooterBottom';

export default function Footer() {
  return (
    // 1. Container Principal do Rodapé: Define a cor de fundo institucional (Vinho) e texto branco
    <footer className="bg-[#511C23] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        
        {/* 2. Grid de Layout Responsivo */}
        {/* Mobile: 1 coluna | Tablet: 2 colunas | Desktop: 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8">
          
          {/* Coluna 1: Logotipo */}
          {/* Centralizado no mobile, alinhado à esquerda no desktop */}
          <div className="flex items-center justify-center md:justify-start">
            <FooterLogo />
          </div>

          {/* Coluna 2: Navegação e Informações de Contato */}
          {/* Componentes empilhados verticalmente com espaçamento */}
          <div className="space-y-6 sm:space-y-8">
            <FooterNavigation />
            <FooterContact />
          </div>

          {/* Coluna 3: Formulário de Contato Rápido */}
          <FooterForm />
        </div>

        {/* 3. Seção Inferior: Copyright e créditos */}
        <FooterBottom />
      </div>
    </footer>
  );
}