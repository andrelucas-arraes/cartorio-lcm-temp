/**
 * FooterBottom Component
 * 
 * Linha inferior do footer com:
 * - Copyright à esquerda
 * - Nome do cartório no centro
 * - Desenvolvimento à direita
 * - Linha divisória superior
 */
export default function FooterBottom() {
  return (
    <div className="border-t border-white/20 pt-8 mt-8">
      <div
        style={{ fontFamily: "Source Sans Pro, sans-serif" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left text-xs text-white/70"
      >
        {/* Esquerda - Copyright */}
        <div>
          <p>Copyright © {new Date().getFullYear()} Cartório Luciana Carrilho de Moraes Marinho</p>
        </div>

        {/* Centro - Nome do Cartório */}
        <div className="md:text-center">
          <p>Luciana Carrilho de Moraes Marinho</p>
        </div>

        {/* Direita - Desenvolvimento */}
        <div className="md:text-right">
          <p className="text-white/90 font-medium inline">
            Desenvolvido por:{' '}
            <a
              href="https://gabriellucasafb.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors hover:underline text-xs"
            >
              Gabriel Lucas
            </a>
            {', '}
            <a
              href="https://www.viniccius.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors hover:underline text-xs"
            >
              Vinicius Souza
            </a>
            {' e '}
            <a
              href="https://github.com/andrearraesDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors hover:underline text-xs"
            >
              André Arraes
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
