import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { kaizenFeatureComponents } from "@/components/case-study/kaizen-languages/kaizen-feature-pages";
import {
  getKaizenFeature,
  kaizenFeatures,
  type KaizenFeatureSlug,
} from "@/lib/kaizen-features";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return kaizenFeatures.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getKaizenFeature(slug);

  if (!feature) {
    return { title: "Not found | Jacinto De Matos" };
  }

  return {
    title: `${feature.shortTitle} — Kaizen Languages | Jacinto De Matos`,
    description: feature.summary,
  };
}

export default async function KaizenFeaturePage({ params }: PageProps) {
  const { slug } = await params;
  const feature = getKaizenFeature(slug);

  if (!feature) {
    notFound();
  }

  const FeatureComponent =
    kaizenFeatureComponents[feature.slug as KaizenFeatureSlug];

  return (
    <>
      <Header />
      <main className="case-study-page overflow-x-clip bg-white">
        <FeatureComponent />
      </main>
      <Footer />
    </>
  );
}
