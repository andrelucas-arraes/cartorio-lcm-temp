import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';


export default function AttendanceChannelsDetailPage() {
  return (
    <section id='contato' className="w-full py-12 sm:py-16 md:py-24 bg-background ">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Título */}
        <h2
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="font-bold text-2xl sm:text-3xl text-primary text-center mb-8 sm:mb-12 md:mb-16"
        >
          Canais de Atendimento
        </h2>

        {/* Grid de Canais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Telefone */}
          <div className="bg-white border border-border rounded-lg p-6 sm:p-8">
            <div className="mb-4">
              <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
            <h3
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="font-bold text-lg sm:text-xl text-primary mb-4"
            >
              Telefone
            </h3>
            <div
              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              className="space-y-3 text-sm text-foreground"
            >
              <p>
                <span className="font-semibold">Número:</span>
                <br />
                <a href="tel:+558698718166" className="text-primary hover:underline">
                  +55 (86) 98871-8166
                </a>
              </p>
              <p>
                <span className="font-semibold">Horário:</span>
                <br />
                Segunda a Sexta: 08h às 17h
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white border border-border rounded-lg p-6 sm:p-8">
            <div className="mb-4">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
            <h3
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="font-bold text-lg sm:text-xl text-primary mb-4"
            >
              Email
            </h3>
            <div
              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              className="space-y-3 text-sm text-foreground"
            >
              <p>
                <span className="font-semibold">Endereço:</span>
                <br />
                <a
                  href="mailto:cartorio1oficiopi@hotmail.com"
                  className="text-primary hover:underline break-all"
                >
                  cartorio1oficiopi@hotmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Resposta:</span>
                <br />
                Até 24 horas úteis
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-white border border-border rounded-lg p-6 sm:p-8">
            <div className="mb-4">
              <FaWhatsapp className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
            </div>
            <h3
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="font-bold text-lg sm:text-xl text-primary mb-4"
            >
              WhatsApp
            </h3>
            <div
              style={{ fontFamily: "Source Sans Pro, sans-serif" }}
              className="space-y-3 text-sm text-foreground"
            >
              <p>
                <span className="font-semibold">Número:</span>
                <br />
                <a
                  href="https://wa.me/558698718166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  +55 (86) 98871-8166
                </a>
              </p>
              <p>
                <span className="font-semibold">Horário:</span>
                <br />
                Segunda a Sexta: 08h às 17h
              </p>
            </div>
          </div>
        </div>

        {/* Endereço Físico */}
        <div className="bg-white border border-border rounded-lg p-6 sm:p-8 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Informações */}
            <div>
              <h3
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="font-bold text-xl sm:text-2xl text-primary mb-4 sm:mb-6 flex items-center gap-2"
              >
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                Endereço Físico
              </h3>
              <div
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                className="space-y-4 text-foreground"
              >
                <p>
                  <span className="font-semibold">Rua Benedito Brito, nº. 352</span>
                  <br />
                  Bairro Centro
                  <br />
                  Alto Longá/PI
                </p>
                <p>
                  <span className="font-semibold">CEP:</span>
                  <br />
                  64.900-000
                </p>
              </div>
            </div>

            {/* Horário de Funcionamento */}
            <div>
              <h3
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="font-bold text-xl sm:text-2xl text-primary mb-4 sm:mb-6 flex items-center gap-2"
              >
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                Horário de Funcionamento
              </h3>
              <div
                style={{ fontFamily: "Source Sans Pro, sans-serif" }}
                className="space-y-2 text-foreground"
              >
                <p>
                  <span className="font-semibold">Segunda a Sexta:</span>
                  <br />
                  08h às 17h
                </p>
                <p>
                  <span className="font-semibold">Sábado e Domingo:</span>
                  <br />
                  Fechado
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="bg-white border border-border rounded-lg overflow-hidden shadow-sm">
          <iframe
            title="Localização do Cartório Luciana Carrilho"
            src="https://maps.google.com/maps?q=Rua+Benedito+Brito+352+Centro+Alto+Longa+PI&t=m&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            className="h-[300px] sm:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
