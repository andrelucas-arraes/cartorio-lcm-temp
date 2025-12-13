import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';


export default function AttendanceChannelsDetailPage() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="font-bold text-3xl text-primary text-center mb-16"
        >
          Canais de Atendimento
        </h2>

        {/* Grid de Canais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Telefone */}
          <div className="bg-white border border-border rounded-lg p-8">
            <div className="mb-4">
              <Phone className="w-10 h-10 text-primary" />
            </div>
            <h3
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="font-bold text-xl text-primary mb-4"
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
          <div className="bg-white border border-border rounded-lg p-8">
            <div className="mb-4">
              <Mail className="w-10 h-10 text-primary" />
            </div>
            <h3
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="font-bold text-xl text-primary mb-4"
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
          <div className="bg-white border border-border rounded-lg p-8">
            <div className="mb-4">
              <MessageCircle className="w-10 h-10 text-primary" />
            </div>
            <h3
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="font-bold text-xl text-primary mb-4"
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
        <div className="bg-white border border-border rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informações */}
            <div>
              <h3
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="font-bold text-2xl text-primary mb-6 flex items-center gap-2"
              >
                <MapPin className="w-6 h-6" />
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
                className="font-bold text-2xl text-primary mb-6 flex items-center gap-2"
              >
                <Clock className="w-6 h-6" />
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
                <p className="text-sm text-foreground/70 mt-4">
                  ℹ️ Atendimento presencial mediante agendamento prévio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mapa (Opcional) */}
        <div className="bg-white border border-border rounded-lg overflow-hidden">
          <iframe
            title="Localização do Cartório"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.6789!2d-41.2!3d-4.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzAnMDAuMCJTIDQxwrAxMicwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="400"
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
