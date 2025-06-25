import type { Metadata } from "next";
import { Providers } from "./providers";
import { Fira_Code } from "next/font/google";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import GoogleAnalytics from "../components/tools/GoogleAnalytics";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Český Lorem Ipsum Generator",
  description: "Generátor českého lorem ipsum textu s AI",
  authors: [{ name: "Codefit", url: "https://www.codefit.cz" }],
  creator: "Codefit",
  publisher: "Codefit",
  applicationName: "Český Lorem Ipsum Generator",
  keywords: ["český lorem ipsum", "generátor českého lorem ipsum", "český lorem ipsum generator", "český lorem ipsum generátor"],
  robots: "index, follow",
  openGraph: {
    title: "Český Lorem Ipsum Generator",
    description: "Generátor českého lorem ipsum textu s AI",
    url: "https://cesky-lorem-ipsum.codefit.cz",
    siteName: "Český Lorem Ipsum Generator",
    locale: "cs_CZ",
  },
   icons: {
    icon: "/favicon.ico", // nebo "/favicon.svg"
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

 const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Codefit',
    url: 'https://www.codefit.cz',
    logo: 'https://www.codefit.cz/logo.svg',
    description: 'Codefit je vývojářská firma, která se zabývá vývojem webových aplikací a služeb.',
    address: {
      '@type': 'PostalAddress',
    }
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={firaCode.className} suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
      <body className="flex flex-col min-h-screen">
        <Providers>
           <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
            <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
