import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";
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
  title: "Oscar Torres | Senior Software Engineer & Tech Lead",
  description: "Portfolio of Oscar Torres, a Senior Software Engineer specializing in Frontend Architecture, React Performance, and Technical Leadership.",
  keywords: ["Oscar Torres", "Software Engineer", "Tech Lead", "React", "Next.js", "Frontend Architecture", "Web Components", "Performance"],
  authors: [{ name: "Oscar Torres" }],
  openGraph: {
    title: "Oscar Torres | Senior Software Engineer",
    description: "Building scalable, high-performance web systems.",
    type: "website",
    locale: "en_US",
    siteName: "Oscar Torres Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oscar Torres | Senior Software Engineer",
    description: "Building scalable, high-performance web systems.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
