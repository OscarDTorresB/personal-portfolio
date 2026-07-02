import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oscartorres.co";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#12161B" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Oscar Torres | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in React, frontend architecture, and AI-powered systems. Based in Colombia.",
  keywords: [
    "Oscar Torres",
    "Software Engineer",
    "React",
    "Next.js",
    "Frontend Architecture",
    "AI",
    "TypeScript",
  ],
  authors: [{ name: "Oscar Torres" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Oscar Torres | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, frontend architecture, and AI-powered systems.",
    type: "website",
    locale: "en_US",
    siteName: "Oscar Torres Portfolio",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Oscar Torres | Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oscar Torres | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, frontend architecture, and AI-powered systems.",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${schibsted.variable} ${hanken.variable} ${plexMono.variable} font-sans antialiased scroll-smooth`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
