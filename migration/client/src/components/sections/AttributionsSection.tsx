import AttributionCard from '@/components/cards/AttributionCard';


export default function AttributionsSection() {
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
      className="relative w-full py-24 bg-primary"
      style={{
        backgroundImage: 'url(/images/pattern-bg.png)',
        backgroundSize: '400px 400px',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Corte Diagonal Superior */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-white"
        style={{
          clipPath: 'polygon(0 0, 100% 50%, 100% 100%, 0 100%)',
          marginTop: '-6rem',
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Título */}
        <h2 style={{ fontFamily: "Montserrat, sans-serif" }} className=" font-bold text-4xl text-white text-center mb-16">
          ATRIBUIÇÕES
        </h2>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attributions.map((attr, index) => (
            <AttributionCard
              key={index}
              icon={attr.icon}
              title={attr.title}
            />
          ))}
        </div>
      </div>

      {/* Corte Diagonal Inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-white"
        style={{
          clipPath: 'polygon(0 0, 100% 50%, 100% 100%, 0 100%)',
          marginBottom: '-6rem',
        }}
      ></div>
    </section>
  );
}
