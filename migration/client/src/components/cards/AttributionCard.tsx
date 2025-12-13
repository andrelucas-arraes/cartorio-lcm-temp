import Image from '@/components/ui/image';


interface AttributionCardProps {
  icon: string;
  title: string;
  description?: string;
}

export default function AttributionCard({ icon, title, description }: AttributionCardProps) {
  return (
    <div className="bg-primary/20 border-2 border-white/30 rounded-2xl p-8 text-center hover:border-white/60 transition-all duration-300 transform hover:scale-105">
      {/* Ícone */}
      <div className="flex justify-center mb-6">
        <Image
          src={icon}
          alt={title}
          width={80}
          height={80}
          className="h-20 w-20 object-contain"
        />
      </div>

      {/* Título */}
      <h3 style={{ fontFamily: "Montserrat, sans-serif" }} className=" font-bold text-xl text-white mb-2">
        {title}
      </h3>

      {/* Descrição */}
      {description && (
        <p style={{ fontFamily: "Source Sans Pro, sans-serif" }} className=" text-sm text-white/80">
          {description}
        </p>
      )}
    </div>
  );
}
