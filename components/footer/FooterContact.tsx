// =====================================
// FOOTER CONTACT
// =====================================
// Informações de contato do cartório

import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function FooterContact() {
  return (
    <div className="space-y-6">
      <h3 style={{ fontFamily: "Montserrat, sans-serif" }} className="font-bold text-lg text-white">
        Contato
      </h3>

      <div style={{ fontFamily: "Source Sans Pro, sans-serif" }} className="space-y-4 text-white/80">
        {/* Endereço */}
        <div className="flex items-start gap-3">
          <MdLocationOn className="text-lg  mt-1"></MdLocationOn>
          <p className="text-sm leading-relaxed">
            Rua Benedito Brito, nº. 352
          </p>
        </div>

        {/* Telefone */}
        <div className="flex items-start gap-3">
          <FaPhone className="text-lg mt-1"></FaPhone>
          <p className="text-sm">+55 (86) 98871-8166</p>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <MdEmail className="text-lg mt-1"></MdEmail>
          <a
            href="mailto:cartorio1oficiopi@hotmail.com"
            className="text-sm hover:text-white transition-colors break-all"
          >
            cartorio1oficiopi@hotmail.com
          </a>
        </div>
      </div>
    </div>
  );
}