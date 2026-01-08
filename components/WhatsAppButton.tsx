import Image from '@/components/ui/image';

export default function WhatsAppButton() {
  const whatsappNumber = '558698718166'; // +55 (86) 98871-8166
  const whatsappMessage = 'Olá! Gostaria de mais informações sobre os serviços do Cartório LCM.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
      aria-label="Abrir WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <Image src="/images/image.png" alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
}
