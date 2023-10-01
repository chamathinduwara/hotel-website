import Header from "@/components/header/Header";
import Slider from "@/components/slider/Slider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Booking",
  description: "Come to out place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <div className="flex flex-col">
          <Header />
          <Slider />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
