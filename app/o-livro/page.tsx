import { Metadata } from 'next';
import { Book } from '@/components/Book';
import { getBreadcrumbSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'O Segredo de Grão Vasco — Bia Editora',
  description:
    'Descubra «O Segredo de Grão Vasco», o primeiro título da Bia Editora. Uma narrativa que percorre as memórias e a arte de Viseu.',
  alternates: {
    canonical: '/o-livro',
  },
  openGraph: {
    title: 'O Segredo de Grão Vasco — Bia Editora',
    description:
      'Descubra «O Segredo de Grão Vasco», o primeiro título da Bia Editora. Uma narrativa que percorre as memórias e a arte de Viseu.',
    url: '/o-livro',
  },
};

export default function BookPage() {
  const breadcrumbSchema = getBreadcrumbSchema('/o-livro');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Book initialPage={3} initialRoute="/o-livro" />
    </>
  );
}
