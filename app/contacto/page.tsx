import { Metadata } from 'next';
import { Book } from '@/components/Book';
import { getBreadcrumbSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Contacto — Escreva à Bia Editora',
  description:
    'Toda a boa história começa com uma carta. Encomendas, parcerias, escolas, imprensa ou conversa sobre livros em Viseu.',
  alternates: {
    canonical: '/contacto',
  },
  openGraph: {
    title: 'Contacto — Escreva à Bia Editora',
    description:
      'Toda a boa história começa com uma carta. Encomendas, parcerias, escolas, imprensa ou conversa sobre livros em Viseu.',
    url: '/contacto',
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema('/contacto');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Book initialPage={11} initialRoute="/contacto" />
    </>
  );
}
