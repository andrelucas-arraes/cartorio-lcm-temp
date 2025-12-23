export default function HeroPage() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0"
      style={{
        backgroundImage: "url(/images/hero-aerea.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/40"></div>

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-0 text-center max-w-2xl">
        <h1
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 leading-tight"
        >
          Seja bem vindo ao Cartório Luciana Carrilho de Moraes Marinho
        </h1>

        <p
          style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          className="text-base sm:text-lg md:text-xl text-white/90 mb-3 md:mb-4"
        >
          Aqui você encontra informações importantes
        </p>

        <p
          style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          className="text-sm sm:text-base md:text-lg text-white/80 mb-8 md:mb-10"
        >
          Estamos prontos para atender suas solicitações
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#contato"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-all duration-300 text-sm sm:text-base text-center"
          >
            Contato
          </a>
          <a
            href="/nossos-servicos"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base text-center"
          >
            Nossos Serviços
          </a>
        </div>
      </div>

      {/* Corte diagonal inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-background hidden md:block"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)",
        }}
      ></div>
    </section>
  );
}
