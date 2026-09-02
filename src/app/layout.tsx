import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Temesgen Birhenu | Computer Science Student & Full-Stack Developer",
  description:
    "Portfolio of Temu Bire, a fourth-year Computer Science student and developer building full-stack web, mobile, and AI-powered applications.",
  keywords: [
    "Temu Bire",
    "Computer Science",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Python",
    "React Native",
    "AI Applications",
  ],
  authors: [{ name: "Temu Bire" }],
  creator: "Temu Bire",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://temubire.dev",
    title: "Temu Bire | Computer Science Student & Full-Stack Developer",
    description:
      "Portfolio of Temu Bire, a fourth-year Computer Science student and developer building practical software across web, mobile, and AI.",
    siteName: "Temu Bire Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temu Bire | Computer Science Student & Full-Stack Developer",
    description:
      "Portfolio of Temu Bire, a fourth-year Computer Science student and developer building full-stack web, mobile, and AI-powered applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <meta name="google-site-verification" content="6Fi4x7I0YP-l4fdSbDKf9fRz79l87tRKbEe2_R9srmQ" />
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
