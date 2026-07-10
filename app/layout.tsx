import type { Metadata } from "next";
import { Newsreader, Inter, Space_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { MobileNav } from "@/components/mobile-nav";
import { NavProvider } from "@/components/nav-context";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Restoran Adria — Vodice",
  description:
    "Restoran Adria, na rivi u Vodicama od davnina. Svježa jadranska riba, domaća tjestenina i terasa s pogledom na luku i otoke. Obala Matice hrvatske 8, Vodice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${newsreader.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavProvider>
          <SmoothScroll>{children}</SmoothScroll>
          {/* Sibling of the header (see components/site-header.tsx), never a child of it —
              a backdrop-blur on a fixed header would clip/trap a nested mobile nav. */}
          <MobileNav />
        </NavProvider>
      </body>
    </html>
  );
}
