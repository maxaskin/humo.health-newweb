import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Evidence from "@/components/Evidence";
import WhoItsFor from "@/components/WhoItsFor";
import Resources from "@/components/Resources";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Evidence />
        <WhoItsFor />
        <Resources />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
