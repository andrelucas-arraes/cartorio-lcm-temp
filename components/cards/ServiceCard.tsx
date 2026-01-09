// =====================================
// SERVICE CARD
// =====================================
// Card para exibir serviços do cartório

import Image from '@/components/ui/image';

interface ServiceCardProps {
  icon: string;
  title: string;
  description?: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white border border-border rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105">
      {/* Ícone com fundo circular */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={60}
            height={60}
            className="h-12 w-12 object-contain"
          />
        </div>
      </div>

      {/* Título */}
      <h3 style={{ fontFamily: "Montserrat, sans-serif" }} className=" font-bold text-lg text-primary mb-2">
        {title}
      </h3>

      {/* Descrição (opcional) */}
      {description && (
        <p style={{ fontFamily: "Source Sans Pro, sans-serif" }} className=" text-sm text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}