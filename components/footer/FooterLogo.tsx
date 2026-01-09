// =====================================
// FOOTER LOGO
// =====================================
// Logo do cartório no footer

import Image from '@/components/ui/image';

export default function FooterLogo() {
  return (
    <div className="flex items-center justify-center">
      <h2
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="font-black text-6xl md:text-7xl lg:text-8xl text-white leading-none"
      >
        <Image src="/images/logo-footer.svg" alt="LCM" />
      </h2>
    </div>
  );
}
