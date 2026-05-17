import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "orange" | "button-outline" | "button-solid";
  external?: boolean;
}

export default function ArrowLink({
  href,
  children,
  className,
  variant = "default",
  external,
}: ArrowLinkProps) {
  const base =
    "inline-flex items-center gap-1 font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange";

  const variants = {
    default:
      "text-sm uppercase text-black hover:text-orange",
    orange: "text-sm uppercase text-orange hover:text-black",
    "button-outline":
      "rounded-full border border-black px-6 py-3 text-sm uppercase text-black hover:bg-black hover:text-white",
    "button-solid":
      "rounded-full bg-orange px-8 py-4 text-sm uppercase text-white hover:bg-black",
  };

  const content = (
    <>
      {children}
      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
    </>
  );

  if (external || href.startsWith("http") || href.startsWith("mailto")) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], className)}
        {...(external || href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  );
}
