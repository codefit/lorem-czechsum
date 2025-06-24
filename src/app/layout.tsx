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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={firaCode.className}>
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
      </body>
    </html>
  );
}
