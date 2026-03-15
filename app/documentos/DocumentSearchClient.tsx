'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, FileText, ChevronRight } from 'lucide-react';
import { servicosDocs } from '@/lib/data/documentos';

export default function DocumentSearchClient() {
  const [searchTerm, setSearchTerm] = useState('');

  // Extract unique categories
  const categories = Array.from(new Set(servicosDocs.map((doc) => doc.categoria)));

  // Filter based on search term (title or category)
  const filteredDocs = servicosDocs.filter((doc) => {
    const term = searchTerm.toLowerCase();
    return (
      doc.titulo.toLowerCase().includes(term) ||
      doc.categoria.toLowerCase().includes(term)
    );
  });

  return (
    <section className="container mx-auto px-4 max-w-5xl -mt-8 relative z-10">

      {/* Search Input Box */}
      <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 mb-10 border border-gray-100">
        <Search className="w-6 h-6 text-[lab(19_25.78_8.75)] ml-2" />
        <input
          type="text"
          placeholder="Qual serviço você está buscando?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent border-none text-gray-800 text-lg focus:outline-none focus:ring-0 placeholder:text-gray-400"
        />
      </div>

      {/* Categories / Filtered Results */}
      <div className="space-y-12">
        {categories.map((category) => {
          // Get docs in this category that also match the search
          const docsInCategory = filteredDocs.filter((doc) => doc.categoria === category);

          // Hide category if no docs match the search
          if (docsInCategory.length === 0) return null;

          return (
            <div key={category} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                className="text-2xl font-bold text-[lab(19_25.78_8.75)] mb-6 flex items-center gap-2 border-b-2 border-[lab(19_25.78_8.75)]/10 pb-2"
              >
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {docsInCategory.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/documentos/${doc.slug}`}
                    className="group"
                  >
                    <div className="bg-white flex flex-col h-full rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 group-hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-[lab(19_25.78_8.75)]/10 p-3 rounded-xl text-[lab(19_25.78_8.75)] group-hover:bg-[lab(19_25.78_8.75)] group-hover:text-white transition-colors duration-300">
                          <FileText size={24} />
                        </div>
                        <h3
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                          className="text-xl font-bold text-gray-800 group-hover:text-[lab(19_25.78_8.75)] transition-colors leading-tight"
                        >
                          {doc.titulo}
                        </h3>
                      </div>
                      <p
                        style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
                        className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1"
                      >
                        {doc.descricao}
                      </p>
                      <div className="flex items-center text-[lab(19_25.78_8.75)] font-semibold text-sm group-hover:underline mt-auto">
                        Ver documentos <ChevronRight size={18} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filteredDocs.length === 0 && (
        <div className="text-center py-20">
          <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Nenhum serviço encontrado</h3>
          <p className="text-gray-500 text-lg">Não encontramos nenhum documento para "{searchTerm}". Tente outra palavra-chave.</p>
        </div>
      )}

    </section>
  );
}
