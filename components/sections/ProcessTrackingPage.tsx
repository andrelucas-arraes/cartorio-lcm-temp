import { Phone, Mail, AlertCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';


export default function ProcessTrackingPage() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Título */}
          <h2
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-primary mb-4"
          >
            Acompanhamento de Processo
          </h2>

          {/* Descrição */}
          <p
            style={{ fontFamily: "Source Sans Pro, sans-serif" }}
            className="text-base sm:text-lg text-foreground/70 mb-6 sm:mb-8"
          >
            Este serviço está em desenvolvimento. Em breve você poderá acompanhar o status de seus processos em tempo real.
          </p>

          {/* Aviso */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6 mb-6 sm:mb-8 rounded">
            <p
              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              className="text-yellow-800 font-semibold flex items-center gap-2 text-sm sm:text-base"
            >
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              Funcionalidade em desenvolvimento
            </p>
            <p
              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              className="text-yellow-700 text-xs sm:text-sm mt-2"
            >
              Estamos trabalhando para disponibilizar em breve. Enquanto isso, entre em contato conosco para informações sobre seus processos.
            </p>
          </div>

          {/* Botão desativado */}
          <button
            disabled
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-300 text-gray-500 font-bold rounded-lg cursor-not-allowed opacity-60 text-sm sm:text-base"
          >
            Acompanhar Processo (Indisponível)
          </button>

          {/* Alternativa de contato */}
          <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-white border border-border rounded-lg">
            <h3
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="font-bold text-lg sm:text-xl md:text-2xl text-primary mb-4"
            >
              Precisa de informações sobre seu processo?
            </h3>
            <p
              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              className="text-sm sm:text-base text-foreground/70 mb-6"
            >
              Entre em contato conosco através dos canais disponíveis:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="tel:+558698718166"
                className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Ligar
              </a>
              <a
                href="https://wa.me/558698718166"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href="mailto:cartorio1officiopi@hotmail.com"
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
