import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1d2e' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Oscar Torres | Senior Software Engineer & Tech Lead",
  description: "Portfolio of Oscar Torres, a Senior Software Engineer specializing in Frontend Architecture, React Performance, and Technical Leadership.",
  keywords: ["Oscar Torres", "Software Engineer", "Tech Lead", "React", "Next.js", "Frontend Architecture", "Web Components", "Performance"],
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
    description: "Building scalable, high-performance web systems.",
    type: "website",
    locale: "en_US",
    siteName: "Oscar Torres Portfolio",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Oscar Torres | Senior Software Engineer & Tech Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oscar Torres | Senior Software Engineer",
    description: "Building scalable, high-performance web systems.",
    creator: "@oscartorres",
    site: "@oscartorres",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
