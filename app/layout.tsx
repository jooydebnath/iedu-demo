import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { ToastProvider } from "@/lib/toast";

const hind = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "i Education — A Mark of Success",
  description:
    "বাংলাদেশের সবচেয়ে আধুনিক অনলাইন শিক্ষা প্ল্যাটফর্ম। SSC, HSC, Admission প্রস্তুতি — সেরা শিক্ষকদের সাথে।",
  keywords: ["i Education", "SSC", "HSC", "Admission", "Online Course", "Bangladesh"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={hind.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="font-bangla bg-paper-100 text-body antialiased" suppressHydrationWarning>
        <ToastProvider>
          <CartProvider>{children}</CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
