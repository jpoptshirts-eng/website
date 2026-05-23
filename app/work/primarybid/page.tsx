import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrimaryBidCaseStudy from "@/components/case-study/primarybid/PrimaryBidCaseStudy";

export const metadata: Metadata = {
  title: "PrimaryBid — Case Study | Jacinto De Matos",
  description:
    "Designing confidence into regulated investment journeys. A PrimaryBid case study on fintech UX, high-trust product design and scalable financial workflows.",
};

export default function PrimaryBidPage() {
  return (
    <>
      <Header />
      <main className="case-study-page bg-white">
        <PrimaryBidCaseStudy />
      </main>
      <Footer />
    </>
  );
}
