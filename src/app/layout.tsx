import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),

  title: {
    default: "Raghul Sayee Kuppa Anandhachary Dhinakaran | Software Engineer & AI/ML Engineer",
    template: "%s | Raghul Sayee",
  },

  description:
    "Portfolio of Raghul Sayee, a Software Engineer and Northeastern University MSCS candidate building scalable backend systems, full-stack products, and intelligent AI applications.",

  keywords: [
    "Raghul Sayee",
    "Software Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Backend Engineer",
    "Full Stack Developer",
    "Generative AI",
    "Agentic AI",
    "RAG",
    "LangChain",
    "LangGraph",
    "Java",
    "C#",
    ".NET",
    "Python",
    "Northeastern University",
  ],

  authors: [
    {
      name: "Raghul Sayee Kuppa Anandhachary Dhinakaran",
    },
  ],

  creator: "Raghul Sayee Kuppa Anandhachary Dhinakaran",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Raghul Sayee Portfolio",
    title: "Raghul Sayee | Software Engineer & AI/ML Engineer",
    description:
      "Software Engineer building scalable backend systems, full-stack products, and intelligent AI applications.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Raghul Sayee software engineering portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Raghul Sayee | Software Engineer & AI/ML Engineer",
    description:
      "Software Engineer building scalable backend systems, full-stack products, and intelligent AI applications.",
    images: ["/opengraph-image.png"],
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}