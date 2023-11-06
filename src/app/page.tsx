import NewProperties from "@/components/body/NewProperties";
import OffertsStatistic from "@/components/body/OffertsStatistic";
import RecentOfforts from "@/components/body/RecentOfforts";
import Hero from "@/components/header/Hero";
import CallToAction from "@/ui/CTA/CallToAction";
import Footer from "@/ui/footer/Footer";
import WorkingStep from "@/ui/steps/WorkingStep";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import HowItWorks from "@/components/body/HowItWorks";
import AgentsRating from "@/components/body/AgentsRating";
import PricesPack from "@/components/body/PricesPack";
import Add from "@/components/body/Add";
import Articles from "@/components/body/Articles";

export default function Home() {
  return (
    <main className="border border-gray-100">
      <Hero />
      <OffertsStatistic />
      <NewProperties />
      <RecentOfforts />
      <HowItWorks />
      <CallToAction />
      <AgentsRating />
      <PricesPack />
      <Add />
      <Articles />
      <CallToAction />
      <Footer />
    </main>
  );
}
