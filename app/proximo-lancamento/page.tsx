import { Metadata } from 'next';
import { Book } from '@/components/Book';
import { getBreadcrumbSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Próximo Lançamento — Selado até Novembro — Bia Editora',
  description:
    'O segundo título da Bia Editora está selado até à segunda semana de novembro de 2026. Acompanhe a contagem decrescente e seja avisado.',
  alternates: {
    canonical: '/proximo-lancamento',
  },
  openGraph: {
    title: 'Próximo Lançamento — Selado até Novembro — Bia Editora',
    description:
      'O segundo título da Bia Editora está selado até à segunda semana de novembro de 2026. Acompanhe a contagem decrescente e seja avisado.',
    url: '/proximo-lancamento',
  },
};

export default function LaunchPage() {
  const breadcrumbSchema = getBreadcrumbSchema('/proximo-lancamento');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Book initialPage={7} initialRoute="/proximo-lancamento" />
    </>
  );
}
