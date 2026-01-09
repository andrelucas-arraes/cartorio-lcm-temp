// =====================================
// FOOTER NAVIGATION
// =====================================
// Links de navegação do footer

export default function FooterNavigation() {
  const links = [
    { label: "Início", href: "/" },
    { label: "Nossos Serviços", href: "/nossos-servicos" },
    { label: "Links Úteis", href: "/links" },
    { label: "LGPD", href: "/lgpd" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div className="space-y-6">
      <h3 style={{ fontFamily: "Montserrat, sans-serif" }} className="font-bold text-lg text-white">
        Navegar
      </h3>

      <nav style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
          >
            <span>›</span>
            <span>{link.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}