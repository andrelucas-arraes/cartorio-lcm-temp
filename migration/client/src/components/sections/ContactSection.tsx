import { useState } from 'react';
import Image from '@/components/ui/image';


export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Aqui você pode adicionar lógica para enviar o formulário
    alert('Mensagem enviada com sucesso!');
    setFormData({ nome: '', sobrenome: '', email: '', mensagem: '' });
  };

  return (
    <section id="contato" className="w-full py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coluna Esquerda - Informações */}
          <div className="space-y-8">
            {/* Logo */}
            <Image
              src="/images/logo-lcm.svg"
              alt="LCM Cartório"
              width={120}
              height={120}
              className="h-24 w-auto"
            />

            {/* Título */}
            <h2 style={{ fontFamily: "Montserrat, sans-serif" }} className=" font-bold text-3xl text-white">
              Contato
            </h2>

            {/* Informações de Contato */}
            <div style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="space-y-4  text-white/90">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="font-semibold">Endereço</p>
                  <p>R. Coronel Pedro Cícero, nº 347, Centro</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="font-semibold">Telefone</p>
                  <p>(87) 9 8841-0440</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>cartorio1oficiaria@hotmail.com</p>
                </div>
              </div>
            </div>

            {/* Links de Navegação */}
            <div>
              <h3 style={{ fontFamily: "Montserrat, sans-serif" }} className=" font-bold text-lg text-white mb-4">
                Navegar
              </h3>
              <nav style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="space-y-2  text-white/80">
                <a href="#institucional" className="block hover:text-white transition-colors">
                  › Institucional
                </a>
                <a href="#transparencia" className="block hover:text-white transition-colors">
                  › Transparência
                </a>
                <a href="#contato" className="block hover:text-white transition-colors">
                  › Contato
                </a>
              </nav>
            </div>
          </div>

          {/* Coluna Direita - Formulário */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome e Sobrenome */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome*"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="w-full px-4 py-3 bg-white text-foreground  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                  aria-label="Nome"
                />
                <input
                  type="text"
                  name="sobrenome"
                  placeholder="Sobrenome*"
                  value={formData.sobrenome}
                  onChange={handleChange}
                  required
                  style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="w-full px-4 py-3 bg-white text-foreground  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                  aria-label="Sobrenome"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="w-full px-4 py-3 bg-white text-foreground  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
                aria-label="Email"
              />

              {/* Mensagem */}
              <textarea
                name="mensagem"
                placeholder="Comentário ou Mensagem*"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={5}
                style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="w-full px-4 py-3 bg-white text-foreground  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light resize-none"
                aria-label="Mensagem"
              ></textarea>

              {/* Contador de caracteres */}
              <p style={{ fontFamily: "Source Sans Pro, sans-serif" }} className=" text-sm text-white/70">
                {formData.mensagem.length} de 255 caracteres no máximo.
              </p>

              {/* Botão Enviar */}
              <button
                type="submit"
                style={{ fontFamily: "Montserrat, sans-serif" }} className="px-8 py-3 bg-white text-primary  font-semibold rounded-lg hover:bg-primary-light hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
