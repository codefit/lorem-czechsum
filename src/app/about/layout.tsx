import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'O aplikaci - Český Lorem Ipsum Generator',
    description: 'Informace o Českém Lorem Ipsum Generatoru - open-source aplikaci pro generování českého placeholder textu s AI technologií. Vyvinuto společností Codefit Webdesign.',
    keywords: 'český lorem ipsum, placeholder text, AI generátor, codefit, webdesign',
    openGraph: {
      title: 'O aplikaci - Český Lorem Ipsum Generator',
      description: 'Informace o Českém Lorem Ipsum Generatoru - open-source aplikaci pro generování českého placeholder textu s AI technologií.',
      type: 'website',
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 