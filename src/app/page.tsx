import NewProperties from "@/components/body/NewProperties";
import RecentOfforts from "@/components/body/RecentOfforts";
import Hero from "@/components/header/Hero";
import CallToAction from "@/ui/CTA/CallToAction";
import Footer from "@/ui/footer/Footer";
import WorkingStep from "@/ui/steps/WorkingStep";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";

export default function Home() {
  return (
    <main className="border border-gray-100">
      <Hero />
      <NewProperties />
      <RecentOfforts />
      <CallToAction />
      <Footer />
    </main>
  );
}
