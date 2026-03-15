import Image from 'next/image';

export default function HeroPage() {
  return (
    // 1. Container Principal: Define a altura total (min-h-screen), alinhamento
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0"
    >
      {/* 2. Imagem de Fundo otimizada com Next Image */}
      <Image
        src="/images/hero-aerea.jpg"
        alt="Vista aérea de Alto Longá, Piauí"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={80}
      />

      {/* 3. Overlay: Camada semitransparente sobre a imagem para melhorar a leitura do texto */}
      <div className="absolute inset-0 bg-primary/40 z-[1]"></div>

      {/* 4. Container de Conteúdo Centralizado (Texto e Botões) */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-0 text-center max-w-5xl">
        
        {/* Título Principal */}
        <h1
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="font-black text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:mb-6 leading-tight drop-shadow-lg"
        >
          Seja bem-vindo ao Cartório<br />
          Luciana Carrilho de Moraes Marinho
        </h1>

        {/* Nome oficial da serventia - importante para SEO */}
        <p
          style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 font-semibold tracking-wider uppercase drop-shadow-md"
        >
          Serventia Extrajudicial do Ofício Único de Alto Longá-PI
        </p>

        {/* Subtítulos / Textos de Apoio */}
        <p
          style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          className="text-base sm:text-lg md:text-xl text-white/95 mb-8 md:mb-10 leading-relaxed font-medium drop-shadow-md max-w-5xl mx-auto"
        >
          Aqui você encontra informações importantes. <br className="hidden md:block" /> Estamos prontos para atender as suas solicitações oferecendo soluções práticas, céleres e inteligentes.
        </p>


        {/* 5. Botões de Ação (Call to Action) */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          {/* Botão Contato (Scroll suave via âncora) */}
          <a
            href="#contato"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base text-center"
          >
            Contatos
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

      {/* 6. Elemento Decorativo: Corte diagonal na parte inferior (visível apenas em desktop) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-background hidden md:block z-[2]"
        style={{
          clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)",
        }}
      ></div>
    </section>
  );
}