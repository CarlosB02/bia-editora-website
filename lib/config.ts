export interface BookConfig {
  buyUrl: string;
  price: string;
  email: string;
  launch: string;
  title: string;
  subtitle: string;
  bookTitle: string;
  publisher: string;
  location: string;
  siteUrl: string;
}

export const CONFIG: BookConfig = {
  buyUrl: "#", // link da loja / página de compra
  price: "14,90 €", // preço do livro
  email: "ola@biaeditora.pt", // email de contacto
  launch: "2026-11-09T00:00:00Z", // segunda semana de novembro (seg., 9 nov. de 2026)
  title: "Bia Editora",
  subtitle: "Livros Infantis & Aventuras",
  bookTitle: "O Segredo de Grão Vasco",
  publisher: "Bia Editora",
  location: "Viseu, Portugal",
  siteUrl: "https://biaeditora.pt",
};

export const mailto = (subj: string, body = ""): string =>
  `mailto:${CONFIG.email}?subject=${encodeURIComponent(subj)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;
