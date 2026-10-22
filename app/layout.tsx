import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sumandontha.dev"),

  title: {
    default: "Suman Dontha | Senior Frontend Developer & UI/UX Engineer",
    template: "%s | Suman Dontha"
  },

  description:
    "Explore the portfolio of Suman Dontha, a React and Next.js developer specialising in modern web applications, TypeScript, responsive UI development, accessible design systems, and full-stack solutions.",

  applicationName: "Suman Dontha Portfolio",

  authors: [{ name: "Suman Dontha" }],

  creator: "Suman Dontha",

  keywords: [
    "Suman Dontha",
    "Senior Frontend Developer",
    "React Developer UK",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "UI UX Engineer",
    "Full Stack Developer",
    "Responsive Web Design",
    "Accessible Web Applications",
    "Design Systems",
    "Portfolio Projects",
    "CivicFlow",
    "FinBank"
  ],

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: "Suman Dontha Portfolio",
    title: "Suman Dontha | React, Next.js & UI/UX Portfolio",
    description:
      "Discover modern web applications, frontend engineering projects, and user-focused digital experiences built by Suman Dontha."
  },

  twitter: {
    card: "summary_large_image",
    title: "Suman Dontha | Frontend Developer Portfolio",
    description:
      "React, Next.js, TypeScript and UI/UX projects showcasing modern frontend engineering."
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
