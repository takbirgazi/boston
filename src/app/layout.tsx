import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Outfit } from "next/font/google";
import SmoothScrollWrapper from "./SmoothScrollWrapper";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Boston",
  description: "Boston Airport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${poppins.variable} ${outfit.variable}`}
      >
        <Header />
        <SmoothScrollWrapper>
          {children}
        </SmoothScrollWrapper>
        <Footer />
      </body>
    </html>
  );
}
