import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KaizenLanguagesOverview from "@/components/case-study/kaizen-languages/KaizenLanguagesOverview";

export const metadata: Metadata = {
  title: "Kaizen Languages — Case Study | Jacinto De Matos",
  description:
    "Designing an AI-powered language learning experience around confidence, motivation and retention. A Kaizen Languages case study on mobile product design, behavioural UX and subscription conversion.",
};

export default function KaizenLanguagesPage() {
  return (
    <>
      <Header />
      <main className="case-study-page overflow-x-clip bg-white">
        <KaizenLanguagesOverview />
      </main>
      <Footer />
    </>
  );
}
