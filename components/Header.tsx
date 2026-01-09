'use client'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from '@/components/ui/image';
import { Home, Briefcase, Link2, Shield, Mail, X } from 'lucide-react';

export default function Header() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Fechar menu quando a rota mudar
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevenir scroll do body quando menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { href: '/', label: 'Início', icon: Home, isActive: pathname === '/' },
    { href: '/nossos-servicos', label: 'Nossos Serviços', icon: Briefcase, isActive: pathname === '/nossos-servicos' },
    { href: '/links', label: 'Links Úteis', icon: Link2, isActive: pathname === '/links' },
    { href: '/lgpd', label: 'LGPD', icon: Shield, isActive: pathname === '/lgpd' },
    { href: pathname === '/' ? '#contato' : '/#contato', label: 'Contato', icon: Mail, isActive: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* ALTERAÇÃO AQUI: 
         Reduzi o 'py-3 sm:py-4' para 'py-1 sm:py-2'. 
         Isso diminui o espaço sobrando em cima e em baixo, compensando a logo maior.
      */}
      <div className="container mx-auto px-3 sm:px-4 py-1 sm:py-2 flex items-center justify-between">
        
        {/* Logo Grande */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logo_Luciana02.png"
              alt="LCM Cartório"
              className="w-auto h-10 sm:h-12 md:h-16 transition-all duration-300" 
            />
          </Link>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden min-[771px]:flex items-center gap-3 min-[1018px]:gap-4 xl:gap-6 2xl:gap-8">
          <Link
            href="/"
            style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
            className={`text-xs min-[771px]:text-xs min-[1018px]:text-sm font-medium hover:text-[#702125] transition-colors relative pb-1 whitespace-nowrap ${pathname === '/' ? 'text-[#702125]' : 'text-foreground'
              }`}
          >
            Início
            {pathname === '/' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#702125]"></span>
            )}
          </Link>
          <a
            href="/nossos-servicos"
            style={{ fontFamily: "Source Sans Pro, sans-serif" }}
            className={`text-xs min-[771px]:text-xs min-[1018px]:text-sm font-medium hover:text-[#702125] transition-colors relative pb-1 whitespace-nowrap ${pathname === '/nossos-servicos' ? 'text-[#702125]' : 'text-foreground'
              }`}
          >
            Nossos Serviços
            {pathname === '/nossos-servicos' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#702125]"></span>
            )}
          </a>
          <a
            href="/links"
            style={{ fontFamily: "Source Sans Pro, sans-serif" }}
            className={`text-xs min-[771px]:text-xs min-[1018px]:text-sm font-medium hover:text-[#702125] transition-colors relative pb-1 whitespace-nowrap ${pathname === '/links' ? 'text-[#702125]' : 'text-foreground'
              }`}
          >
            Links Úteis
            {pathname === '/links' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#702125]"></span>
            )}
          </a>
          <a
            href="/lgpd"
            style={{ fontFamily: "Source Sans Pro, sans-serif" }}
            className={`text-xs min-[771px]:text-xs min-[1018px]:text-sm font-medium hover:text-[#702125] transition-colors relative pb-1 whitespace-nowrap ${pathname === '/lgpd' ? 'text-[#702125]' : 'text-foreground'
              }`}
          >
            LGPD
            {pathname === '/lgpd' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#702125]"></span>
            )}
          </a>
          <a
            href={pathname === '/' ? '#contato' : '/#contato'}
            style={{ fontFamily: "Source Sans Pro, sans-serif" }}
            className="text-xs lg:text-sm font-medium text-foreground hover:text-[#702125] transition-colors relative pb-1 whitespace-nowrap"
          >
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="min-[771px]:hidden p-2.5 text-[#702125] hover:bg-[#702125]/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#702125] focus:ring-offset-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 transition-transform duration-200" strokeWidth={2.5} />
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 min-[771px]:hidden animate-in fade-in duration-200"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out min-[771px]:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="bg-[#702125] text-white px-6 py-5 flex items-center justify-between shadow-lg">
          <div className="flex items-center">
            <span style={{ fontFamily: "Montserrat, sans-serif" }} className="font-bold text-xl text-white">
              Menu
            </span>
          </div>
          <button
            onClick={closeMobileMenu}
            className="p-2 hover:bg-white/20 active:bg-white/30 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6 text-white" strokeWidth={3} />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100%-73px)] overflow-y-auto py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                className={`group relative flex items-center gap-4 px-6 py-4 mx-3 mb-1 rounded-xl transition-all duration-200 ${item.isActive
                  ? 'bg-[#702125] text-white shadow-md'
                  : 'text-foreground hover:bg-[#702125]/5 hover:text-[#702125]'
                  }`}
              >
                <div className={`flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200 shrink-0 ${item.isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-[#702125]/10 text-[#702125] group-hover:bg-[#702125]/20'
                  }`}>
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <span className={`font-semibold text-base flex-1 ${item.isActive ? 'text-white' : ''}`}>
                  {item.label}
                </span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 shrink-0 ${item.isActive
                    ? 'text-white'
                    : 'text-foreground/30 group-hover:text-[#702125] group-hover:translate-x-1'
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {item.isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-white rounded-r-full"></div>
                )}
              </a>
            );
          })}
        </div>

        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50/50">
          <p style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="text-xs text-foreground/60 text-center">
            © {new Date().getFullYear()} Cartório LCM
          </p>
        </div>
      </nav>
    </header>
  );
}