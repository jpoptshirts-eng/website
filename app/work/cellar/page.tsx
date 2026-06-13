import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CellarCaseStudy from "@/components/case-study/cellar/CellarCaseStudy";

export const metadata: Metadata = {
  title: "Waitrose Cellar — Case Study | Jacinto De Matos",
  description:
    "Realising a £2m CRM opportunity through MVP redefinition. A strategic product case study on customer accounts, roadmap prioritisation and delivery optimisation for Waitrose Cellar.",
};

export default function CellarPage() {
  return (
    <>
      <Header />
      <main className="case-study-page bg-white">
        <CellarCaseStudy />
      </main>
      <Footer />
    </>
  );
}
