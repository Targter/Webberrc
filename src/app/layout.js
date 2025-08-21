import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Webber Electro corp",
  description: "Better Chip.Better Battery.Better ride",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full scrollbar-thin scrollbar-thumb-rounded bg-gray-50 scrollbar-thumb-gray-900 scrollbar-track-transparent`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
