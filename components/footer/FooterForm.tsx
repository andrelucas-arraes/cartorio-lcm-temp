// =====================================
// FOOTER FORM
// =====================================
// Formulário de contato que envia mensagem via WhatsApp

import { useState } from 'react';

export default function FooterForm() {
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

  // Envia dados do formulário via WhatsApp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { nome, sobrenome, email, mensagem } = formData;

    const whatsappMessage = `Olá, meu nome é ${nome} ${sobrenome}.\nEmail: ${email}\n\nMensagem: ${mensagem}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = '558698718166';

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

    // Limpa o formulário após envio
    setFormData({ nome: '', sobrenome: '', email: '', mensagem: '' });
  };

  return (
    <div className="space-y-6">
      <h3 style={{ fontFamily: "Montserrat, sans-serif" }} className="font-bold text-lg text-white">
        Fale Conosco
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome e Sobrenome */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
            style={{ fontFamily: "Source Sans Pro, sans-serif" }}
            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
            aria-label="Nome"
          />
          <input
            type="text"
            name="sobrenome"
            placeholder="Sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            required
            style={{ fontFamily: "Source Sans Pro, sans-serif" }}
            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
            aria-label="Sobrenome"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors"
          aria-label="Email"
        />

        {/* Mensagem */}
        <textarea
          name="mensagem"
          placeholder="Comentário ou Mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
          maxLength={255}
          rows={4}
          style={{ fontFamily: "Source Sans Pro, sans-serif" }}
          className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/60 transition-colors resize-none"
          aria-label="Mensagem"
        ></textarea>

        {/* Contador de caracteres */}
        <p style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="text-xs text-white/60">
          {formData.mensagem.length} de 255 caracteres no máximo.
        </p>

        {/* Botão Enviar */}
        <button
          type="submit"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          className="px-6 py-2 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 text-sm"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}