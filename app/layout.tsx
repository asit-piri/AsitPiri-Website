import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asit Piri | Enterprise AI Strategist & Quantum-AI Architect",
  description:
    "Portfolio of Asit Piri — 25+ years driving large-scale data, cloud, and AI transformations. Principal Data Scientist & AI Architect. Open to freelance and full-time opportunities.",
  keywords: [
    "AI Architect",
    "Principal Data Scientist",
    "Generative AI",
    "Agentic AI",
    "LLMOps",
    "Enterprise AI",
    "Quantum AI",
    "Machine Learning",
    "Full-Stack AI Builder",
    "Freelance AI Consultant",
  ],
  authors: [{ name: "Asit Piri" }],
  openGraph: {
    title: "Asit Piri | Enterprise AI Strategist",
    description:
      "Visionary Enterprise AI Strategist and Quantum-AI Architect with 25+ years of experience driving AI transformations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asit Piri | Enterprise AI Strategist",
    description:
      "Principal Data Scientist & AI Architect — Open to freelance and full-time opportunities",
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
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased bg-[#030712] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
