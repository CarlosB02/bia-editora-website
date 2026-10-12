import type { Metadata, Viewport } from 'next';
import './globals.css';
import { fraunces, newsreader, ibmPlexMono } from './fonts';
import { CONFIG } from '@/lib/config';
import {
  getOrganizationSchema,
  getBookSchema,
  getLaunchEventSchema,
} from '@/lib/jsonLd';
import { NoScriptReader } from '@/components/NoScriptReader';

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.siteUrl),
  title: {
    default: 'Bia Editora — Livro & Editora',
    template: '%s — Bia Editora',
  },
  description:
    'Bia Editora: um livro e uma editora. O primeiro título é «O Segredo de Grão Vasco». Viseu, Portugal.',
  applicationName: 'Bia Editora',
  authors: [{ name: 'Bia Editora' }],
  generator: 'Next.js',
  keywords: [
    'Bia Editora',
    'O Segredo de Grão Vasco',
    'Viseu',
    'Livro',
    'Editora',
    'Literatura',
    'Grão Vasco',
    'Viriato',
  ],
  creator: 'Bia Editora',
  publisher: 'Bia Editora',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: CONFIG.siteUrl,
    title: 'Bia Editora — Livro & Editora',
    description:
      'Bia Editora: um livro e uma editora. O primeiro título é «O Segredo de Grão Vasco». Viseu, Portugal.',
    siteName: 'Bia Editora',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bia Editora — Livro & Editora',
    description:
      'Bia Editora: um livro e uma editora. O primeiro título é «O Segredo de Grão Vasco».',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#16100c',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const bookSchema = getBookSchema();
  const eventSchema = getLaunchEventSchema();

  return (
    <html
      lang="pt-PT"
      className={`${fraunces.variable} ${newsreader.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
      </head>
      <body className="closed">
        {children}
        <NoScriptReader />
      </body>
    </html>
  );
}
