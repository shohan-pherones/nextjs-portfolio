import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={clsx(inter.className, "bg-light text-dark")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
