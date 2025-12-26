import AttributionCard from "@/components/cards/AttributionCard";
import { Globe, Smartphone, Monitor } from 'lucide-react';

export default function AttributionsPage() {
  const digitalServices = [
    {
      icon: "/images/icon-document.png",
      title: "Registro Civil Online",
    },
    {
      icon: "/images/icon-house.png",
      title: "Serviços Digitais de Imóveis",
    },
    {
      icon: "/images/icon-building.png",
      title: "Serviços Digitais de Títulos",
    },
  ];

  const platforms = [
    {
      name: "e-Notariado",
      description: "Plataforma oficial para serviços notariais digitais",
      icon: <Monitor className="w-8 h-8" />,
    },
    {
      name: "e-Cartório",
      description: "Sistema de serviços cartoriais online",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      name: "Registro Civil Online",
      description: "Plataforma para serviços de registro civil digital",
      icon: <Smartphone className="w-8 h-8" />,
    },
  ];

  return (
    <section
      className="relative w-full py-12 sm:py-16 md:py-24"
      style={{
        background: "linear-gradient(135deg, #511C23 0%, #3f1417 100%)",
        backgroundImage: "url(/images/pattern-bg.png)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Corte diagonal superior */}
      <div
        className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-background"
        style={{
          clipPath: "polygon(0 0, 100% 8%, 100% 100%, 0 100%)",
          marginTop: "-1px",
        }}
      ></div>

      <div className="container mx-auto px-4 pt-8 md:pt-12">
        {/* Título */}
        <h2
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="font-black text-2xl sm:text-3xl md:text-4xl text-white text-center mb-8 md:mb-16"
        >
          SERVIÇOS DIGITAIS
        </h2>

        {/* Grid de Cards de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {digitalServices.map((service, index) => (
            <AttributionCard
              key={index}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </div>

        {/* Plataformas Digitais */}
        <div className="mb-8 md:mb-12">
          <h3
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="font-bold text-xl sm:text-2xl md:text-3xl text-white text-center mb-6 md:mb-8"
          >
            Plataformas Disponíveis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20"
              >
                <div className="flex justify-center mb-4 text-white">
                  {platform.icon}
                </div>
                <h4
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  className="font-bold text-lg text-white mb-2"
                >
                  {platform.name}
                </h4>
                <p
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                  className="text-sm text-white/80"
                >
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corte diagonal inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-background"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)",
          marginBottom: "-1px",
        }}
      ></div>
    </section>
  );
}
