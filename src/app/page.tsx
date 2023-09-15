import NewProperties from "@/components/body/NewProperties";
import RecentOfforts from "@/components/body/RecentOfforts";
import Hero from "@/components/header/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="border border-gray-100">
      <Hero />
      <NewProperties />
      <RecentOfforts />
    </main>
  );
}
