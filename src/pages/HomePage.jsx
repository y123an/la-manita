import HeroSection from "../components/HeroSection";
import Acercade from "../components/Acercade";
import Ventajas from "../components/Ventajas";
import Dudas from "../components/Dudas";
import Distrib from "../components/Distrib";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      <HeroSection />
      <Acercade />
      <Ventajas />
      <Distrib />
      <Dudas />
    </div>
  );
}
