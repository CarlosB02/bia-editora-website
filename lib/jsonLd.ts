import { CONFIG } from './config';

/**
 * Organization / Publisher structured data
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PublishingCompany',
    '@id': `${CONFIG.siteUrl}/#organization`,
    name: 'Bia Editora',
    alternateName: 'Bia',
    url: CONFIG.siteUrl,
    logo: `${CONFIG.siteUrl}/icon.svg`,
    email: CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Viseu',
      addressCountry: 'PT',
    },
    // TODO: Adicionar links oficiais para redes sociais (Instagram, Facebook, LinkedIn)
    sameAs: [
      // TODO: https://instagram.com/biaeditora
    ],
    description:
      'Bia Editora: um livro e uma editora. O primeiro título é «O Segredo de Grão Vasco». Viseu, Portugal.',
  };
}

/**
 * Book structured data
 */
export function getBookSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Book',
    '@id': `${CONFIG.siteUrl}/#book`,
    name: 'O Segredo de Grão Vasco',
    bookFormat: 'https://schema.org/Hardcover',
    inLanguage: 'pt-PT',
    publisher: {
      '@id': `${CONFIG.siteUrl}/#organization`,
    },
    // TODO: Confirmar nome completo do autor / autores
    author: {
      '@type': 'Person',
      name: 'TODO: Autor de O Segredo de Grão Vasco',
    },
    // TODO: Inserir número oficial de ISBN quando registado
    isbn: 'TODO: 978-000-0000-00-0',
    numberOfPages: 16,
    offers: {
      '@type': 'Offer',
      price: '14.90',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: CONFIG.buyUrl !== '#' ? CONFIG.buyUrl : `${CONFIG.siteUrl}/o-livro`,
    },
  };
}

/**
 * Event structured data for the next launch
 */
export function getLaunchEventSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Lançamento do 2.º Livro da Bia Editora',
    startDate: CONFIG.launch, // 2026-11-09T00:00:00Z
    endDate: '2026-11-15T23:59:59Z',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    organizer: {
      '@id': `${CONFIG.siteUrl}/#organization`,
    },
    // TODO: Confirmar localização exata (Auditório, Biblioteca, Sé de Viseu, etc.)
    location: {
      '@type': 'Place',
      name: 'TODO: Local de lançamento em Viseu',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Viseu',
        addressCountry: 'PT',
      },
    },
    description:
      'Lançamento selado do segundo título da Bia Editora na segunda semana de novembro de 2026.',
  };
}

/**
 * BreadcrumbList structured data per route
 */
export function getBreadcrumbSchema(route: string) {
  const items = [{ name: 'Início', path: '/' }];

  if (route === '/o-livro') {
    items.push({ name: 'O Livro', path: '/o-livro' });
  } else if (route === '/historia') {
    items.push({ name: 'História', path: '/historia' });
  } else if (route === '/proximo-lancamento') {
    items.push({ name: 'Próximo Lançamento', path: '/proximo-lancamento' });
  } else if (route === '/parceiros') {
    items.push({ name: 'Parceiros', path: '/parceiros' });
  } else if (route === '/contacto') {
    items.push({ name: 'Contacto', path: '/contacto' });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${CONFIG.siteUrl}${item.path}`,
    })),
  };
}
