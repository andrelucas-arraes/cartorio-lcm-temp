import ServiceCard from '@/components/cards/ServiceCard';


export default function ServicesSection() {
  const services = [
    {
      icon: '/images/icon-checklist.png',
      title: 'Tabela de custas',
    },
    {
      icon: '/images/icon-building-services.png',
      title: 'Solicitação de Certidões',
    },
    {
      icon: '/images/icon-document-services.png',
      title: 'Edital',
    },
    {
      icon: '/images/icon-checklist.png',
      title: 'Serviço 4',
    },
    {
      icon: '/images/icon-building-services.png',
      title: 'Serviço 5',
    },
    {
      icon: '/images/icon-document-services.png',
      title: 'Serviço 6',
    },
  ];

  return (
    <section id="servicos" className="w-full py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 style={{ fontFamily: "Montserrat, sans-serif" }} className=" font-bold text-3xl text-primary text-center mb-16">
          Principais serviços
        </h2>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
