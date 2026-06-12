import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MealPlansCaseStudy from "@/components/case-study/meal-plans/MealPlansCaseStudy";

export const metadata: Metadata = {
  title: "Meal Plans — Case Study | Jacinto De Matos",
  description:
    "Designing a meal-centric shopping experience for Waitrose. A case study on guided meal planning, recipe discovery, behavioural UX and recipe-to-basket journeys.",
};

export default function MealPlansPage() {
  return (
    <>
      <Header />
      <main className="case-study-page bg-white">
        <MealPlansCaseStudy />
      </main>
      <Footer />
    </>
  );
}
