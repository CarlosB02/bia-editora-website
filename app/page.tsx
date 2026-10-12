import { Metadata } from 'next';
import { Book } from '@/components/Book';
import { getBreadcrumbSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Bia Editora — Livros Infantis & Aventuras',
  description:
    'Bia Editora: livros infantis cheios de magia, imaginação e património. O primeiro título é «O Segredo de Grão Vasco». Viseu, Portugal.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Bia Editora — Livros Infantis & Aventuras',
    description:
      'Bia Editora: livros infantis cheios de magia, imaginação e património. O primeiro título é «O Segredo de Grão Vasco». Viseu, Portugal.',
    url: '/',
  },
};

export default function HomePage() {
  const breadcrumbSchema = getBreadcrumbSchema('/');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Book initialPage={0} initialRoute="/" />
    </>
  );
}
