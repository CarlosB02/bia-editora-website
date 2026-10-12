import { Metadata } from 'next';
import { Book } from '@/components/Book';
import { getBreadcrumbSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Rede de Parceiros — Bia Editora',
  description:
    'A rede de apoio e cumplicidade que acompanha a Bia Editora: academia, livrarias, escolas, património e criativos.',
  alternates: {
    canonical: '/parceiros',
  },
  openGraph: {
    title: 'Rede de Parceiros — Bia Editora',
    description:
      'A rede de apoio e cumplicidade que acompanha a Bia Editora: academia, livrarias, escolas, património e criativos.',
    url: '/parceiros',
  },
};

export default function PartnersPage() {
  const breadcrumbSchema = getBreadcrumbSchema('/parceiros');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Book initialPage={9} initialRoute="/parceiros" />
    </>
  );
}
