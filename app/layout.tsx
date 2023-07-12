import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md. Shohanur Rahman | Home",
  description: "Developer portfolio of Md. Shohanur Rahman",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(spaceGrotesk.className, "bg-light text-dark")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
