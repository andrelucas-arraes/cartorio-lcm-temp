'use client';

import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FaqListProps {
  faqs: FAQ[];
}

const ITEMS_PER_PAGE = 6;

export default function FaqList({ faqs }: FaqListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(faqs.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentFaqs = faqs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Lista de Acordeões da Página Atual */}
      <Accordion type="single" collapsible className="w-full flex-col gap-4">
        {currentFaqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-lg mb-4 hover:shadow-sm transition-all shadow-sm"
          >
            <AccordionTrigger
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              className="px-6 py-4 font-semibold text-lg text-[#702125] dark:text-red-400 text-left hover:no-underline"
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent
              style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
              className="px-6 pb-5 pt-2 text-gray-700 dark:text-gray-300 text-base leading-relaxed"
            >
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Paginação Estilizada */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                }}
                className={
                  currentPage === 1
                    ? 'pointer-events-none opacity-50'
                    : 'cursor-pointer text-[#702125] hover:bg-[#702125]/10 hover:text-[#702125]'
                }
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(i + 1);
                  }}
                  className={`cursor-pointer ${
                    currentPage === i + 1 
                      ? 'bg-[#702125] text-white hover:bg-[#702125]/90 hover:text-white' 
                      : 'text-[#702125] hover:bg-[#702125]/10 hover:text-[#702125]'
                  }`}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                }}
                className={
                  currentPage === totalPages
                    ? 'pointer-events-none opacity-50'
                    : 'cursor-pointer text-[#702125] hover:bg-[#702125]/10 hover:text-[#702125]'
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
