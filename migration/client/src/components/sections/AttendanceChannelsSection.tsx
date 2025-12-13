
export default function AttendanceChannelsSection() {
  return (
    <section className="w-full py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 style={{ fontFamily: "Montserrat, sans-serif" }} className="font-bold text-3xl text-primary text-center mb-16">
          Canais de atendimento - Corregedoria Geral (CCJPE)
        </h2>

        {/* Grid de Canais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Presencial */}
          <div className="bg-white border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <h3 style={{ fontFamily: "Montserrat, sans-serif" }} className="font-bold text-lg text-primary">
                Presencial (7h às 19h)
              </h3>
            </div>
            <div style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="space-y-3 text-sm text-foreground">
              <p>
                <span className="font-semibold">Central de atendimento CCJPE - 5º andar</span>
                <br />
                do Fórum Thomaz de Aquino Cyrillo Wanderley
              </p>
              <p>
                <span className="font-semibold">Endereço:</span>
                <br />
                Avenida Martins de Barros, 593, Bairro de Santo Antônio, no Recife (PE).
              </p>
              <p>
                <span className="font-semibold">Horário:</span>
                <br />
                Das 07h às 19h
              </p>
            </div>
          </div>

          {/* Correio Eletrônico */}
          <div className="bg-white border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <h3 style={{ fontFamily: "Montserrat, sans-serif" }} className="font-bold text-lg text-primary">
                Correio Eletrônico
              </h3>
            </div>
            <div style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="space-y-3 text-sm text-foreground">
              <p>
                <span className="font-semibold">CCJPE - 6º andar do Fórum Thomaz de Aquino Cyrillo Wanderley</span>
              </p>
              <p>
                <span className="font-semibold">Endereço:</span>
                <br />
                Avenida Martins de Barros, 593, Bairro de Santo Antônio, no Recife (PE).
              </p>
              <p>
                <span className="font-semibold">CEP:</span>
                <br />
                50.010-230
              </p>
            </div>
          </div>

          {/* Telefônico e Outros */}
          <div className="bg-white border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <h3 style={{ fontFamily: "Montserrat, sans-serif" }} className="font-bold text-lg text-primary">
                Telefônico
              </h3>
            </div>
            <div style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="space-y-3 text-sm text-foreground">
              <p>
                <span className="font-semibold">(81) 3182-0998</span>
                <br />
                Das 07h às 19h
              </p>
              <p className="pt-4 border-t border-border">
                <span className="font-semibold flex items-center gap-2 mb-2">
                  Balcão Virtual (Cisco Webex)
                </span>
                <a href="https://tjpe.webex.com/meet/cgi-atendimento" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors break-all">
                  https://tjpe.webex.com/meet/cgi-atendimento
                </a>
                <br />
                <span className="text-xs text-muted-foreground">Das 08h às 19h</span>
              </p>
              <p className="pt-4 border-t border-border">
                <span className="font-semibold flex items-center gap-2 mb-2">
                  Correio Eletrônico (Email)
                </span>
                <a href="mailto:cgi.duesaa@tjpe.jus.br" className="text-primary hover:text-primary-light transition-colors break-all">
                  cgi.duesaa@tjpe.jus.br
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
