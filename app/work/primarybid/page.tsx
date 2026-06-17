import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrimaryBidCaseStudy from "@/components/case-study/primarybid/PrimaryBidCaseStudy";

export const metadata: Metadata = {
  title: "PrimaryBid — Case Study | Jacinto De Matos",
  description:
    "Designing a cross-channel investment platform for PrimaryBid — product strategy, regulated UX and responsive transactional web across research, applications and order tracking.",
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
