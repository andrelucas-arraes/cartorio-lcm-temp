import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import AttributionsPage from "@/pages/sections/AttributionsPage";
import HeroPage from "@/pages/sections/HeroPage";

import AttendanceChannelsDetailPage from "@/pages/sections/AttendanceChannelsDetailPage";
import ProcessTrackingPage from "@/pages/sections/ProcessTrackingPage";
import ServicesDetailPage from "@/pages/sections/ServicesDetailPage";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Header />
      <main>
        <HeroPage />
        <AttributionsPage />

        <ServicesDetailPage />
        <ProcessTrackingPage />
        <AttendanceChannelsDetailPage />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
