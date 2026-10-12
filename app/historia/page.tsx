import { Metadata } from 'next';
import { Book } from '@/components/Book';
import { getBreadcrumbSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'A História — Da sala de aula ao prelo — Bia Editora',
  description:
    'Como um projeto universitário se tornou numa editora premiada em Viseu. A história da Bia Editora e a inspiração no escudo de Viriato.',
  alternates: {
    canonical: '/historia',
  },
  openGraph: {
    title: 'A História — Da sala de aula ao prelo — Bia Editora',
    description:
      'Como um projeto universitário se tornou numa editora premiada em Viseu. A história da Bia Editora e a inspiração no escudo de Viriato.',
    url: '/historia',
  },
};

export default function HistoryPage() {
  const breadcrumbSchema = getBreadcrumbSchema('/historia');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Book initialPage={5} initialRoute="/historia" />
    </>
  );
}
