"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, DM_Sans } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-dmsans",
});

const inter = Inter({ subsets: ["latin"], fallback: ["var(--font-dmsans)"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-gray-950   ${DMSans.variable}  `}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";
