/**
 * FooterLogo Component
 * 
 * Exibe o logo "LCM" em grande tamanho no footer.
 * - Fonte serifada e espessa
 * - Cor branca
 * - Tamanho responsivo (70px a 110px)
 */
export default function FooterLogo() {
  return (
    <div className="flex items-center justify-center">
      <h2
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="font-black text-6xl md:text-7xl lg:text-8xl text-white leading-none"
      >
        <img src="/images/logo-footer.svg" alt="" />
      </h2>
    </div>
  );
}
