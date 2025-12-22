'use client'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from '@/components/ui/image';


export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo-lcm.svg"
            alt="LCM Cartório"
            className=" w-auto"
          />

        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" style={{ fontFamily: 'Source Sans Pro, sans-serif' }} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Início
          </a>

          {/* Dropdown: O Cartório */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('cartorio')}
              style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              O Cartório
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-white transition-colors">
                Missão
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-white transition-colors">
                Visão
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-white transition-colors">
                Valores
              </a>
            </div>
          </div>
          <a href="/nossos-servicos" style={{ fontFamily: "Source Sans Pro, sans-serif" }} className=" text-sm font-medium text-foreground hover:text-primary transition-colors">
            Nossos Serviços
          </a>
          <a href="/links" style={{ fontFamily: "Source Sans Pro, sans-serif" }} className=" text-sm font-medium text-foreground hover:text-primary transition-colors">
          Links Úteis
          </a>
          <a href="/lgpd" style={{ fontFamily: "Source Sans Pro, sans-serif" }} className=" text-sm font-medium text-foreground hover:text-primary transition-colors">
          LGPD
          </a>
          <a 
            href={pathname === '/' ? '#contato' : '/#contato'} 
            style={{ fontFamily: "Source Sans Pro, sans-serif" }} 
            className=" text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-primary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
