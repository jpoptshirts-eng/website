import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutFocus from "@/components/about/AboutFocus";
import AboutHowItWorks from "@/components/about/AboutHowItWorks";
import AboutBanner from "@/components/about/AboutBanner";

export const metadata: Metadata = {
  title: "About — Jacinto De Matos",
  description:
    "Senior Product Designer based in London. Turning complex problems into simple, useful and human digital experiences.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-cream">
        <AboutHero />
        <AboutFocus />
        <AboutHowItWorks />
        <AboutBanner />
      </main>
      <Footer />
    </>
  );
}
