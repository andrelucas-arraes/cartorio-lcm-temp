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
          <p>Copyright © 2025 Cartório do 1º Cartório</p>
        </div>

        {/* Centro - Nome do Cartório */}
        <div className="md:text-center">
          <p>Luciana Carrilho de Moraes Marinho</p>
        </div>

        {/* Direita - Desenvolvimento */}
        <div className="md:text-right">
          <p>Desenvolvimento: <span className="text-white/80">-</span></p>
        </div>
      </div>
    </div>
  );
}
