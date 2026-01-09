import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  
  // 1. Configuração dos dados de contato e mensagem
  const phoneNumber = '558698718166';
  const message = 'Olá! Gostaria de mais informações sobre os serviços do cartório.';
  
  // Cria a URL formatada (codificando a mensagem para URL segura)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    // 2. Botão Flutuante (Fixed)
    // Posicionado no canto inferior direito (bottom-6 right-6) com Z-Index alto
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
}