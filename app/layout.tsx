import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wizfield.com"),
  title: {
    default: "WIZFIELD | Field-Service Operating System",
    template: "%s | WIZFIELD",
  },
  description:
    "WIZFIELD is the intelligent operating system for field-service businesses, connecting operations, intelligence, growth, and multi-business control.",
  icons: {
    icon: [{ url: "/brand/wizfield-mark.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full">
        <MarketingHeader />
        <main>{children}</main>
        <MarketingFooter />
      </body>
    </html>
  );
}
