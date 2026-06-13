import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmarterCaseStudy from "@/components/case-study/smarter/SmarterCaseStudy";

export const metadata: Metadata = {
  title: "Smarter — Case Study | Jacinto De Matos",
  description:
    "Designing one connected mobile app for the iKettle, Smarter Coffee and FridgeCam. A case study on IoT onboarding, device pairing, inventory management and connected product design.",
};

export default function SmarterPage() {
  return (
    <>
      <Header />
      <main className="case-study-page bg-white">
        <SmarterCaseStudy />
      </main>
      <Footer />
    </>
  );
}
