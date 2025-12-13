import AttributionCard from '@/components/cards/AttributionCard';


export default function AttributionsPage() {
  const attributions = [
    {
      icon: '/images/icon-house.png',
      title: 'Registro de imóveis',
    },
    {
      icon: '/images/icon-document.png',
      title: 'Registro de títulos e documentos',
    },
    {
      icon: '/images/icon-building.png',
      title: 'Registro de pessoas jurídicas',
    },
  ];

  return (
    <section
      className="relative w-full py-24"
      style={{
        background: 'linear-gradient(135deg, #511C23 0%, #3f1417 100%)',
        backgroundImage: 'url(/images/pattern-bg.png)',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Corte diagonal superior */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-background"
        style={{
          clipPath: 'polygon(0 0, 100% 8%, 100% 100%, 0 100%)',
          marginTop: '-1px',
        }}
      ></div>

      <div className="container mx-auto px-4 pt-12">
        {/* Título */}
        <h2
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="font-black text-4xl text-white text-center mb-16"
        >
          ATRIBUIÇÕES
        </h2>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {attributions.map((attribution, index) => (
            <AttributionCard
              key={index}
              icon={attribution.icon}
              title={attribution.title}
            />
          ))}
        </div>
      </div>

      {/* Corte diagonal inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-background"
        style={{
          clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)',
          marginBottom: '-1px',
        }}
      ></div>
    </section>
  );
}
