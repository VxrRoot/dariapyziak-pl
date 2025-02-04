import { client } from "./sanity";

export async function getPortfolios() {
  const query: string = `*[_type == "portfolio"] {
            _id,
            title,
            slug,
            tags,
            titleImage,
            content,
            order,
            images,
            public
          }`;

  // @ts-ignore
  const data = await client.fetch(query, {}, { next: { revalidate: 300 } });

  return data;
}

export async function getAboutMe(lang: string) {
  const query: string = `*[_type == "aboutMe"]{
    _id,
  "title": title[$lang], // Tytuł w wybranym języku
  "content": coalesce(content[$lang], []), // Pobiera content w wybranym języku lub pustą tablicę
  Image
  }`;

  const params = { lang };

  const data = await client.fetch(query, params);

  return data;
}

// export async function getPortfolio(slug: string) {
//   const query = `*[_type == 'portfolio' && slug.current == '${slug}'] {
//     _id,
//     title,
//     slug,
//     tags,
//     titleImage,
//     content,
//     images,
//     public
//   }`;

//   // @ts-ignore
//   const data = await client.fetch(query);

//   return data;
// }

export async function getPortfolio(slug: string, lang: string) {
  const query = `*[_type == 'portfolio' && slug.current == $slug] {
    _id,
    "title": title[$lang], // Tytuł w wybranym języku
    "tags": tags[$lang], // Tagi w wybranym języku
    "titleImage": {
      "url": titleImage.asset->url, // URL obrazu
      "alt": coalesce(titleImage.alt[$lang], "Default alt text") // Alt w wybranym języku lub fallback
    },
    "content": coalesce(content[$lang], []), // Pobiera content w wybranym języku lub pustą tablicę
    "images": images[]{
      "url": asset->url, // URL obrazów
      "caption": coalesce(caption[$lang], "Default caption") // Podpis w wybranym języku
    },
    slug,
    public,
    opinion
  }`;

  const params = { slug, lang };

  // Pobierz dane z Sanity
  const data = await client.fetch(query, params);

  return data;
}
