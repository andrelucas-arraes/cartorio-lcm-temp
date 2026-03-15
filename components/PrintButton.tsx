'use client';

import { Printer } from 'lucide-react';
import { useEffect } from 'react';

export default function PrintButton() {
  const handlePrint = () => {
    // Abra todos os "details" (sanfonas) antes de imprimir
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach((details) => {
      details.setAttribute('data-was-closed', !details.hasAttribute('open') ? 'true' : 'false');
      details.setAttribute('open', 'true');
    });

    // Pequeno atraso para garantir que o DOM renderizou o conteúdo exibido antes de abrir tela de print
    setTimeout(() => {
      window.print();
    }, 150);
  };

  useEffect(() => {
    // Ao fechar a janela de print (seja salvando ou cancelando), retornamos as sanfonas ao estado original
    const afterPrint = () => {
      const detailsElements = document.querySelectorAll('details');
      detailsElements.forEach((details) => {
        if (details.getAttribute('data-was-closed') === 'true') {
          details.removeAttribute('open');
        }
        details.removeAttribute('data-was-closed');
      });
    };

    window.addEventListener('afterprint', afterPrint);
    return () => window.removeEventListener('afterprint', afterPrint);
  }, []);

  return (
    <button
      onClick={handlePrint}
      className="hidden sm:flex items-center gap-2 text-gray-500 hover:text-[#702125] hover:bg-gray-50 transition-colors text-sm font-semibold px-4 py-2 rounded-lg border border-gray-200 shadow-sm disabled:opacity-50"
      aria-label="Imprimir checklist de documentação"
    >
      <Printer size={18} /> Imprimir Checklist
    </button>
  );
}
