import AttributionCard from "@/components/cards/AttributionCard";


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
