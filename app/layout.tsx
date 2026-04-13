import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oscartorres.co";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF9" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0C0B" },
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
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
