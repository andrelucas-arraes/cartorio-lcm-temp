export default function HeroPage() {
  return (
    // 1. Container Principal: Define a altura total (min-h-screen), alinhamento e imagem de fundo
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0"
      style={{
        backgroundImage: "url(/images/hero-aerea.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 2. Overlay: Camada semitransparente sobre a imagem para melhorar a leitura do texto */}
      <div className="absolute inset-0 bg-primary/40"></div>

      {/* 3. Container de Conteúdo Centralizado (Texto e Botões) */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-0 text-center max-w-2xl">
        
        {/* Título Principal */}
        <h1
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="font-black text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-white mb-4 md:mb-6 leading-tight"
        >
          Seja bem-vindo ao Cartório<br />
          Luciana Carrilho de Moraes Marinho
        </h1>

        {/* Subtítulos / Textos de Apoio */}
        <p
          style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-3 md:mb-4"
        >
          Aqui você encontra informações importantes
        </p>

        <p
          style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          className="text-xs sm:text-sm md:text-sm lg:text-base text-white/80 mb-8 md:mb-10"
        >
          Estamos prontos para atender suas solicitações
        </p>

        {/* 4. Botões de Ação (Call to Action) */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          {/* Botão Contato (Scroll suave via âncora) */}
          <a
            href="#contato"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base text-center"
          >
            Contato
          </a>
          
          {/* Botão Nossos Serviços (Navegação de página) */}
          <a
            href="/nossos-servicos"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base text-center"
          >
            Nossos Serviços
          </a>
        </div>
      </div>

      {/* 5. Elemento Decorativo: Corte diagonal na parte inferior (visível apenas em desktop) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-background hidden md:block"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)",
        }}
      ></div>
    </section>
  );
}