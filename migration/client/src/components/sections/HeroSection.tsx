
export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-start pt-20"
      style={{
        backgroundImage: 'url(/images/hero-aerea.jpg)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 max-w-2xl">
        <div className="space-y-6">
          {/* Título Principal */}
          <h1 style={{ fontFamily: "Montserrat, sans-serif" }} className=" font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Seja bem vindo ao Cartório Luciana Carrilho de Moraes Marinho
          </h1>

          {/* Subtítulo */}
          <h2 style={{ fontFamily: "Montserrat, sans-serif" }} className=" font-semibold text-xl md:text-2xl text-white/90">
            Aqui você encontra informações importantes
          </h2>

          {/* Descrição */}
          <p style={{ fontFamily: "Source Sans Pro, sans-serif" }} className=" text-base md:text-lg text-white/80">
            Estamos prontos para atender suas solicitações
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              style={{ fontFamily: "Montserrat, sans-serif" }} className="px-8 py-3 bg-white text-primary  font-semibold rounded-lg hover:bg-primary-light hover:text-white transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contato
            </button>
            <button
              style={{ fontFamily: "Montserrat, sans-serif" }} className="px-8 py-3 border-2 border-white text-white  font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
              onClick={() => window.open('#', '_blank')}
            >
              Política de privacidade
            </button>
          </div>
        </div>
      </div>

      {/* Corte Diagonal Inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-white"
        style={{
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)',
        }}
      ></div>
    </section>
  );
}
