import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacinto De Matos — Senior Product Designer",
  description:
    "Senior Product Designer based in London. Solving complex problems and creating meaningful products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
