import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Sigmar, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/Providers";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sigmar = Sigmar({
  variable: "--font-sigmar",
  subsets: ["latin"],
  weight: "400",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["100", "400", "900"],
});

export const metadata: Metadata = {
  title: "organi-zone",
  description: "Sells Shirataki Rice at reasonable price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sigmar.variable} ${notoSansJP.variable} antialiased`}
      >
          <Toaster
  richColors
  toastOptions={{
    style: {
      backgroundColor: "#000",
      color: "white",
      borderRadius: "8px",
      padding: "20px",

    },
  }}
/>

        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
