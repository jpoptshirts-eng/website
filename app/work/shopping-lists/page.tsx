import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoppingListsCaseStudy from "@/components/case-study/shopping-lists/ShoppingListsCaseStudy";

export const metadata: Metadata = {
  title: "Shopping Lists — Case Study | Jacinto De Matos",
  description:
    "Turning messy shopping intent into intelligent baskets. A Waitrose case study on AI-assisted shopping lists, behavioural UX and confidence-based recommendations.",
};

export default function ShoppingListsPage() {
  return (
    <>
      <Header />
      <main className="case-study-page bg-white">
        <ShoppingListsCaseStudy />
      </main>
      <Footer />
    </>
  );
}
