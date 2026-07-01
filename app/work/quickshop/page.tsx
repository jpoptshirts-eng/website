import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickShopCaseStudy from "@/components/case-study/quickshop/QuickShopCaseStudy";

export const metadata: Metadata = {
  title: "QuickShop — Case Study | Jacinto De Matos",
  description:
    "Reducing weekly grocery friction through behaviour-led basket building. A Waitrose case study on predictive personalisation, recommendation confidence and customer control.",
};

export default function QuickShopPage() {
  return (
    <>
      <Header />
      <main className="case-study-page bg-white">
        <QuickShopCaseStudy />
      </main>
      <Footer />
    </>
  );
}
