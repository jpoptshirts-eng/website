import type { QuickShopInsight } from "@/lib/quickshop-data";

export default function InsightList({ items }: { items: QuickShopInsight[] }) {
  return (
    <ol className="grid gap-8 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.number} className="border-t border-border pt-6">
          <p className="text-4xl font-black tracking-tight text-orange md:text-5xl">
            {item.number}
          </p>
          <h3 className="mt-4 text-xl font-bold text-black md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-black md:text-lg">
            {item.copy}
          </p>
        </li>
      ))}
    </ol>
  );
}
