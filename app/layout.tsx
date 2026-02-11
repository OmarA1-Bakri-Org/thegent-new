import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://thegent.uk'),
  title: {
    default: "TheGent - AI-Powered Solutions for Modern Business",
    template: "%s | TheGent"
  },
  description: "Transform your business with cutting-edge AI solutions. TheGent delivers custom AI integrations, automation, and strategic consulting to accelerate your digital transformation.",
  keywords: ["AI solutions", "business automation", "AI consulting", "digital transformation", "machine learning", "AI integration", "enterprise AI", "AI strategy"],
  authors: [{ name: "TheGent" }],
  creator: "TheGent",
  publisher: "TheGent",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thegent.uk",
    siteName: "TheGent",
    title: "TheGent - AI-Powered Solutions for Modern Business",
    description: "Transform your business with cutting-edge AI solutions. Custom AI integrations, automation, and strategic consulting.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TheGent - AI-Powered Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheGent - AI-Powered Solutions for Modern Business",
    description: "Transform your business with cutting-edge AI solutions. Custom AI integrations, automation, and strategic consulting.",
    images: ["/og-image.png"],
    creator: "@thegent",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.iconify.design" />
        <link rel="dns-prefetch" href="https://api.iconify.design" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
