import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://my-portfolio-nine-blond.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mahmoud Khalil | Full Stack Developer — React, Next.js, Spring Boot",
    template: "%s | Mahmoud Khalil",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, and Spring Boot. Building high-performance websites and mobile apps. Available for new remote projects.",
  keywords: [
    "Mahmoud Khalil",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Spring Boot",
    "TypeScript",
    "React Native",
    "Java Developer",
    "Portfolio",
    "Alexandria",
    "Remote Developer",
  ],
  authors: [{ name: "Mahmoud Khalil", url: siteUrl }],
  creator: "Mahmoud Khalil",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mahmoud Khalil Portfolio",
    title: "Mahmoud Khalil | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React and Spring Boot. High-performance web and mobile applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Khalil | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React and Spring Boot. High-performance web and mobile applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
