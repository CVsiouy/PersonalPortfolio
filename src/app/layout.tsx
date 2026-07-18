import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandMenu from "@/components/CommandMenu";
import CursorGlow from "@/components/CursorGlow";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Chirag Verma | Full Stack .NET Developer & Quant Engineer",
  description:
    "Portfolio of Chirag Verma, a Software Developer specializing in .NET Core systems, Python-based algorithmic trading, and machine learning.",
  keywords: [
    "Chirag Verma",
    "Software Developer",
    "Full Stack .NET",
    ".NET Core",
    "C# Developer",
    "Quant Trading",
    "Python Developer",
    "Gurugram",
    "Gentell",
  ],
  authors: [{ name: "Chirag Verma" }],
  openGraph: {
    title: "Chirag Verma | Full Stack .NET Developer & Quant Engineer",
    description:
      "Explore the software engineering projects, quant trading backtesting, and enterprise .NET integrations of Chirag Verma.",
    url: "https://github.com/cvsiouy",
    siteName: "Chirag Verma Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Verma | Full Stack .NET Developer",
    description: "Software Developer specializing in .NET, Python, and Quant Trading.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground relative selection:bg-primary/30 selection:text-white">
        {/* Fixed space background image overlay */}
        <div 
          className="fixed inset-0 bg-cover bg-center opacity-[0.05] bg-no-repeat pointer-events-none -z-20" 
          style={{ backgroundImage: "url('/bg-image.jpg')" }} 
        />
        
        {/* Grain overlay */}
        <div className="noise-overlay" />
        
        {/* Floating gradient orb in background */}
        <div className="absolute top-[-10%] left-[50%] -translate-x-[50%] w-[600px] h-[350px] bg-primary/10 rounded-full orb -z-10" />

        <CursorGlow />

        <Suspense fallback={null}>
          <CommandMenu />
        </Suspense>
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-8 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
