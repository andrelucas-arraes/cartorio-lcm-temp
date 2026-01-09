import FooterLogo from '@/components/footer/FooterLogo';
import FooterContact from '@/components/footer/FooterContact';
import FooterNavigation from '@/components/footer/FooterNavigation';
import FooterForm from '@/components/footer/FooterForm';
import FooterBottom from '@/components/footer/FooterBottom';

export default function Footer() {
  return (
    <footer className="bg-[#511C23] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Grid de 3 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8">
          {/* Coluna 1 - Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <FooterLogo />
          </div>

          {/* Coluna 2 - Navigation e Contato (empilhados) */}
          <div className="space-y-6 sm:space-y-8">
            <FooterNavigation />
            <FooterContact />
          </div>

          {/* Coluna 3 - Formulário */}
          <FooterForm />
        </div>

        {/* Linha Inferior */}
        <FooterBottom />
      </div>
    </footer>
  );
}