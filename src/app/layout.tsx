import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { profileData } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

// Set NEXT_PUBLIC_SITE_URL in Vercel when you add a custom domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://my-portfolio-temubre1996-8124s-projects.vercel.app";

// Name and role come from data/profile.ts, so you fix a spelling in one place.
const { name, role } = profileData;
const description =
  "Fourth-year Computer Science student building full-stack web apps with Next.js, Node.js and PostgreSQL, plus mobile and AI-powered products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${name} | ${role}`,
    template: `%s | ${name}`,
  },
  description,
  keywords: [
    name,
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "FastAPI",
    "Python",
    "React Native",
    "Ethiopia",
  ],
  authors: [{ name, url: siteUrl }],
  creator: name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${name} | ${role}`,
    description,
    siteName: `${name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} | ${role}`,
    description,
  },
  robots: { index: true, follow: true },
  verification: {
    google: "6Fi4x7I0YP-l4fdSbDKf9fRz79l87tRKbEe2_R9srmQ",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fafafa",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle: role,
  url: siteUrl,
  description,
  sameAs: profileData.socialLinks
    .map((link) => link.url)
    .filter((url) => url.startsWith("http")),
  knowsAbout: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Python"],
  alumniOf: "Debre Berhan University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col bg-bg font-sans text-ink antialiased selection:bg-accent selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}